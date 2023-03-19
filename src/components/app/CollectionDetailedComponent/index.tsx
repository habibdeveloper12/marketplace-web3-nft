import React from 'react';
import { Box, Container, Text, Heading, Flex, Img } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  BoxWrapper,
  Banner,
  NFTDashboard,
  CategoryLeft,
  Pagination,
  NftCardWrapper
} from '../../core/CommonComponents';
import { collectionNFTData } from '../../../constants/nft';
import { getFileUrl } from '../../../utils/getFileUrl';

const CollectionDetailedComponent = () => {
  const router = useRouter();
  const collectionName: any = router.query.collection;

  const collectionBannerImgsrc = {
    Harmony: 'marketplace-assets/assets/images/harmony.webp',
    Purple: 'marketplace-assets/assets/images/purple.webp',
    Endurance: 'marketplace-assets/assets/images/endurance.webp',
    Siberia: 'marketplace/assets/images/serbia.webp',
    'Big Bang': 'marketplace-assets/assets/images/bigbang.webp',
    Infinity: 'marketplace-assets/assets/images/infinity.webp'
  };
  return (
    <BoxWrapper>
      <Container variant="mainContainer">
        <Banner
          image={
            collectionBannerImgsrc[collectionName] ||
            'marketplace-assets/assets/images/detaield-collection-banner.png'
          }
          Tag="DETAILED COLLECTION"
        />
        <NFTDashboard collectionName={collectionName} />
        <Box textAlign={'center'}>
          <Text variant="textPrimary">SUB HEADING</Text>
          <Heading variant="headingPrimary">All 3d models in ENOCH CITIZEN collection</Heading>
        </Box>
        <Flex mt={'40px'} gap="24px" direction={{ base: 'column', md: 'column', lg: 'row' }}>
          <CategoryLeft />

          <Box w={{ base: '100%', md: '100%', lg: '75%' }}>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              mb="8px"
              flexWrap={'wrap'}
              justifyContent="space-between">
              {collectionNFTData.map((collection) => {
                return <NftCardWrapper {...collection} />;
              })}
            </Flex>
            <Box mb="40px">
              <Img
                src={getFileUrl('marketplace-assets/assets/images/detailed-collection-ad.png')}
                borderRadius={'4px'}
                w="100%"></Img>
            </Box>
          </Box>
        </Flex>
        <Pagination />
      </Container>
    </BoxWrapper>
  );
};

export default CollectionDetailedComponent;
