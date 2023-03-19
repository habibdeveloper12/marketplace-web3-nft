import {
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Flex,
  Img,
  Text,
  Checkbox
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import '@fontsource/poppins';
import React from 'react';
import { Dropdown } from './Dropdown';
const Tags = [
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Quantumfleet'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Citadel'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: '2060'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Babylon'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Endurance'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Enoch citizen '
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Harmony'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Hong Kong'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Purple'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Siberia'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'Tokyo'
  },
  {
    tagpic: 'https://cdn.enochdev.com/marketplace/assets/blackimage.svg',
    tagname: 'District 89'
  }
];
const Prices = [
  {
    Price: '$0 - $4.99'
  },
  {
    Price: '$5 - $9.99'
  },
  {
    Price: '$10 - $49.99'
  },
  {
    Price: '$50 - $199.99'
  },
  {
    Price: '$200 & above'
  }
];
const Currencies = [
  {
    icon: 'https://cdn.enochdev.com/marketplace/assets/currency-1.svg',
    curName: 'WBTC'
  },
  {
    icon: 'https://cdn.enochdev.com/marketplace/assets/currency-2.svg',
    curName: 'ETH'
  },
  {
    icon: 'https://cdn.enochdev.com/marketplace/assets/currency-3.svg',
    curName: 'DAI'
  },
  {
    icon: 'https://cdn.enochdev.com/marketplace/assets/currency-4.svg',
    curName: 'LOVE COIN'
  },
  {
    icon: 'https://cdn.enochdev.com/marketplace/assets/currency-5.svg',
    curName: 'USDT'
  },
  {
    icon: 'https://cdn.enochdev.com/marketplace/assets/currency-6.svg',
    curName: 'ENOCH'
  },
  {
    icon: 'https://cdn.enochdev.com/marketplace/assets/currency-7.svg',
    curName: 'USDC'
  }
];

