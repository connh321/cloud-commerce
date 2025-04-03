import type { Metadata } from 'next';
import GlobalProvider from '@/context/Global/GlobalContext';
import GradientBackground from '@/components/client/common/GradientBackground/GradientBackground';
import { CartProvider } from '@/context/Cart/cart';
import Auth from '@/components/client/common/Auth/Auth';
import { AuthProvider } from '@/context/Auth/auth';

export const metadata: Metadata = {
  title: {
    default: 'Cloud Commerce',
    template: '%s | Cloud Commerce',
  },
  description:
    'An e-commerce platform featuring a diverse selection of products and a seamless shopping experience powered by cutting-edge cloud technologies.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Auth>
            <GlobalProvider>
              <CartProvider>
                <GradientBackground> {children} </GradientBackground>
              </CartProvider>
            </GlobalProvider>
          </Auth>
        </AuthProvider>
      </body>
    </html>
  );
}
