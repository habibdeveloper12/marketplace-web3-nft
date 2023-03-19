import {
  Box,
  Button,
  InputGroup,
  Select,
  InputRightElement,
  Input,
  ChakraProvider,
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
  Image
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
  ChevronUpIcon,
  CheckIcon,
  SearchIcon,
  AddIcon,
  WarningIcon
} from '@chakra-ui/icons';
import '@fontsource/poppins';
import { useState } from 'react';
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const AuctionCard = ({
  image,
  cardWidth,
  HeartCount,
  Citizen,
  CardTitle,
  CardDesc,
  BidPrice,
  MarginBox
}:any) => {
  return (
    <Box p="24px" w={cardWidth} mb="24px" bg="#0B1926" borderRadius={'2px'}>
      <Box display={'flex'} justifyContent="space-between" pb="16px">
        <Button
          py="3px"
          fontSize={'13px'}
          h="26px"
          px="13px"
          alignItems={'center'}
          fontWeight={'600'}
          lineHeight="20px"
          borderRadius={'42px'}
          colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #E611B7, #7514F1) border-box"
          color="white"
          textTransform={'uppercase'}
          css={{
            background:
              'linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #F18B14, #E64411) border-box',
            border: '1px solid transparent',
            borderRadius: '50px',
            display: ''
          }}>
          <Img mr="6px" src="https://cdn.enochdev.com/marketplace/assets/aggicon.svg"></Img>
          Hot Deal
        </Button>

        <Button
          py="3px"
          fontSize={'13px'}
          h="26px"
          px="13px"
          alignItems={'center'}
          fontWeight={'600'}
          lineHeight="20px"
          borderRadius={'42px'}
          colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #E611B7, #7514F1) border-box"
          color="white"
          textTransform={'uppercase'}
          css={{
            background:
              'linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #E611B7, #7514F1) border-box',
            border: '1px solid transparent',
            borderRadius: '50px',
            display: ''
          }}>
          AUCTION
        </Button>
      </Box>
      <Box mb="16px" position={'relative'}>
        <Img src={image} borderRadius={'2px'} w="100%"></Img>
        <Box position={'absolute'} right="16px" bottom={'16px'}>
          <Img src="https://cdn.enochdev.com/marketplace-assets/3d.svg"></Img>
        </Box>
      </Box>
      <HStack justifyContent={'space-between'}>
        <Box display={'flex'}>
          <Text
            as="span"
            color="#A1A1A1"
            fontSize="18px"
            fontWeight="700"
            lineHeight={'25px'}
            mr="3px">
            {HeartCount}
          </Text>
          <Img src="https://cdn.enochdev.com/marketplace-assets/assets/images/dill.svg"></Img>
        </Box>
        <Text as="span" color="#63C5DB" fontSize="14px" fontWeight="500" lineHeight={'21px'}>
          {Citizen}
        </Text>
      </HStack>
      <Box mb="8px">
        <Text
          letterSpacing={'0.04em'}
          as="p"
          color="white"
          fontSize={'18px'}
          fontWeight="600"
          lineHeight={'27px'}
          textTransform="uppercase">
          {CardTitle}
        </Text>
      </Box>
      <Box mb="10px">
        <Text minH="69px" color="#A7B3BF" fontSize={'15px'} fontWeight="400" lineHeight={'22px'}>
          {CardDesc}
        </Text>
      </Box>
      <Flex>
        <Box
          css={{
            background:
              'linear-gradient(#0B1926, #0B1926) padding-box, linear-gradient(0deg, rgba(102, 122, 228, 0.3),rgba(107, 26, 239, 0.3)) border-box',
            border: '1px solid transparent',
            borderRadius: '2px',

            display: ''
          }}
          mr="16px"
          p="12px 12px 6px 12px"
          border="1px solid #6B1AEF60"
          backdropBlur={'7px'}
          width="73%"
          borderRadius={'2px'}>
          <Text
            as="span"
            color="#42CE1F"
            fontSize={{
              base: '14px',
              sm: '14px',
              md: '14px',
              lg: '11px',
              xl: '11px',
              xxl: '13px'
            }}
            fontWeight="600"
            lineHeight={'21px'}
            letterSpacing="0.02em"
            fontFamily="DIN 2014">
            HIGHEST BID
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={'18px'}
            lineHeight={'21px'}
            fontWeight="600"
            letterSpacing="0.02em">
            {BidPrice}
          </Text>
        </Box>
        <Box
          p="12px 2px 6px 8px"
          w="100%"
          borderRadius={'2px'}
          border="1px solid #E6441160 "
          backdropBlur={'7px'}
          css={{
            background:
              'linear-gradient(#0B1926, #0B1926) padding-box, linear-gradient(0deg, rgba(241, 139, 20, 0.3),rgba(230, 68, 17, 0.3)) border-box',
            border: '1px solid transparent',
            borderRadius: '2px',

            display: ''
          }}>
          <Text
            as="span"
            color="#99BBE2"
            fontSize={{
              base: '13px',
              md: '13px',
              lg: '11px',
              xl: '10px',
              xxl: '12px'
            }}
            fontWeight="600"
            lineHeight="21px"
            letterSpacing={'0.02em'}>
            FLASH DEAL ENDS IN
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={{
              base: '16px',
              md: '13px',
              lg: '14px',
              xl: '12px',
              xxl: '14px'
            }}
            fontFamily="dinFonts"
            lineHeight="26px"
            fontWeight={'600'}
            fontStyle="normal">
            03 : 18 : 24 : 42s
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
