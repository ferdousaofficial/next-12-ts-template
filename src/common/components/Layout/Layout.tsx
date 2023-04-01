import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import Head from "next/head";
import React from "react";
// default layout configuration
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Instant Image Fix</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
