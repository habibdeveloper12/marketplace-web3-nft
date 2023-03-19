import React from 'react';
import Avatar3d from './Avatar3d';
import EnochAds from './EnochAds';
import ExploreCategories from './ExploreCategories';
import FollowTrend from './FollowTrend';
import LandingPageBanner from './LandingPageBanner';
import Launching from './Launching';
import PurchasePack from './Purchasepack';
import RecommendedCollectibles from './RecommendedCollectibles';
import WatchOut from './WatchOut';
import GameFashionStudio from './GameFashionStudio';
import PopularCategory from './PopularCategory';
import { Box, Container } from '@chakra-ui/react';
import { Explore } from '../../../constants/home';

const HomeComponent = () => {
  return (
    <>
      <Container variant="mainContainer">
        <Box position={'relative'} zIndex={'11'}>
          <LandingPageBanner />
          <Launching />
          <RecommendedCollectibles />
          <ExploreCategories data={Explore} title="EBrowse by Popular CATEGORIES" />
          <EnochAds />
          <FollowTrend />
          <Avatar3d />
          <PurchasePack />
          <WatchOut />
          {/* <GameFashionStudio/> */}
          <PopularCategory />
        </Box>
      </Container>
    </>
  );
};

export default HomeComponent;
