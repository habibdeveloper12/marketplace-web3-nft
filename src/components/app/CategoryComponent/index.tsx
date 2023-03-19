import React, { FC, useCallback } from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Img
} from '@chakra-ui/react';
import '@fontsource/poppins';
import {
  CategoryLeft,
  Pagination,
  Banner,
  NftCardWrapper,
  BoxWrapper
} from '../../core/CommonComponents';
import { useRouter } from 'next/router';
import { nftCollections } from '../../../constants/nft';
import { getFileUrl } from '../../../utils/getFileUrl';
import SearchPanel from './SearchPanel';
import { SaleCard } from '../../core/CategoryContent/SaleCard';
import { AuctionCard } from '../../core/CategoryContent/AuctionCard';
import { BuyCard } from '../../core/CategoryContent/BuyCard';
import { ArrowRightIcon } from '@chakra-ui/icons';

const Category: FC = () => {
  const router = useRouter();
  const handleNavigation = useCallback((id: string) => {
    router.push(`/product/${id.split('/')[1]}`);
  }, []);
  return (
    <>
      <BoxWrapper>
        <Container variant="mainContainer">
          <Breadcrumb
            mt="20px"
            spacing="8px"
            separator={<ArrowRightIcon h="10px" color="#878F98" />}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                color="#878F98"
                fontSize="13px"
                fontWeight="400"
                lineHeight={'20px'}
                textDecoration={'underline'}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                href="#"
                fontSize="13px"
                fontWeight="400"
                lineHeight={'20px'}
                color="#878F98">
                Categories
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Banner image={'marketplace-assets/assets/images/category_banner.webp'} />
          <Flex
            gap="24px"
            direction={{
              base: 'column',
              md: 'column',
              lg: 'row'
            }}>
            <SearchPanel />
            {/* <CategoryLeft /> */}
            <Box w={{ base: '100%', md: '100%', lg: '75%' }}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                mb="8px"
                flexWrap={'wrap'}
                justifyContent="space-between">
                <SaleCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-1.png"
                  HeartCount="000"
                  Citizen="Purple"
                  CardTitle="Purple fury"
                  CardDesc="High-tech smartwatch accompanied by the distinctive style of purple. "
                  PriceCut="$20.00"
                  OriginalPrice="$17.00"
                />
                <AuctionCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-2.png"
                  HeartCount="000"
                  Citizen="Hong Kong"
                  CardTitle="VG blasts"
                  CardDesc="Energy grenade, destroys everything in a radius of 5 meters around, and iscapable of stunning targets at more than 15 meters. "
                  BidPrice="$37.00"
                />
                <BuyCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-3.png"
                  HeartCount="000"
                  Citizen="Siberia"
                  CardTitle="bear claw"
                  CardDesc="Snow axe, used as a tool on the rugged Siberian crags, can be used as a weapon. "
                  PriceTag=" $23.00"
                />

                <SaleCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-4.png"
                  HeartCount="000"
                  Citizen="Purple"
                  CardTitle="Lobo round"
                  CardDesc="Steampunk style glasses, a retro touch within the Purple collection. "
                  PriceCut="$15"
                  OriginalPrice="$12.75"
                />
                <AuctionCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-5.png"
                  HeartCount="000"
                  Citizen="Enoch Citizen"
                  CardTitle="D14 Jerrybean "
                  CardDesc="Advanced scouting drone, formerly used by the military, but often used in large-scale robberies as well. "
                  BidPrice="$58.00"
                />
                <BuyCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-6.png"
                  HeartCount="000"
                  Citizen="Harmony"
                  CardTitle="Celestial 2045"
                  CardDesc="A classic style watch model worn by harmony passengers as a vintage style. "
                  PriceTag="  $20.00"
                />

                <SaleCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-7.png"
                  HeartCount="000"
                  Citizen="2060"
                  CardTitle="M60 smoker"
                  CardDesc="High-tech smoke grenade, ideal for successful escapes. "
                  PriceCut="$30.00"
                  OriginalPrice="$25.50"
                />
                <AuctionCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-8.png"
                  HeartCount="000"
                  Citizen="Siberia"
                  CardTitle="MIDsaber Axe "
                  CardDesc="Nearly indestructible axe, sharpened with a diamond tip. Used as a tool or as a weapon. "
                  BidPrice="$95.00"
                />
                <BuyCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-9.png"
                  HeartCount="000"
                  Citizen="Quantumfleet"
                  CardTitle="Astra access pass"
                  CardDesc="Wrist band, which allows access to restricted areas within the fleet. "
                  PriceTag="   $12.00"
                />

                <SaleCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-10.png"
                  HeartCount="000"
                  Citizen="Endurance"
                  CardTitle="Tacama Watch"
                  CardDesc="smart watch super resistant to extreme climates. "
                  PriceCut="$10.00"
                  OriginalPrice="$8.50"
                />
                <AuctionCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-11.png"
                  HeartCount="000"
                  Citizen="Hong kong"
                  CardTitle="AV zeed"
                  CardDesc="Dron de vigilancia avanzado, usado como primera fila de defensa en las peligrosas calles de hong kong."
                  BidPrice="$45.00"
                />
                <BuyCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-12.png"
                  HeartCount="000"
                  Citizen="2060"
                  CardTitle="TR compact"
                  CardDesc="Compact short-range energy grenade, ideal for causing confusion.  "
                  PriceTag="  $20.00"
                />
              </Flex>
              <Box mb="32px">
                <Img
                  src="https://cdn.enochdev.com/marketplace/assets/winprizecasha.webp"
                  borderRadius={'4px'}
                  w="100%"></Img>
              </Box>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                mb="32px"
                flexWrap={'wrap'}
                justifyContent="space-between">
                <SaleCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-13.png"
                  HeartCount="000"
                  Citizen="Purple"
                  CardTitle="Purple fury"
                  CardDesc="High-tech smartwatch accompanied by the distinctive style of purple. "
                  PriceCut="$20.00"
                  OriginalPrice="$17.00"
                />
                <AuctionCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-14.png"
                  HeartCount="000"
                  Citizen="Purple"
                  CardTitle="Purple fury"
                  CardDesc="High-tech smartwatch accompanied by the distinctive style of purple. "
                  BidPrice="$45.00"
                />
                <BuyCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-15.png"
                  HeartCount="000"
                  Citizen="Purple"
                  CardTitle="Purple fury"
                  CardDesc="High-tech smartwatch accompanied by the distinctive style of purple. "
                  PriceTag="  $20.00"
                />

                <SaleCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-16.png"
                  HeartCount="000"
                  Citizen="Purple"
                  CardTitle="Purple fury"
                  CardDesc="High-tech smartwatch accompanied by the distinctive style of purple. "
                  PriceCut="$20.00"
                  OriginalPrice="$17.00"
                />
                <AuctionCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-17.png"
                  HeartCount="000"
                  Citizen="Purple"
                  CardTitle="Purple fury"
                  CardDesc="High-tech smartwatch accompanied by the distinctive style of purple. "
                  BidPrice="$45.00"
                />
                <BuyCard
                  cardWidth={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
                  image="https://cdn.enochdev.com/marketplace/assets/products-18.png"
                  HeartCount="000"
                  Citizen="Purple"
                  CardTitle="Purple fury"
                  CardDesc="High-tech smartwatch accompanied by the distinctive style of purple. "
                  PriceTag="  $20.00"
                />
              </Flex>
            </Box>
          </Flex>
          <Pagination />
        </Container>
      </BoxWrapper>
    </>
  );
};

export default Category;
