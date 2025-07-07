"use client";

import { useTheme } from "next-themes";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from "nextjs-toploader";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

export default function ThemeClientProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme(); // Obtiene el tema actual

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {/* Aplica el tema directamente en el div */}
      <div className={`${theme === "dark" ? "dark" : "light"}`} style={{ colorScheme: theme }}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD, 0 0 5px #2299DD"
        />
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </div>
    </ThemeProvider>
  );
}