import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/header";
import Head from "next/head";
import { Footer } from "@/components/footer";
import { WhatsappLink } from "@/components/whatsapp-link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bytee Media - One stop solution for Creators!</title>
        <meta
          name="description"
          content='One stop solution for content creators. Say goodbye to average content and "Hello to Excellence"'
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bytee Media - One stop solution for creators"
        />
        <meta
          property="og:description"
          content='One stop solution for content creators. Say goodbye to average content and "Hello to Excellence"'
        />
        <meta property="og:url" content="https://byteemedia.com/" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
      <WhatsappLink />
    </>
  );
}
