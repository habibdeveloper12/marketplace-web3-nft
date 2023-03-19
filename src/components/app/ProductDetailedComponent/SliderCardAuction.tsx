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
  Image
  // rightIcon,
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
  WarningIcon
} from '@chakra-ui/icons';
import '@fontsource/poppins';
import { useState } from 'react';
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const SliderCardAuction = (props: { image: string; likeCount: number; Heart: string }) => {
  return (
    <Box p="24px" w="100%" mb="24px" bg="#112135" borderRadius={'12px'}>
      <Box display={'flex'} justifyContent="space-between" pb="18px">
        <Button
          py="3px"
          bg="rgba(23, 23, 43, 0.7)"
          fontSize={'13px'}
          px="13px"
          border="1px solid #8787A5"
          borderRadius={'42px'}
          _hover={{ bg: 'rgba(23, 23, 43, 0.7)' }}
          _focus={{ boxShadow: 'none', bg: 'rgba(23, 23, 43, 0.7)' }}
          color="#8787A5">
          Hot Deal
        </Button>

        <Button
          py="3px"
          fontSize={'13px'}
          p="3px 13px"
          fontFamily={'Poppins'}
          fontWeight="700"
          border="1px solid #F18B14"
          borderRadius={'42px'}
          bg="rgba(23, 23, 43, 0.7)"
          letterSpacing={'0.02em'}
          _hover={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none', bg: 'transparent' }}
          color="white">
          AUCTION
        </Button>
      </Box>
      <Box mb="16px">
        <Img src={props.image} borderRadius={'4px'} w="100%"></Img>
      </Box>
      <HStack justifyContent={'space-between'}>
        <Text
          as="p"
          color="white"
          fontSize={'18px'}
          fontWeight="400"
          lineHeight={'23px'}
          fontFamily="dinFonts">
          #B8/457843
        </Text>
        <Box gap="10px" display={'flex'}>
          <Img src={props.Heart}></Img>
          <Text as="span" color="white" fontSize={'16px'}>
            92
          </Text>
        </Box>
      </HStack>
      <Box mb="16px">
        <Text as="span" color="#6398DB" fontSize={'14px'}>
          Enoch Citizen
        </Text>
      </Box>
      <Flex mb="16px" justifyContent={'space-between'}>
        <Box
          p="12px 12px 6px 12px"
          border="1px solid #6B1AEF60"
          backdropBlur={'7px'}
          mr="8px"
          width="44%"
          bg="rgba(23, 23, 43, 0.7)">
          <Text
            as="span"
            color="#42CE1F"
            fontSize={{ base: '14px', sm: '14px', md: '14px', lg: '11px', xl: '11px' }}
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
            $260
          </Text>
        </Box>
        <Box
          p="12px 7px 6px 12px"
          border="1px solid #E6441160 "
          backdropBlur={'7px'}
          bg="rgba(23, 23, 43, 0.3)">
          <Text
            as="span"
            color="#99BBE2"
            fontSize={{ base: '13px', md: '13px', lg: '11px', xl: '11px', xxl: '13px' }}
            fontFamily={'Poppins'}
            lineHeight="21px"
            letterSpacing={'0.02em'}>
            AUCTION ENDS IN
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={{ base: '16px', md: '13px', lg: '14px', xl: '14px', xxl: '13px' }}
            fontFamily="dinFonts"
            lineHeight="26px"
            fontWeight={'600'}
            fontStyle="normal">
            03 : 18 : 24 : 42s
          </Text>
        </Box>
      </Flex>
      <Button
        bg="#1386F0"
        colorScheme={'#1386F0'}
        borderRadius={'2px'}
        w="100%"
        color="white"
        fontFamily={'Poppins'}
        letterSpacing="0.02em"
        lineHeight={'22px'}>
        BID NOW
      </Button>
    </Box>
  );
};
