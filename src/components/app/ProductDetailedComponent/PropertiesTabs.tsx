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
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td
} from '@chakra-ui/react';

import '@fontsource/poppins';
import { useState } from 'react';
import React from 'react';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
const Properties = [
  {
    Image: 'https://cdn.enochdev.com/marketplace/assets/properties-1.svg',
    Title: 'tier 1',
    Desc: 'Common'
  },
  {
    Image: 'https://cdn.enochdev.com/marketplace/assets/properties-2.svg',
    Title: 'Gender',
    Desc: 'Male'
  },
  {
    Image: 'https://cdn.enochdev.com/marketplace/assets/properties-3.svg',
    Title: 'Theme',
    Desc: 'Futuristic sneakers'
  },
  {
    Image: 'https://cdn.enochdev.com/marketplace/assets/properties-4.svg',
    Title: 'number of copies ',
    Desc: '80'
  },
  {
    Image: 'https://cdn.enochdev.com/marketplace/assets/properties-4.svg',
    Title: 'number of copies ',
    Desc: '80'
  }
];
export const PropertiesTabs = () => {
  return (
    <Box mt="41px" borderRadius={'2px'} bg="#0B1926">
      <Tabs variant="unstyled">
        <Box overflowX={{ base: 'scroll', md: 'hidden' }}>
          <TabList mx="48px" borderBottom={'1px solid #283E53'} w={{ base: '641px', md: '92%' }}>
            <Tab
              p="25px 25px 25px 0px"
              fontSize={{ base: '10px', sm: '20px', md: '20px' }}
              fontWeight="600"
              lineHeight={'30px'}
              letterSpacing="0.1em"
              textTransform="uppercase"
              color="#445D78"
              _selected={{ color: '#1DB4F4' }}>
              Properties
            </Tab>
            <Tab
              p={{ base: '12px', md: '25px' }}
              fontSize={{ base: '10px', sm: '20px', md: '20px' }}
              fontWeight="600"
              lineHeight={'30px'}
              letterSpacing="0.1em"
              textTransform="uppercase"
              color="#445D78"
              _selected={{ color: '#1DB4F4' }}>
              Offers
            </Tab>
            <Tab
              fontSize={{ base: '10px', sm: '20px', md: '20px' }}
              fontWeight="600"
              lineHeight={'30px'}
              letterSpacing="0.1em"
              textTransform="uppercase"
              p={{ base: '12px', md: '25px' }}
              color="#445D78"
              _selected={{ color: '#1DB4F4' }}>
              Activity
            </Tab>
            <Tab
              fontSize={{ base: '10px', sm: '20px', md: '20px' }}
              fontWeight="600"
              lineHeight={'30px'}
              letterSpacing="0.1em"
              textTransform="uppercase"
              p={{ base: '12px', md: '25px' }}
              color="#445D78"
              _selected={{ color: '#1DB4F4' }}>
              Contract Details
            </Tab>
          </TabList>
        </Box>

        <TabPanels p="0px">
          <TabPanel p="30px 40px 40px 32px" minH={'350px'}>
            <Flex flexWrap={'wrap'}>
              {Properties.map((list) => (
                <Box
                  mb="24px"
                  w="294px"
                  mr="24px"
                  bg="#0B1926"
                  border="1px solid #14283D"
                  p="16px"
                  borderRadius={'4px'}>
                  <Flex alignItems={'center'}>
                    <Box
                      display={'flex'}
                      justifyContent="center"
                      h="84px"
                      w="84px"
                      alignItems={'center'}
                      bg="#14283D"
                      borderRadius={'54px'}>
                      <Img src={list.Image}></Img>
                    </Box>
                    <Box ml="16px">
                      <Text
                        mb="7px"
                        fontSize={'13px'}
                        fontWeight="500"
                        lineHeight={'20px'}
                        color="#38C3FF"
                        textTransform="uppercase">
                        {list.Title}{' '}
                      </Text>
                      <Text
                        fontSize="14px"
                        fontWeight="700"
                        lineHeight={'22px'}
                        color="white"
                        textTransform="uppercase">
                        {list.Desc}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </TabPanel>
          <TabPanel p="28px 32px">
            <Box>
              <TableContainer>
                <Table size="sm" border="1px solid #283E53">
                  <Thead bg="rgba(68, 171, 216, 0.1)" borderBottom={'1px solid transparent'}>
                    <Tr>
                      <Th borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                        User’s Profile
                      </Th>
                      <Th borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                        Price
                      </Th>
                      <Th borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                        Offer expires in
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="12px">
                          <Img src="/ProductDetailed/headdip.svg"></Img>
                          <Text as="span" color="white">
                            @keanu reeves
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="10px">
                          <Img src="/ProductDetailed/Dinopange.svg"></Img>
                          <Text as="span" color="white">
                            442
                          </Text>
                          <Text as="span" color="#7B82A8">
                            ~$441.88
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box>
                          <Text as="span" color="white">
                            2 Days, 3 Hours & 32 Mins
                          </Text>
                        </Box>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="12px">
                          <Img src="/ProductDetailed/headdip.svg"></Img>
                          <Text as="span" color="white">
                            @keanu reeves
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="10px">
                          <Img src="/ProductDetailed/Dinopange.svg"></Img>
                          <Text as="span" color="white">
                            442
                          </Text>
                          <Text as="span" color="#7B82A8">
                            ~$441.88
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box>
                          <Text as="span" color="white">
                            2 Days, 3 Hours & 32 Mins
                          </Text>
                        </Box>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td p="16px 39px" borderBottom={'none'} borderColor="none">
                        <Box display={'flex'} alignItems="center" gap="12px">
                          <Img src="/ProductDetailed/headdip.svg"></Img>
                          <Text as="span" color="white">
                            @keanu reeves
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'none'} borderColor="none">
                        <Box display={'flex'} alignItems="center" gap="10px">
                          <Img src="/ProductDetailed/Dinopange.svg"></Img>
                          <Text as="span" color="white">
                            442
                          </Text>
                          <Text as="span" color="#7B82A8">
                            ~$441.88
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'none'} borderColor="none">
                        <Box>
                          <Text as="span" color="white">
                            2 Days, 3 Hours & 32 Mins
                          </Text>
                        </Box>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </TabPanel>
          <TabPanel p="28px 32px">
            <Box>
              <TableContainer>
                <Table size="md" border=" 1px solid #283E53">
                  <Thead bg="rgba(68, 171, 216, 0.1)" borderBottom={'1px solid transparent'}>
                    <Tr>
                      <Th borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                        action
                      </Th>
                      <Th borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                        Date
                      </Th>
                      <Th borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                        From
                      </Th>
                      <Th borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                        Price
                      </Th>
                      <Th borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                        TO
                      </Th>
                      <Th borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                        price
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Text as="span" color="white">
                          Sale
                        </Text>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Text as="span" color="white">
                          20/10/2022
                        </Text>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="12px">
                          <Img src="/ProductDetailed/headdip.svg"></Img>
                          <Text as="span" color="white">
                            @MissMonroe
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="10px">
                          <Img src="/ProductDetailed/Dinopange.svg"></Img>
                          <Text as="span" color="white">
                            442
                          </Text>
                          <Text as="span" color="#7B82A8">
                            ~$441.88
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="12px">
                          <Img src="/ProductDetailed/headdip.svg"></Img>
                          <Text as="span" color="white">
                            @Hulk
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Text as="span" color="white">
                          $10.50
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Text as="span" color="white">
                          Sale
                        </Text>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Text as="span" color="white">
                          20/10/2022
                        </Text>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="12px">
                          <Img src="/ProductDetailed/headdip.svg"></Img>
                          <Text as="span" color="white">
                            @MissMonroe
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="10px">
                          <Img src="/ProductDetailed/Dinopange.svg"></Img>
                          <Text as="span" color="white">
                            442
                          </Text>
                          <Text as="span" color="#7B82A8">
                            ~$441.88
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Box display={'flex'} alignItems="center" gap="12px">
                          <Img src="/ProductDetailed/headdip.svg"></Img>
                          <Text as="span" color="white">
                            @Hulk
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'1px solid #1F4260'} borderColor="#1F4260">
                        <Text as="span" color="white">
                          $10.50
                        </Text>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td p="16px 39px" borderBottom={'none'} borderColor="none">
                        <Text as="span" color="white">
                          Sale
                        </Text>
                      </Td>
                      <Td p="16px 39px" borderBottom={'none'} borderColor="none">
                        <Text as="span" color="white">
                          20/10/2022
                        </Text>
                      </Td>
                      <Td p="16px 39px" borderBottom={'none'} borderColor="none">
                        <Box display={'flex'} alignItems="center" gap="12px">
                          <Img src="/ProductDetailed/headdip.svg"></Img>
                          <Text as="span" color="white">
                            @MissMonroe
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'none'} borderColor="none">
                        <Box display={'flex'} alignItems="center" gap="10px">
                          <Img src="/ProductDetailed/Dinopange.svg"></Img>
                          <Text as="span" color="white">
                            442
                          </Text>
                          <Text as="span" color="#7B82A8">
                            ~$441.88
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'none'} borderColor="none">
                        <Box display={'flex'} alignItems="center" gap="12px">
                          <Img src="/ProductDetailed/headdip.svg"></Img>
                          <Text as="span" color="white">
                            @Hulk
                          </Text>
                        </Box>
                      </Td>
                      <Td p="16px 39px" borderBottom={'none'} borderColor="none">
                        <Text as="span" color="white">
                          $10.50
                        </Text>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </TabPanel>
          <TabPanel p="28px 32px">
            <Box p="28px 32px 23px 40px">
              <Flex flexDirection={{ base: 'column', md: 'row' }}>
                <Box w={{ base: '100%', md: '50%' }}>
                  <Box>
                    <Box mb="16px">
                      <Text as="h2" mb="10px" color={'#9FFFF3'}>
                        TOKEN ADDRESS
                      </Text>
                      <Text as="p" color="white">
                        0X59B03AEDFD674DFGCRTRDSCS23WSX
                      </Text>
                    </Box>
                    <Box mb="16px">
                      <Text as="h2" mb="10px" color={'#9FFFF3'}>
                        TOKEN ID
                      </Text>
                      <Text as="p" color="white">
                        #3423
                      </Text>
                    </Box>
                    <Box mb="16px">
                      <Text as="h2" mb="10px" color={'#9FFFF3'}>
                        TOKEN SATANDARD
                      </Text>
                      <Text as="p" color="white">
                        ERC 721
                      </Text>
                    </Box>
                    <Box mb="16px">
                      <Text as="h2" mb="10px" color={'#9FFFF3'}>
                        BASE URI
                      </Text>
                      <Text as="p" color="white">
                        https://enoch.app/hfjfbhdl...
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box w={{ base: '100%', md: '50%' }}>
                  <Box
                    display={'flex'}
                    alignItems="center"
                    justifyContent={'flex-end'}
                    flexDirection={{ base: 'column', md: 'row' }}
                    gap="12px">
                    <Button
                      bg="transparent"
                      color="white"
                      border="1px solid white"
                      py="12px"
                      px="11px"
                      fontFamily={'Poppins'}
                      borderRadius={'2px'}
                      _hover={{ bg: 'transparent' }}
                      _focus={{ boxShadow: 'none', bg: 'transparent' }}>
                      View on polygonscan
                    </Button>
                    <Button
                      bg="#1386F0"
                      colorScheme={'#1386F0'}
                      color="white"
                      py="12px"
                      px="26px"
                      fontFamily={'Poppins'}
                      borderRadius={'2px'}>
                      VIE ON IPFS
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
