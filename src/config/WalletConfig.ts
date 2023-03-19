import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, connectorsForWallets, darkTheme } from '@rainbow-me/rainbowkit';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { allChains, appChains } from '../utils/Blockchain/Chains/index';
import myCustomTheme from '../utils/Blockchain/Themes/myCustomTheme';
import { getRecommendedWallets, getOtherWallets } from '../utils/Blockchain/Wallets/index';
let supportedChains;

const walletConfig = {
  walletEnv: process.env.NEXT_PUBLIC_APP_ENVIRONMENT || 'prod'
};

if (walletConfig.walletEnv && walletConfig.walletEnv.toLowerCase() == 'mainnet') {
  supportedChains = appChains.mainnetChains;
} else {
  supportedChains = appChains.testnetChains;
}

const { chains, provider } = configureChains(supportedChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHECMY_RPC_URL || '' }),
  publicProvider()
]);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: getRecommendedWallets(chains)
  },
  {
    groupName: 'Others',
    wallets: getOtherWallets(chains)
  }
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

const appInfo = {
  appName: 'Enoch App',
  learnMoreUrl: 'https://www.enochdev.com/'
};

export const Config = {
  client: wagmiClient,
  appInfo: appInfo,
  supportedChains: chains,
  theme: myCustomTheme
};
