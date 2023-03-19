import React from 'react';
import { Box, Button, Container, Flex, Heading, Input, Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BoxWrapper, Pagination, Banner, ShopCard } from '../../core/CommonComponents';
import { shopCardData } from '../../../constants/userShop';
import { getFileUrl } from "../../../utils/getFileUrl";

const ShopLandingComponent = () => {
  const router = useRouter();

  const handleNavigation = (id: string) => {
    router.push(`/shop/${id}`);
  };

  return (
    <BoxWrapper styles={{ pb: '126px' }}>
      <Container variant="mainContainer">
        <Banner image="marketplace-assets/assets/images/shop-main-banner.png" Tag="COLLECTION" />
        <Box textAlign={'center'} mb={'24px'}>
          <Text variant="textPrimary">Follow the trend</Text>
          <Heading variant="headingPrimary">EXCLUSIVE SHOP</Heading>
        </Box>
        <Box bg={'colorPrimaryDark'} borderRadius={'4px'} p={'24px'} mb={'40px'}>
          <Flex
            maxW={'861px'}
            width={'100%'}
            maxH={'54px'}
            alignItems={'center'}
            borderRadius={'2px'}
            bg={'#192C45'}
            pl={'16px'}
            pr={'30px'}
            py={'15px'}>
            <Input
              placeholder="Search Shop"
              border={'none'}
              outline={'none'}
              overflow={'hidden'}
              pl={'0px'}
              _focusVisible={{ outline: 'none' }}
              color={'#CFCFE7'}
              fontWeight={'400'}
              fontSize={'14px'}
              lineHeight={'21px'}
            />
            <Button
              bg="transparent"
              _hover={{ bg: 'transparent' }}
              _focus={{ bg: 'transparent' }}
              border="none"
              height={'24px'}
              width={'24px'}
              p={'3px'}>
              <Image src={getFileUrl("marketplace-assets/assets/images/search_icon.svg")} alt="icon" />
            </Button>
          </Flex>
        </Box>

        <Flex flexWrap={'wrap'} mx={'-12px'} mb={'20px'}>
          {shopCardData.map((shopCardInformation) => {
            return (
              <ShopCard
                key={shopCardInformation.id}
                data={shopCardInformation}
                onClick={() => handleNavigation(shopCardInformation.id)}
              />
            );
          })}
        </Flex>

        <Pagination />
      </Container>
    </BoxWrapper>
  );
};

export default ShopLandingComponent;
