import type { Metadata } from "next";
import '@sass/globals.scss';

export const metadata: Metadata = {
  title: "Sign Out",
  description: "Sign out.",
};

export default async function SignOutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
