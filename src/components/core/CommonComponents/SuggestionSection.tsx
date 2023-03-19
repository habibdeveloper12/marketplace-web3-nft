import React from 'react';
import { Box, Flex, Text, Img, Button } from '@chakra-ui/react';
// import Collections from '../../app/ProductDetailedComponent/Collections';
import { ExploreCategories } from './ExploreCategories';
import CommunitySlider from '../../app/ProductDetailedComponent/CommunitySlider';
// import ReviewSection from '../../app/ProductDetailedComponent/ReviewSection';
import { exploreData } from '../../../constants/marketplaceData';
import { getFileUrl } from "../../../utils/getFileUrl";

export const SuggestionSection = () => {
  return (
    <>
      <Flex gap="24px" flexDirection={{ base: 'column', md: 'column', lg: 'row' }} pb="40px">
        <Box
          w={{ base: '100%', md: '100%', lg: '50%' }}
          bg="colorPrimaryDark"
          border="1px solid #667AE4"
          p="27px 30px 46px 32px"
          backdropBlur={'27px'}>
          <Box>
            <Text variant="textSecondary">ABOUT THE CREATOR</Text>
            <Box display={'flex'} alignItems="center" mt="13px">
              <Img alt="cre-img" src={getFileUrl("marketplace-assets/assets/images/CreWorsh.svg")} mr="8px"></Img>
              <Text as="h5" fontSize={'16px'} color="White" fontWeight="500" lineHeight={'24px'}>
                @Enoch Studio
              </Text>
            </Box>
            <Text mt="18px" as="h5" variant="textTertiary">
              Enoch creative labs is a result of our team's expertise in designing 3D accessories
              for fashion and other 3D products that are sold on the Enoch marketplace. We regularly
              update the marketplace with new collectible content so shoppers have something fresh
              to look forward to every time they visit us!
            </Text>
          </Box>
        </Box>
        <Box
          w={{ base: '100%', md: '100%', lg: '50%' }}
          bg="colorPrimaryDark"
          border="1px solid #667AE4"
          p="27px 30px 75px 32px"
          backdropBlur={'27px'}>
          <Box>
            <Text variant="textSecondary" mb="16px">
              ENOCH CITIZEN
            </Text>

            <Text as="h5" mb="24px" variant="textTertiary">
              Enoch creative labs is a result of our team's expertise in designing 3D accessories
              for fashion and other 3D products that are sold on the Enoch marketplace. We regularly
              update the marketplace with new collectible content so shoppers have something fresh
              to look forward to every time they visit us!
            </Text>
            <Button
              fontSize={'15px'}
              borderRadius="2px"
              padding="9px"
              bg="transparent"
              border="1px solid #FFFFFF"
              colorScheme={'tranparent'}
              color="#C1C1DC"
              letterSpacing="0.02em"
              fontWeight="600"
              lineHeight={'22px'}>
              See Full Collection
            </Button>
          </Box>
        </Box>
      </Flex>
      <Box pb="40px">
        <Box mb={{ base: '14px', md: '32px' }}>
          <Text
            as="h4"
            color="#81F7FF"
            fontWeight={'300'}
            fontSize={{ base: '10px', sm: '14px', md: '18px' }}
            lineHeight={'27px'}
            letterSpacing="0.3em"
            textTransform={'uppercase'}>
            since you viewed this collection item
          </Text>
          <Text
            as="h4"
            color="primaryWhite"
            fontWeight={'700'}
            fontSize={{
              xl: '36px',
              lg: '32px',
              md: '28px',
              sm: '24px',
              base: '22px'
            }}
            lineHeight={{
              xl: '54px',
              lg: '45px',
              md: '40px',
              sm: '36px',
              base: '32px'
            }}
            textTransform={'uppercase'}>
            More From This Collection
          </Text>
        </Box>

        {/* <Collections /> */}
      </Box>
      <Box pb="40px">
        <Box mb={{ base: '14px', md: '32px' }}>
          <Text
            as="h4"
            color="#81F7FF"
            fontWeight={'300'}
            fontSize={{ base: '10px', sm: '14px', md: '18px' }}
            lineHeight={'27px'}
            letterSpacing="0.3em"
            textTransform={'uppercase'}>
            Based on current item
          </Text>
          <Text
            as="h4"
            color="primaryWhite"
            fontWeight={'700'}
            fontSize={{
              xl: '36px',
              lg: '32px',
              md: '28px',
              sm: '24px',
              base: '22px'
            }}
            lineHeight={{
              xl: '54px',
              lg: '45px',
              md: '40px',
              sm: '36px',
              base: '32px'
            }}
            textTransform={'uppercase'}>
            Recommended NFTs for You
          </Text>
        </Box>
        {/* <Collections /> */}
      </Box>
      <Box>
        <ExploreCategories category={exploreData} title="Browse by Popular Categories" />
      </Box>
      <Box mb="32px">
        <CommunitySlider />
        {/* <ReviewSection /> */}
      </Box>
    </>
  );
};
