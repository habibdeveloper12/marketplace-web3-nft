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
import BidNowModal from './BidNowModal';

export const ProductBidding = () => {
  return (
    <Box
      mt="24px"
      bg="#112135"
      p="39px 32px 33px 32px"
      backdropBlur={'7px'}
      border="1px solid #667AE4">
      <Flex justifyContent={'space-between'} flexWrap="wrap" gap="10px" mb="34px">
        <Box>
          <Box>
            <Text
              as="h5"
              fontSize={'19px'}
              color="#42CE1F"
              fontFamily="dinFonts"
              fontWeight="600"
              lineHeight={'25px'}>
              Highest Bid By
            </Text>
            <Box display={'flex'} alignItems="center" mt="8px">
              <Img src="/ProductDetailed/CreWorsh.svg" mr="8px"></Img>
              <Text as="h5" fontSize={'16px'} color="White" fontWeight="500" lineHeight={'24px'}>
                @Papajoe
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text
              as="h5"
              fontSize={'19px'}
              color="#42CE1F"
              fontFamily="dinFonts"
              fontWeight="600"
              lineHeight={'25px'}>
              Bid Placed
            </Text>
            <Box display={'flex'} alignItems="center" mt="8px">
              <Text
                as="h5"
                fontSize={'20px'}
                color="White"
                fontFamily="dinFonts"
                textTransform={'uppercase'}
                fontWeight="600"
                lineHeight={'25px'}>
                23 DAI
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text
              as="h5"
              fontSize={'19px'}
              color="#42CE1F"
              fontFamily="dinFonts"
              fontWeight="600"
              lineHeight={'25px'}>
              Auction Ends In
            </Text>
            <Box display={'flex'} gap="16px">
              <Box display={'flex'} alignItems="center" mt="8px">
                <Text
                  as="h5"
                  fontSize={'24px'}
                  color="White"
                  fontFamily="dinFonts"
                  textTransform={'uppercase'}
                  fontWeight="600"
                  mr="16px"
                  lineHeight={'48px'}>
                  02
                </Text>

                <Text
                  as="p"
                  fontSize={'20px'}
                  color="White"
                  fontFamily="dinFonts"
                  textTransform={'uppercase'}
                  fontWeight="600"
                  lineHeight={'25px'}>
                  :{' '}
                </Text>
              </Box>
              <Box display={'flex'} alignItems="center" mt="8px">
                <Text
                  as="h5"
                  fontSize={'24px'}
                  color="White"
                  fontFamily="dinFonts"
                  textTransform={'uppercase'}
                  fontWeight="600"
                  mr="16px"
                  lineHeight={'48px'}>
                  14
                </Text>

                <Text
                  as="p"
                  fontSize={'20px'}
                  color="White"
                  fontFamily="dinFonts"
                  textTransform={'uppercase'}
                  fontWeight="600"
                  lineHeight={'25px'}>
                  :{' '}
                </Text>
              </Box>
              <Box display={'flex'} alignItems="center" mt="8px">
                <Text
                  as="h5"
                  fontSize={'24px'}
                  color="White"
                  fontFamily="dinFonts"
                  textTransform={'uppercase'}
                  fontWeight="600"
                  mr="16px"
                  lineHeight={'48px'}>
                  34
                </Text>

                <Text
                  as="p"
                  fontSize={'20px'}
                  color="White"
                  fontFamily="dinFonts"
                  textTransform={'uppercase'}
                  fontWeight="600"
                  lineHeight={'25px'}>
                  :{' '}
                </Text>
              </Box>
              <Box display={'flex'} alignItems="center" mt="8px">
                <Text
                  as="h5"
                  fontSize={'24px'}
                  color="White"
                  fontFamily="dinFonts"
                  textTransform={'uppercase'}
                  fontWeight="600"
                  lineHeight={'48px'}>
                  08
                </Text>
              </Box>
            </Box>
            <Flex gap="17px">
              <Text
                as="p"
                fontSize={'13px'}
                color="#7B82A8"
                fontFamily="dinFonts"
                textTransform={'uppercase'}
                fontWeight="600"
                lineHeight={'13px'}>
                Days
              </Text>
              <Text
                as="p"
                fontSize={'13px'}
                color="#7B82A8"
                fontFamily="dinFonts"
                textTransform={'uppercase'}
                fontWeight="600"
                lineHeight={'13px'}>
                Hours
              </Text>
              <Text
                as="p"
                fontSize={'13px'}
                color="#7B82A8"
                fontFamily="dinFonts"
                textTransform={'uppercase'}
                fontWeight="600"
                lineHeight={'13px'}>
                Minutes
              </Text>
              <Text
                as="p"
                fontSize={'13px'}
                color="#7B82A8"
                fontFamily="dinFonts"
                textTransform={'uppercase'}
                fontWeight="600"
                lineHeight={'13px'}>
                Seconds
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <BidNowModal />
    </Box>
  );
};
