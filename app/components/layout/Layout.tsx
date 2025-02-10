"use client";

import Header from "./Header";
import Footer from "./Footer";
import Tabs from "./Tabs";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Tabs />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
