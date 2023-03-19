import {
  Box,
  Button,
  // selected,
  InputGroup,
  Select,
  InputRightElement,
  Input,
  ChakraProvider,
  // isExpanded,
  Container,
  Flex,
  HStack,
  Img,
  Text,
  Menu,
  MenuDivider,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  // rightIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  // CircleIcon,
  ChevronUpIcon,
  CheckIcon,
  SearchIcon,
  AddIcon,
  WarningIcon,
  ArrowRightIcon
} from '@chakra-ui/icons';
import '@fontsource/poppins';
import { useState } from 'react';
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { ProductBidding } from './ProductBidding';
import { FlashDeal } from './FlashDeal';

export const HeroSection = () => {
  return (
    <Box>
      <Breadcrumb mt="10px" spacing="8px" separator={<ArrowRightIcon h="10px" color="#878F98" />}>
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
            color="#878F98"
            textDecoration={'underline'}>
            Categories
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            href="#"
            fontSize="13px"
            fontWeight="400"
            lineHeight={'20px'}
            color="white">
            Product Name
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex pt="40px" flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
        <Box position={'relative'} w={{ base: '100%', md: '100%', lg: '50%' }}>
          <Img position={'absolute'} top="24px" right="24px" src="/ProductDetailed/sixty.svg"></Img>

          <Img
            w="100%"
            h="100%"
            src="https://cdn.enochdev.com/marketplace/assets/whitefootjob.png"></Img>
        </Box>
        <Box w={{ base: '100%', md: '100%', lg: '50%' }} ml={{ base: '0px', lg: '64px' }}>
          <Box backdropBlur={'7px'}>
            <Box mb="20px">
              <Flex justifyContent={'space-between'} alignItems="end">
                <Box>
                  <Text
                    as="h4"
                    fontSize={'16px'}
                    color="#42CE1F"
                    textTransform={'uppercase'}
                    fontWeight="600"
                    lineHeight={'24px'}
                    mb="8px">
                    Lucifer
                  </Text>
                  <Text
                    as="h4"
                    fontSize={'32px'}
                    color="#878F98"
                    textTransform={'uppercase'}
                    fontWeight="700"
                    lineHeight={'40px'}>
                    #003
                  </Text>
                </Box>

                <Box display={'flex'} justifyContent="center" alignItems={'center'} gap="8px">
                  <Box
                    w="32px"
                    h="32px"
                    display={'flex'}
                    justifyContent="center"
                    alignItems={'center'}
                    bg="#0A1622"
                    border="1px solid #414165"
                    borderRadius={'2px'}>
                    <Img src="https://cdn.enochdev.com/marketplace/assets/Sharer.svg"></Img>
                  </Box>
                  <Box
                    w="56px"
                    h="32px"
                    display={'flex'}
                    justifyContent="center"
                    alignItems={'center'}
                    bg="#0A1622"
                    border="1px solid #414165"
                    borderRadius={'2px'}>
                    <Img src="https://cdn.enochdev.com/marketplace/assets/mendo.svg" mr="7px"></Img>
                    <Text as="span" color="white">
                      92
                    </Text>
                  </Box>
                  <Box
                    w="32px"
                    h="32px"
                    display={'flex'}
                    justifyContent="center"
                    alignItems={'center'}
                    bg="#0A1622"
                    border="1px solid #414165"
                    borderRadius={'2px'}>
                    <Img src="https://cdn.enochdev.com/marketplace/assets/dotting.svg"></Img>
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Text
                as="h5"
                fontSize={'32px'}
                color="White"
                textTransform={'uppercase'}
                letterSpacing="0.02em"
                fontWeight="700"
                lineHeight={'48px'}
                mb="16px">
                Lucifer's sneakers
              </Text>
              <Text
                mb="16px"
                as="p"
                fontSize={'15px'}
                color="#C1C1DC"
                fontWeight="400"
                lineHeight={'29px'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </Text>
              <Flex pb="26px">
                <Box w="50%">
                  <Box>
                    <Text
                      as="h5"
                      fontSize={'14px'}
                      color="#FFDF6C"
                      textTransform={'uppercase'}
                      letterSpacing="0.1em"
                      fontWeight="600"
                      lineHeight={'21px'}>
                      CREATOR
                    </Text>
                    <Box display={'flex'} alignItems="center" mt="8px">
                      <Img
                        mr="8px"
                        src="https://cdn.enochdev.com/marketplace/assets/enochstudiotag.svg"></Img>
                      <Text
                        as="h5"
                        fontSize={'16px'}
                        color="White"
                        fontWeight="500"
                        lineHeight={'24px'}>
                        @Enoch Studio
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box w="50%">
                  <Box>
                    <Text
                      as="h5"
                      fontSize={'14px'}
                      color="#FFDF6C"
                      textTransform={'uppercase'}
                      letterSpacing="0.1em"
                      fontWeight="600"
                      lineHeight={'21px'}>
                      seller
                    </Text>
                    <Box display={'flex'} alignItems="center" mt="8px">
                      <Img
                        mr="8px"
                        src="https://cdn.enochdev.com/marketplace/assets/janbazname.svg"></Img>
                      <Text
                        as="h5"
                        fontSize={'16px'}
                        color="White"
                        fontWeight="500"
                        lineHeight={'24px'}>
                        @Namehere
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Flex>
              <Box mt="16px">
                <Text
                  as="h5"
                  fontSize={'14px'}
                  color="#FFDF6C"
                  textTransform={'uppercase'}
                  fontWeight="600"
                  lineHeight={'21px'}>
                  AVAILABLE COLORS
                </Text>
                <Flex mt="16px">
                  <Box
                    mr="16px"
                    bg="#FB3232"
                    cursor={'pointer'}
                    w="32px"
                    h={'32px'}
                    border="2px solid #FFFFFF"></Box>
                  <Box
                    bg="#2DA7FF"
                    mr="16px"
                    cursor={'pointer'}
                    _hover={{ border: '2px solid #FFFFFF' }}
                    w="32px"
                    h={'32px'}></Box>
                  <Box
                    bg="#FFB119"
                    mr="16px"
                    cursor={'pointer'}
                    _hover={{ border: '2px solid #FFFFFF' }}
                    w="32px"
                    h={'32px'}></Box>
                  <Box
                    bg="#B822FF"
                    cursor={'pointer'}
                    _hover={{ border: '2px solid #FFFFFF' }}
                    w="32px"
                    h={'32px'}></Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box
            borderRadius={'8px'}
            mt="40px"
            bg="linear-gradient(96.84deg, rgba(35, 26, 133, 0.7) 12.34%, rgba(100, 33, 131, 0.7) 107.1%)"
            p="55px 48px">
            <Text
              as="h5"
              fontSize={'18px'}
              color="#FFDF6C"
              textTransform={'uppercase'}
              fontWeight="600"
              lineHeight={'25px'}
              letterSpacing="0.1em"
              mb="17px">
              Fixed Price
            </Text>
            <Text
              fontSize={'48px'}
              color="#FFFFFF"
              textTransform={'uppercase'}
              fontWeight="700"
              lineHeight={'48px'}>
              $250.00
            </Text>
          </Box>
          <Flex mt="32px">
            <Button
              fontSize={'18px'}
              borderRadius="1px"
              color="#4E6E94"
              h="51px"
              p="12px"
              bg="transparent"
              colorScheme={'transparent'}
              border="1px solid #4E6E94"
              w="100%"
              mr="24px">
              ADD TO CART
            </Button>
            <Button
              fontSize={'18px'}
              borderRadius="1px"
              color="#4E6E94"
              h="51px"
              p="12px"
              bg="#213D60"
              colorScheme={'#213D60'}
              w="100%">
              BUY NOW
            </Button>
          </Flex>
          {/* <ProductBidding /> */}
          {/* <FlashDeal/> */}
        </Box>
      </Flex>
    </Box>
  );
};
