import type { Metadata } from 'next';
import '@sass/globals.scss';

export const metadata: Metadata = {
  title: 'Cart',
  description:
    'View and manage your shopping cart. Review your items, update quantities, and checkout securely.',
};

export default async function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
