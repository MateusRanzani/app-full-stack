import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import NavBar from "../components/navBar";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
       <NavBar/>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
