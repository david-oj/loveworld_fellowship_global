import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="h-full font-inter">{children}</main>;
}
