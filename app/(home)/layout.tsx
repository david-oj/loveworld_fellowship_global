import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="flex-1 font-inter">{children}</main>
      <Footer />
    </>
  );
}
