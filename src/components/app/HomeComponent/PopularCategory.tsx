import { Box, Container, Text, Heading, Link, Image, Flex } from '@chakra-ui/react';
import React from 'react';
import CategoryContent from '../../core/CategoryContent/CategoryContent';
import { CategoryLeft } from '../../core/CategoryContent/CategoryLeft';
import { SaleCard } from '../../core/CategoryContent/SaleCard';
import { BuyCard } from '../../core/CategoryContent/BuyCard';
import { AuctionCard } from '../../core/CategoryContent/AuctionCard';

const PopularCategory = () => {
  return (
    <>
      <Box pb="102px">
        <Container maxW={'1752px'} mx={'auto'}>
          <Box textAlign={'center'}>
            <Text
              fontSize={{ lg: '18px', md: '16px', sm: '14px', base: '11px' }}
              lineHeight={'27px'}
              fontWeight={'300'}
              letterSpacing={'0.03em'}
              textTransform={'uppercase'}
              color="#FFDF6C">
              Popular CATEGORIES
            </Text>
            <Heading
              fontFamily={'body'}
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
              fontWeight={'600'}
              textTransform={'uppercase'}
              color={'#F0FCFB'}>
              Explore OUR PRODUCTS
            </Heading>
          </Box>

          <Box mt="24px">
            <Flex gap="24px" direction={{ base: 'column', md: 'column', lg: 'row' }}>
              <CategoryLeft />

              <Box w={{ base: '100%', md: '100%', lg: '75%' }}>
                <Flex
                  direction={{ base: 'column', md: 'row' }}
                  mb="8px"
                  flexWrap={'wrap'}
                  justifyContent="space-between">
                  <SaleCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img1.png"
                    HeartCount="000"
                    Citizen="Yeti-z"
                    CardTitle="FYeti-z"
                    CardDesc="Insulating boots against extreme temperatures in siberia."
                    PriceCut="$300"
                    OriginalPrice="$260"
                  />
                  <AuctionCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img2.png"
                    HeartCount="000"
                    Citizen="Endurance"
                    CardTitle="Storm eye 14B"
                    CardDesc="The weapon with the highest firepower and range of the Neptune brand."
                    BidPrice="$26.00"
                  />
                  <BuyCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img3.png"
                    HeartCount="000"
                    Citizen="Cyberthief jacket"
                    CardTitle="Purple"
                    CardDesc="Modern jacket, with aesthetic cyberpunk style details."
                    PriceTag="  $120.00"
                  />

                  <SaleCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img4.png"
                    HeartCount="000"
                    Citizen="Harmony"
                    CardTitle="Chopper 7"
                    CardDesc="Comfortable shoes for all occasions"
                    PriceCut="$300"
                    OriginalPrice="$30.00"
                  />
                  <AuctionCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img5.png"
                    HeartCount="000"
                    Citizen="Endurance"
                    CardTitle="Scorpion cape"
                    CardDesc="desert camo cloak"
                    BidPrice="$29.00"
                  />
                  <BuyCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img6.png"
                    HeartCount="000"
                    Citizen="Siberia"
                    CardTitle="bear claw"
                    CardDesc="Snow axe, used as a tool on the rugged Siberian crags, can be used as a weapon."
                    PriceTag="  $23.00"
                  />

                  <SaleCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img7.png"
                    HeartCount="000"
                    Citizen="Citadel"
                    CardTitle="Blue night dress"
                    CardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
                    PriceCut="$300"
                    OriginalPrice="$26.00"
                  />
                  <AuctionCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img8.png"
                    HeartCount="000"
                    Citizen="Endurance"
                    CardTitle="Tacama Watch"
                    CardDesc="Smart watch super resistant to extreme climates."
                    BidPrice="$8.50"
                  />
                  <BuyCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img9.png"
                    HeartCount="000"
                    Citizen="Enoch Citizen"
                    CardTitle="CEO jacket"
                    CardDesc="A special jacket, which serves to represent one of the highest ranks in the facilities, as operational director of various sectors."
                    PriceTag="  $50.00"
                  />

                  <SaleCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img10.png"
                    HeartCount="000"
                    Citizen="Purple"
                    CardTitle="Lobo round"
                    CardDesc="Steampunk style glasses, a retro touch within the Purple collection."
                    PriceCut="$300"
                    OriginalPrice="$72.75"
                  />
                  <AuctionCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img11.png"
                    HeartCount="000"
                    Citizen="Citadel"
                    CardTitle="T45 Flama"
                    CardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
                    BidPrice="$50.00"
                  />
                  <BuyCard
                    cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                    image="https://cdn.enochdev.com/marketplace-assets/card-img12.png"
                    HeartCount="000"
                    Citizen="Quantomfleet"
                    CardTitle="Universal Power bank"
                    CardDesc="power bank to charge the batteries of the scooters, with capacity for 4 batteries at the same time."
                    PriceTag="  $64.00"
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default PopularCategory;
