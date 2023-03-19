import { Box, Container, Flex, Image, Img, Input, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuctionCard } from '../../../core/CategoryContent/AuctionCard';
import { BuyCard } from '../../../core/CategoryContent/BuyCard';
import { SaleCard } from '../../../core/CategoryContent/SaleCard';
import PurchasePack from '../../HomeComponent/Purchasepack';
import AllPeoples from './AllPeoples';
import AllShops from './AllShops';
import MarketplaceCards from './MarketplaceCards';
import { MarketplaceDropdown } from './MarketplaceDropdown';
import PeopleCard from './PeopleCard';
import { SearchContext, SearchContextProvider } from './SearchContext';

const Search = () => {
  const { category, setCategory } = useContext(SearchContext);

  return (
    <>
      <Box bg="#08131D" w="100%">
        <Container maxW="1752px" p="0" m={'auto'}>
          <Box w={{ base: '100%', md: '100%', lg: '100%' }}>
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
              {category.includes('Marketplace') && (
                <>
                  <MarketplaceCards />
                </>
              )}
            </Box>
          </Box>
          {category.includes('People') && (
            <>
              {' '}
              <AllPeoples />
            </>
          )}

          {category.includes('Shop') && (
            <>
              <AllShops />
            </>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Search;
