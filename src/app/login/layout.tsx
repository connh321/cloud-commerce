import type { Metadata } from "next";
import '@sass/globals.scss';

export const metadata: Metadata = {
  title: "Login | Sign Up",
  description: "VLogin or sign up to unlock your shopping cart and start shopping today!",
};

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
