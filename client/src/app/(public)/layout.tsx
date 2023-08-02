import "../globals.scss";
import React from "react";
import { Header, Footer } from "@/components";

export default function RootLayout(props: any) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