export const CategoryLeft = () => {
  return (
    <Box w={{ base: '100%', md: '100%', lg: '25%' }}>
      <Box p="24px" bg="#0B1926" mb="24px" borderRadius={'4px'}>
        <Text
          as="span"
          color="#FFDF6C"
          fontSize={'14px'}
          fontWeight="500"
          lineHeight={'21px'}
          letterSpacing="0.1em"
          textTransform={'uppercase'}>
          SEARCH
        </Text>
        <InputGroup bg="#14283D" mt="10px" color="white" h="54px" alignItems={'center'}>
          <Input
            placeholder="Search collectibles here"
            color="white"
            border={'none'}
            outline="none"
            focusBorderColor="none"
            borderRadius={'2px'}
            _placeholder={{ color: '#CFCFE7' }}
          />
          <InputRightElement top="8px" children={<SearchIcon color="rgba(29, 180, 244, 1)" />} />
        </InputGroup>
      </Box>
      <Box p="18px" bg="#0B1926 " borderRadius={'4px'}>
        <Accordion allowMultiple border="none">
          <AccordionItem color="white" border="none" borderBottom={'1px solid #4A607C'}>
            <AccordionButton p="0px 0px 10px">
              <Box
                flex="1"
                textAlign="left"
                color="#FFDF6C"
                fontSize={'14px'}
                fontWeight="500"
                lineHeight={'21px'}
                letterSpacing="0.1em"
                textTransform={'uppercase'}>
                STATUS
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel p="0px">
              <Flex flexWrap={'wrap'} pb="14px" mb="10px">
                <Box
                  bg="#14283D"
                  borderRadius={'32px'}
                  color="white"
                  p="8px 11px"
                  mr="8px"
                  mb="10px"
                  fontFamily="Poppins"
                  fontSize={'13px'}
                  fontWeight="600px"
                  lineHeight={'20px'}>
                  BUY NOW
                </Box>
                <Box
                  bg="#14283D"
                  mr="8px"
                  borderRadius={'32px'}
                  color="white"
                  p="8px 18px"
                  mb="10px"
                  fontFamily="Poppins"
                  fontSize={'13px'}
                  fontWeight="600px">
                  LIVE AUCTION
                </Box>
                <Box
                  bg="#14283D"
                  borderRadius={'32px'}
                  color="white"
                  p="8px 18px"
                  mb="10px"
                  fontFamily="Poppins"
                  fontSize={'13px'}
                  fontWeight="600px">
                  FLASH DEAL
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple border="none">
          <AccordionItem color="white" border="none" borderBottom={'1px solid #4A607C'}>
            <AccordionButton p="20px 0px">
              <Box
                flex="1"
                textAlign="left"
                color="#FFDF6C"
                fontSize={'14px'}
                fontWeight="500"
                lineHeight={'21px'}
                letterSpacing="0.1em"
                textTransform={'uppercase'}>
                PRICE
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel p="0px">
              <Flex flexDirection={'column'} pb="20px">
                {Prices.map((lin) => (
                  <Box
                    mb="12px"
                    bg="#14283D"
                    width="100%"
                    borderRadius={'2px'}
                    color="white"
                    p="13px 18px"
                    display={'flex'}
                    alignItems="center">
                    <Checkbox
                      color="white"
                      outline={'none'}
                      borderRadius={'4px'}
                      size="lg"
                      h="24px"
                      w="24px"
                      borderColor={'#5C789A '}
                      bg="transparent"
                      _checked={{
                        border: '2px solid #A5F3FC',
                        bg: '#1673FF',
                        h: '24px',
                        w: '24px'
                      }}>
                      <Text
                        as="span"
                        fontFamily="dinFonts"
                        fontSize={'16px'}
                        fontWeight="700px"
                        display="flex"
                        lineHeight={'28px'}
                        width="max-content">
                        {lin.Price}
                      </Text>
                    </Checkbox>
                  </Box>
                ))}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple border="none">
          <AccordionItem color="white" border="none" borderBottom={'1px solid #4A607C'}>
            <AccordionButton px="0px" py="20px">
              <Box
                flex="1"
                textAlign="left"
                color="#FFDF6C"
                fontSize={'14px'}
                fontWeight="500"
                lineHeight={'21px'}
                letterSpacing="0.1em"
                textTransform={'uppercase'}>
                COLLECTIONS
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel p="0px">
              <InputGroup bg="#14283D" mt="10px" color="white" h="54px" alignItems={'center'}>
                <Input
                  placeholder="Search collections"
                  color="white"
                  border={'none'}
                  outline="none"
                  focusBorderColor="none"
                  borderRadius={'2px'}
                  _placeholder={{ color: '#CFCFE7' }}
                />
                <InputRightElement
                  top="8px"
                  children={<SearchIcon color="rgba(29, 180, 244, 1)" />}
                />
              </InputGroup>

              <Flex mt="16px" pb="24px" flexWrap={'wrap'} w="100%">
                {Tags.map((list) => (
                  <Box
                    mr="8px"
                    w="auto"
                    mb="8px"
                    bg="#192C45"
                    borderRadius={'40px'}
                    p="2px 10px 2px 2px"
                    display={'flex'}
                    alignItems="center">
                    <Img mr="6px" src={list.tagpic}></Img>
                    <Text
                      as="span"
                      color="#99BBE2"
                      fontFamily={'Poppins'}
                      fontSize="13px"
                      fontWeight={'500'}>
                      {list.tagname}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple border="none" position={'relative'}>
          <AccordionItem color="white" border="none" borderBottom={'1px solid #4A607C'}>
            <AccordionButton py="24px" px="0">
              <Box
                flex="1"
                textAlign="left"
                color="#FFDF6C"
                fontSize={'14px'}
                fontWeight="500"
                lineHeight={'21px'}
                letterSpacing="0.1em"
                textTransform={'uppercase'}>
                CATEGORY
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb="20px" px="0px">
              <Dropdown />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultiple border="none">
          <AccordionItem color="white" border="none">
            <AccordionButton p="20px 0px">
              <Box
                flex="1"
                textAlign="left"
                color="#FFDF6C"
                fontSize={'14px'}
                fontWeight="500"
                lineHeight={'21px'}
                letterSpacing="0.1em"
                textTransform={'uppercase'}>
                Supported currencies
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel p="0px">
              <Flex mb="16px" flexWrap={'wrap'}>
                {Currencies.map((tap) => (
                  <Box
                    mr="16px"
                    bg="transparent"
                    borderRadius={'40px'}
                    mb="12px"
                    color="white"
                    display={'flex'}
                    alignItems="center">
                    <Img mr="4px" src={tap.icon}></Img>

                    <Text
                      as="span"
                      fontFamily="Poppins"
                      fontSize={'14px'}
                      fontWeight="600px"
                      lineHeight={'21px'}>
                      {tap.curName}
                    </Text>
                  </Box>
                ))}
              </Flex>
              <Text as="p" color="#526F93" fontSize={'13px'} lineHeight="20px" fontWeight={'400'}>
                You can buy the products with the above currencies
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
