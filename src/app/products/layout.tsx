import type { Metadata } from "next";
import '@sass/globals.scss';

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our products high-quality products featuring top picks. Discover your next favorite item today!",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
