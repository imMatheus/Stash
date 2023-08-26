import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient, getApolloClient } from "~/apollo";
import { Navbar } from "~/ui/components/Navbar";
import { Toaster } from "~/ui/components/Toast";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = getApolloClient() || createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </ApolloProvider>
  );
}
