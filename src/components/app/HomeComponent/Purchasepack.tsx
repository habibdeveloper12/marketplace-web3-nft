import { Box, Container, Text, Heading, Flex, Link, Image, Button } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { useRouter } from "next/router";
import { purchaseData } from '../../../constants/marketplaceData';
import PurchaseCard from './PurchaseCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { PurchaseData } from '../../../constants/home';

const PurchasePack = () => {
  const router = useRouter();
  const handleNavigation = useCallback(() => {
    router.push('/avatar-packs');
  }, []);

  return (
    <>
      <Box pb={'100px'}>
        <Container variant={"primaryContainer"}>
        <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              py="24px"
            >
              <Text
                fontSize={"24px"}
                fontWeight={"600"}
                lineHeight={"170%"}
                color="white"
              >
               Top Avatar Packs
              </Text>
              <Flex alignItems={"center"}>
                <Text
                  fontSize={"15px"}
                  fontWeight={"600"}
                  lineHeight={"25px"}
                  color="#1DB4F4"
                  mr="12px"
                >
                  VIEW ALL
                </Text>
                <Image src="https://cdn.enochdev.com/starget-bucket/starget-dashboard/viewallicon.svg" />
              </Flex>
            </Flex>
          <Box pt={'32px'}>
            <Flex flexWrap={'wrap'} mx={'-12px'}>
              {PurchaseData.map((purchase,index) => {
                return (
                  <Box
                    key={index}
                    width={{ lg: '33.33%', md: '50%', base: '100%' }}
                    px={'12px'}
                    mb={'24px'}>
                    <PurchaseCard data={purchase} onPurchase={handleNavigation}/>
                  </Box>
                );
              })}
            </Flex>
          </Box>

          <Flex
            maxW="120px"
            width={'100%'}
            mx={'auto'}
            mt={'28px'}
            justifyContent={'space-between'}>
            <Button
              height={'48px'}
              width={'48px'}
              bg={'rgba(23, 23, 43, 0.7)'}
              backdropFilter={'blur(7px)'}
              borderRadius={'50%'}
              border={'1px solid #E64411'}
              fontSize={'32px'}
              color={'#FFFFFF'}
              _hover={{ bg: '#17172B' }}
              _focus={{ bg: '#17172B' }}>
              <ChevronLeftIcon />
            </Button>
            <Button
              height={'48px'}
              width={'48px'}
              bg={'rgba(23, 23, 43, 0.7)'}
              backdropFilter={'blur(7px)'}
              borderRadius={'50%'}
              border={'1px solid #E64411'}
              fontSize={'32px'}
              color={'#FFFFFF'}
              _hover={{ bg: '#17172B' }}
              _focus={{ bg: '#17172B' }}>
              <ChevronRightIcon />
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default PurchasePack;
