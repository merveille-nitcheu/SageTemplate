import React, { ReactNode } from "react";
import MenuBar from "../Components/MenuBar";

interface LayoutProps {
  children: ReactNode;
}
export default function LandingPage({ children }: LayoutProps) {
  return (
    <>
      <MenuBar />
      <main>{children}</main>
    </>
  );
}
