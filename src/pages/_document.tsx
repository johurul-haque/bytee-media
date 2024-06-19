import { Head, Html, Main, NextScript } from "next/document";
import { inter } from "@/lib/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
