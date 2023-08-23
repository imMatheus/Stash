import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "~/apollo";
import { Navbar } from "~/ui/components/Navbar";
import { Toaster } from "~/ui/components/Toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={createApolloClient()}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </ApolloProvider>
  );
}
