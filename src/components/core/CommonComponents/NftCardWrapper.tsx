import React from 'react';
import { AuctionCard, BuyCard, SaleCard, UserSaleCard, CollectionCard, EnochCitizenCard } from './';
import { NFTCardTypes } from '../../../constants/nft';
import { NFTTYPE } from '../../../constants/nft-enum';

export const NftCardWrapper = (props: NFTCardTypes | any) => {
  switch (props.saleType) {
    case NFTTYPE.AUCTION:
      return <AuctionCard {...props} />;
    case NFTTYPE.BUY:
      return <BuyCard {...props} />;
    case NFTTYPE.SALE:
      return <SaleCard {...props} />;
    case NFTTYPE.USER_SALE:
      return <UserSaleCard {...props} />;
    case NFTTYPE.COLLECTION:
      return <CollectionCard {...props} />;
    case NFTTYPE.ENOCH_CITIZEN:
      return <EnochCitizenCard {...props} />;
    default:
      return null;
  }
};
