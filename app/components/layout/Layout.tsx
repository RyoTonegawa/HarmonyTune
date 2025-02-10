"use client";

import Header from "./Header";
import Footer from "./Footer";
import Tabs from "./Tabs";
import { ThemeProvider } from "../themeProvider/theme-provider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Tabs />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="flex-grow">{children}</main>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
