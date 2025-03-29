
import type { Metadata } from "next";
import GlobalProvider from "@/context/Global/GlobalContext";
import GradientBackground from "@/components/client/common/GradientBackground/GradientBackground";

export const metadata: Metadata = {
  title: {
    default: "Cloud Commerce",
    template: "%s | Cloud Commerce",
  },
  description: "An e-commerce platform featuring a diverse selection of products and a seamless shopping experience powered by cutting-edge cloud technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <GlobalProvider>
        <GradientBackground> {children} </GradientBackground>
        </GlobalProvider>
      </body>
    </html>
  );
}