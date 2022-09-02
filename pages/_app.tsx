import "../styles/globals.css";
import "../styles/index.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import NavBar from "../components/navBar";
import "../styles/news.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
       <NavBar/>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
