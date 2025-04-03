'use client';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';

interface AuthContextType {
  signedIn: boolean;
  setSignedIn: (signedIn: boolean) => void;
  email: string | null;
  setEmail: (email: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  const rehydrateUserSession = async () => {
    try {
      const { signInDetails } = await getCurrentUser();
      if (signInDetails?.loginId) {
        setSignedIn(true);
        setEmail(signInDetails.loginId);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {}
  };

  useEffect(() => {
    // Rehydrate session when the component mounts
    rehydrateUserSession();

    const hubListener = Hub.listen('auth', async (data) => {
      switch (data.payload.event) {
        case 'signedIn':
          rehydrateUserSession();
          router.push('/');
          break;
        case 'signedOut':
          setEmail(null);
          setSignedIn(false);
          router.push('/');
          break;
      }
    });

    return () => hubListener();
  }, [router]);

  return (
    <AuthContext.Provider value={{ signedIn, setSignedIn, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
