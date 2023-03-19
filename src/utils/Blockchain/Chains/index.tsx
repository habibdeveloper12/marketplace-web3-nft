import { chain } from 'wagmi';
import { AvaxChain } from './AvaxChain';
import { FujiChain } from './FujiChain';
import { BinanceMainnetChain } from './BinanceMainnetChain';
import { BinanceTestnetChain } from './BinanceTestnetChain';

const goerli = {
  ...chain.goerli,
  iconUrl: 'https://cdn.enochdev.com/starget-bucket/public-signup-signin/etherium.svg'
};
const mainnet = {
  ...chain.mainnet,
  iconUrl: 'https://cdn.enochdev.com/starget-bucket/public-signup-signin/etherium.svg'
};
const polygon = {
  ...chain.polygon,
  iconUrl: 'https://cdn.enochdev.com/starget-bucket/public-signup-signin/Polygon.svg'
};
const polygonMumbai = {
  ...chain.polygonMumbai,
  iconUrl: 'https://cdn.enochdev.com/starget-bucket/public-signup-signin/Polygon.svg'
};

export const allChains = [
  goerli,
  mainnet,
  polygon,
  polygonMumbai,
  AvaxChain,
  FujiChain,
  BinanceMainnetChain,
  BinanceTestnetChain
];
export const testnetChains = [goerli, polygonMumbai, FujiChain, BinanceTestnetChain];
export const mainnetChains = [mainnet, polygon, AvaxChain, BinanceMainnetChain];

export const appChains = {
  allChains,
  testnetChains,
  mainnetChains
};