
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ThemeClientProvider from "@/components/ThemeClientProvider";


const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoffeDream | CoffeShop",
  description: "Bienvenidos a mi E-Commerce por Matias Perez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
    >
      <body className={`${urbanist.className}`}>
        <ThemeClientProvider>{children}</ThemeClientProvider>
      </body>
    </html>
  );
}
