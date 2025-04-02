import type { Metadata } from "next";
import '@sass/globals.scss';

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to unlock your shopping cart and start shopping today!",
};

export default async function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
