import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar';
import 'react-toastify/dist/ReactToastify.css';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { Config } from '../src/config/WalletConfig';
import { theme } from '../src/Theme/ChakraThemeConfig';
import LayoutWrapper from '../src/components/core/Layout/LayoutWrapper';
import EnochClient from '../src/services/EnochClient';
import '../styles/globals.css';
import '../styles/Home.module.css';

function Marketplace({ Component, pageProps }: AppProps) {
  const [initialChain, setInitialChain] = useState(Config.supportedChains[0]);

  const setDefaultChain = (newChain: any) => {
    setInitialChain(newChain);
  };

  const modifiedAppProps = {
    ...pageProps,
    allChains: Config.supportedChains,
    setDefaultChain: setDefaultChain,
    initialChain: initialChain
  };
  return (
    <ApolloProvider client={EnochClient.client}>
      <ChakraProvider resetCSS theme={theme}>
        <WagmiConfig client={Config.client}>
          <RainbowKitProvider
            appInfo={Config.appInfo}
            chains={Config.supportedChains}
            initialChain={initialChain}
            modalSize="compact"
            theme={Config.theme}>
            <LayoutWrapper
              chains={Config.supportedChains}
              setDefaultChain={setDefaultChain}
              initialChain={initialChain}>
              <NextNProgress />
              <Component {...modifiedAppProps} />
              <ToastContainer theme="colored" draggable={false} />
            </LayoutWrapper>
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default Marketplace;
