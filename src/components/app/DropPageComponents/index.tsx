import { Box, Container, Heading, Text, Flex, Image, Input } from '@chakra-ui/react';
import { base } from '@rainbow-me/rainbowkit/dist/css/reset.css';
import React, { useCallback, useState } from 'react';
import { dropCardInfo } from '../../../constants/dropPageData';
import { SelectInputWrapper } from '../../core/CommonComponents';
import { Banner } from './../Category/Banner';
import DropCard from './DropCard';

const sortingOptions = [
  'Latest',
  'Top Rated',
  'Latest',
  'Price low to high',
  'Price high to low',
  'Popular'
];

const Drop = () => {
  const [filterOption, setFilterOption] = useState('');
  const [sortingOption, setSortingOption] = useState(sortingOptions[0]);

  const handleFilter = useCallback(
    (obj: any) => {
      setFilterOption(obj?.value);
    },
    [filterOption]
  );

  const handleSorting = useCallback(
    (obj: any) => {
      setSortingOption(obj?.value);
    },
    [sortingOption]
  );

  return (
    <>
      <Box>
        <Container maxW="1752px" mx="auto">
          <Box>
            <Banner image="https://cdn.enochdev.com/marketplace-assets/drop-banner.png" />
          </Box>

          <Box textAlign="center" mb="40px">
            <Text
              fontSize={{ lg: '18px', md: '16px', sm: '14px', base: '11px' }}
              lineHeight={'27px'}
              fontWeight={'300'}
              letterSpacing={'0.03em'}
              textTransform={'uppercase'}
              color="#FFDF6C">
              FREE For Copernicus members
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
              Explore DROPS
            </Heading>
          </Box>
          <Box
            bg="#112135"
            borderRadius={'4px'}
            p="24px"
            display={'flex'}
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems={{ md: 'center', base: 'flex-start' }}
            gap="10px"
            flexDirection={{ base: 'column', md: 'row' }}
            mb={{ base: '50px', md: '70px', lg: '90px' }}>
            <Box mr="10px" bg="#112334" borderRadius={'2px'} p="10px 24px" maxW={'861px'} w="100%">
              <Flex flexDirection={{ base: 'column', md: 'row' }}>
                <Box
                  w="100%"
                  display={'flex'}
                  alignItems="center"
                  justifyContent="space-between"
                  ml={{ xsm: '16px' }}
                  border="1px solid #8F9099"
                  h="48px"
                  maxW="647px"
                  borderRadius="6px"
                  px="12px"
                  mt={{ xsm: '0px', base: '16px' }}>
                  <Input
                    w="100%"
                    placeholder="Search  by collection name"
                    border="none"
                    outline={'none'}
                    color="#879FAF"
                    px="0px"
                    py="4px"
                    ml="15px"
                  />
                  <Image
                    src="https://cdn.enochdev.com/marketplace-assets/searchicons.svg"
                    alt="icon"
                    filter="brightness(100%)"></Image>
                </Box>
              </Flex>
            </Box>
            <SelectInputWrapper
              {...{ placeholder: sortingOption, options: sortingOptions, onChange: handleSorting }}
            />
          </Box>

          <Box>
            <Flex mx="-12px" flexWrap="wrap">
              {dropCardInfo.map((cardinfo) => {
                return (
                  <Box px="12px" w={{ base: '100%', xsm: '50%', lg: '33.33%' }} mb="24px">
                    <DropCard {...cardinfo} />
                  </Box>
                );
              })}
            </Flex>
          </Box>

          <Box w="100%" mt="16px" mb="142px" borderRadius="2px">
            <Image
              src="https://cdn.enochdev.com/marketplace-assets/drop-ads-img.png"
              alt="img"
              h="100%"
              w="100%"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Drop;
