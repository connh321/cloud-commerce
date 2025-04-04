import type { Metadata } from 'next';
import '@sass/globals.scss';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Explore our homepage featuring top picks and a variety of high-quality products. Discover your next favorite item today!',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
