import React from 'react';
import { Box, Container, Flex, Img, Button, Text } from '@chakra-ui/react';
import '@fontsource/poppins';
import { CategoryLeft, Pagination, Banner, NftCardWrapper, BoxWrapper } from '../../core/CommonComponents';
import { shopNftData } from '../../../constants/nft';
import UserDashboard from './UserDashboard';
import { getFileUrl } from '../../../utils/getFileUrl';

const Shop = () => {
  return (
    <BoxWrapper>
      <Banner image={getFileUrl('marketplace-assets/assets/images/RemedyGames.png')} render={UserDashboard} />
      <Container maxW={'1360px'} mt={'7%'} px="20px">
        <Flex gap="20px" flexDirection={{ base: 'column', lg: 'row' }} mb={'4%'}>
          <Box
            display="flex"
            alignItems={'center'}
            gap="50px"
            fontSize="20px"
            paddingLeft={{ base: '0px', lg: '50px' }}
            padding={{ base: '10px' }}
            height="70px"
            flex={3}
            bg="#0A1F37">
            <Box as={'span'} color="blue-50">
              Listed for sale
            </Box>
            <Box as={'span'} color="#688DB3">
              Activity
            </Box>
          </Box>
          <Button
            borderRadius="none"
            color="white"
            fontSize="20px"
            padding={{ base: '10px' }}
            display="flex"
            gap="8px"
            bg="blue-100"
            height={'70px'}
            flex={0.8}>
            <Img alt="img" src={getFileUrl('marketplace-assets/assets/images/Vector.png')} />
            <Text textTransform="uppercase" fontWeight="700">
              Manage Shop
            </Text>
          </Button>
        </Flex>
        <Flex
          gap="24px"
          direction={{
            base: 'column',
            md: 'column',
            lg: 'row'
          }}>
          <CategoryLeft />
          <Box
            w={{
              base: '100%',
              md: '100%',
              lg: '75%'
            }}>
            <Flex
              direction={{
                base: 'column',
                md: 'row'
              }}
              mb="8px"
              flexWrap={'wrap'}
              justifyContent="space-between">
              {shopNftData.map((nft) => {
                return <NftCardWrapper key={nft._id} {...nft}></NftCardWrapper>;
              })}
            </Flex>
            <Box mb="32px">
              <Img
                alt="outcast"
                src={getFileUrl("marketplace-assets/assets/images/outcaste.png")}
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

export default Shop;
