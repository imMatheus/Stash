import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient, getApolloClient } from "~/apollo";
import { Navbar } from "~/ui/components/Navbar";
import { Toaster } from "~/ui/components/Toast";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = getApolloClient() || createApolloClient();
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      {getLayout(<Component {...pageProps} />)}
      <Toaster />
    </ApolloProvider>
  );
}
