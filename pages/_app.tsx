import "@styles/main.scss";
import "@styles/globals.scss";
import { RecoilRoot } from "recoil";
import Layout from "@components/layout/native-layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;

/* A PROJECT BY PG https://github.com/smartercow */
