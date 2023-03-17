import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/layout/Footer";
export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className="w-full min-h-[100vh] ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
