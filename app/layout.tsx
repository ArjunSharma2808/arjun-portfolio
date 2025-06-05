import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import React, { PropsWithChildren } from "react";



const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
