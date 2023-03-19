import { Box, Container, Flex, Image, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { PurchaseData } from '../../../../constants/peopleCardInfo';
import { AuctionCard } from '../../../core/CategoryContent/AuctionCard';
import { BuyCard } from '../../../core/CategoryContent/BuyCard';
import { SaleCard } from '../../../core/CategoryContent/SaleCard';
import PurchaseCard from '../../HomeComponent/PurchaseCard';

const MarketplaceCards = () => {
  return (
    <>
      <Container maxW="1816px" m={'auto'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} py="24px">
          <Text fontSize={'24px'} fontWeight={'600'} lineHeight={'170%'} color="white">
            Most Popular
          </Text>
          <Flex alignItems={'center'}>
            <Text
              fontSize={'15px'}
              fontWeight={'600'}
              lineHeight={'25px'}
              color="#1DB4F4"
              mr="12px">
              VIEW ALL
            </Text>
            <Image src="https://cdn.enochdev.com/starget-bucket/starget-dashboard/viewallicon.svg" />
          </Flex>
        </Flex>
        <Box w={{ base: '100%', md: '100%', lg: '100%' }}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            mb="8px"
            flexWrap={'wrap'}
            mx="-12px"
            // justifyContent="space-between"
          >
            <Box
              mx="12px"
              w={{
                base: '100%',
                md: '46%',
                lg: '47.9%',
                xl: '23%'
              }}>
              <SaleCard
                cardWidth={{
                  base: '100%'
                }}
                MarginBox="24px"
                image="https://cdn.enochdev.com/marketplace/assets/black3d.png"
                HeartCount="000"
                Citizen="Enoch Citizen"
                CardTitle="Purple fury"
                CardDesc="High-tech smartwatch accompanied by the distinctive style of purple. "
                PriceCut="$20.00"
                OriginalPrice="$17.00"
              />
            </Box>
            <Box
              mx="12px"
              w={{
                base: '100%',
                md: '46%',
                lg: '47.9%',
                xl: '23%'
              }}>
              <SaleCard
                cardWidth={{
                  base: '100%'
                }}
                image="https://cdn.enochdev.com/marketplace/assets/black3d.png"
                HeartCount="000"
                Citizen="Enoch Citizen"
                CardTitle="Purple fury"
                CardDesc="High-tech smartwatch accompanied by the distinctive style of purple. "
                PriceCut="$20.00"
                OriginalPrice="$17.00"
                MarginBox={{ lg: '0px', xl: '24px', base: '0px' }}
              />
            </Box>
            <Box
              mx="12px"
              w={{
                base: '100%',
                md: '46%',
                lg: '47.9%',
                xl: '23%'
              }}>
              <AuctionCard
                cardWidth={{
                  base: '100%'
                }}
                image="https://cdn.enochdev.com/marketplace/assets/black3d.png"
                HeartCount="000"
                Citizen="Enoch Citizen"
                CardTitle="VG blasts"
                CardDesc="Energy grenade, destroys everything in a radius of 5 meters around, and iscapable of stunning targets at more than 15 meters. "
                BidPrice="$37.00"
                MarginBox="24px"
              />
            </Box>
            <Box
              mx="12px"
              w={{
                base: '100%',
                md: '46%',
                lg: '47.9%',
                xl: '23%'
              }}>
              <BuyCard
                cardWidth={{
                  base: '100%'
                }}
                image="https://cdn.enochdev.com/marketplace/assets/black3d.png"
                HeartCount="000"
                Citizen="Enoch Citizen"
                CardTitle="bear claw"
                CardDesc="Snow axe, used as a tool on the rugged Siberian crags, can be used as a weapon. "
                PriceTag=" $23.00"
              />
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text fontSize={'24px'} fontWeight={'600'} lineHeight={'170%'} color="white">
            Top Avatar Packs
          </Text>
          <Flex alignItems={'center'}>
            <Text
              fontSize={'15px'}
              fontWeight={'600'}
              lineHeight={'25px'}
              color="#1DB4F4"
              mr="12px">
              VIEW ALL
            </Text>
            <Image src="https://cdn.enochdev.com/starget-bucket/starget-dashboard/viewallicon.svg" />
          </Flex>
        </Flex>
        <Box pt={'32px'}>
          <Flex flexWrap={'wrap'} mx={'-12px'}>
            {PurchaseData.map((purchase) => {
              return (
                <Box width={{ lg: '33.33%', md: '50%', base: '100%' }} px={'12px'} mb={'24px'}>
                  <PurchaseCard data={purchase} />
                </Box>
              );
            })}
          </Flex>
        </Box>
        <Flex justifyContent={'space-between'} alignItems={'center'} py="24px">
          <Text fontSize={'24px'} fontWeight={'600'} lineHeight={'170%'} color="white">
            Explore Categories
          </Text>
          <Flex alignItems={'center'}>
            <Text
              fontSize={'15px'}
              fontWeight={'600'}
              lineHeight={'25px'}
              color="#1DB4F4"
              mr="12px">
              VIEW ALL
            </Text>
            <Image src="https://cdn.enochdev.com/starget-bucket/starget-dashboard/viewallicon.svg" />
          </Flex>
        </Flex>

        <Flex flexWrap={'wrap'} mx={'-12px'}>
          <Box
            width={{ lg: '33.33%', md: '50%', base: '100%' }}
            px={'12px'}
            mb={'24px'}
            position={'relative'}>
            <Img src="https://cdn.enochdev.com/marketplace/assets/lenox.png" />
            <Img
              src="https://cdn.enochdev.com/marketplace/assets/360icn.svg"
              position={'absolute'}
              top="24px"
              left="24px"
            />
          </Box>
          <Box
            width={{ lg: '33.33%', md: '50%', base: '100%' }}
            px={'12px'}
            mb={'24px'}
            position={'relative'}>
            <Img src="https://cdn.enochdev.com/marketplace/assets/lenox.png" />
            <Img
              src="https://cdn.enochdev.com/marketplace/assets/360icn.svg"
              position={'absolute'}
              top="24px"
              left="24px"
            />
          </Box>
          <Box
            width={{ lg: '33.33%', md: '50%', base: '100%' }}
            px={'12px'}
            mb={'24px'}
            position={'relative'}>
            <Img
              src="https://cdn.enochdev.com/marketplace/assets/lenox.png"
              position={'relative'}
            />
            <Img
              src="https://cdn.enochdev.com/marketplace/assets/360icn.svg"
              position={'absolute'}
              top="24px"
              left="24px"
            />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default MarketplaceCards;
