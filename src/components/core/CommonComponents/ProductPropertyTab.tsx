import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Img,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import '@fontsource/poppins';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
  propertyData,
  columnOfferData,
  rowOfferData,
  columnActivityData,
  rowActivityData,
  contractDetailData
} from '../../../constants/productDetailed';
import { getFileUrl } from "../../../utils/getFileUrl";

export const ProductPropertyTab = ({ tabsData, avatarpackTabData = null }:any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAvatarImage, setSelectedAvatarImage] = useState({imgSrc:"",title:""});

  return (
    <Box mt="41px" border=" 1px solid #667AE4" bg="colorPrimaryDark" backdropBlur={'27px'}>
      <Tabs variant="unstyled">
        <TabList
          bg="rgba(22, 185, 255, 0.1)"
          backdropBlur={'27px'}
          p={{ base: '20px 15px', md: '21px 32px' }}
          gap={{ base: '16px', md: '40px', lg: '71px' }}
          justifyContent={{base:"space-between",md:"flex-start"}}>
          {tabsData.map(({ id, tab }:any) => {
            return (
              <Tab
                key={id}
                fontSize={{ base: '10px', sm: '15px', md: '20px' }}
                fontWeight="600"
                lineHeight={'30px'}
                textTransform="uppercase"
                p="0px"
                color="#99BBE2"
                _selected={{ color: 'blue-50' }}>
                {tab}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels p="0px">
          {avatarpackTabData != null && (
            <TabPanel p="32px 32px 8px 32px">
              <Flex flexWrap={'wrap'} gap="10px" justifyContent={'space-between'}>
                {avatarpackTabData.map((pack:any) => {
                  return (
                      <Box
                        key={pack.id}
                        bg="#E6EDF4"
                        p="16px"
                        mb="24px"
                        w={{ base: '100%', md: '48%', lg: '32%', xl: '18.5%' }}>
                        <Box h="159px">
                          <Box>
                            <Image src={getFileUrl(pack.packImg)} m="auto" alt="img"></Image>
                          </Box>
                        </Box>
                        <Flex gap="12px" onClick={() =>  { onOpen(), setSelectedAvatarImage({imgSrc:pack.packImg,title:pack.title})}}>
                          <Text
                            as="p"
                            fontSize={'15px'}
                            fontWeight="600"
                            lineHeight={'25px'}
                            color="#4A607C"
                            _hover={{ cursor: 'pointer' }}
                            textTransform="uppercase">
                            SEE DETAILS
                          </Text>
                          <Image src={getFileUrl("marketplace-assets/assets/images/arrowing.svg")} alt="img"></Image>
                        </Flex>
                      </Box>
                  );
                })}
              </Flex>
            </TabPanel>
          )}
          <TabPanel p="30px 40px 40px 32px">
            <Flex flexWrap={'wrap'} mx={{ base: 'auto', md: '-12px' }}>
              {propertyData.map((item: { id: string; src: string; text: string; prop: string }) => {
                return (
                  <Box
                    key={item.id}
                    bg="#0A1F37"
                    border="1px solid #274160"
                    p="16px"
                    w={{ base: '100%', md: '48%', lg: '29%', xl: '21.8%' }}
                    mx={{ base: 'auto', md: '12px' }}
                    mb="24px"
                    borderRadius={'4px'}>
                    <Flex>
                      <Img alt="img" src={getFileUrl(item.src)} mr="16px"></Img>
                      <Box>
                        <Text
                          as="p"
                          mb="7px"
                          fontSize={'13px'}
                          fontWeight="500"
                          lineHeight={'20px'}
                          color="#38C3FF"
                          textTransform="uppercase">
                          {item.text}
                        </Text>
                        <Text
                          as="p"
                          fontSize={{ base: '20px', md: '24px',xl: '24px',xxxl:'28px' }}
                          fontWeight="400"
                          lineHeight={'28px'}
                          color="orange-50"
                          fontFamily="dinFonts">
                          {item.prop}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
            </Flex>
          </TabPanel>
          <TabPanel p="28px 32px">
            <Box>
              <TableContainer>
                <Table size="sm" border="1px solid #667AE4">
                  <Thead bg="rgba(68, 171, 216, 0.1)" borderBottom={'1px solid transparent'}>
                    <Tr>
                      {columnOfferData.map((column,idx) => {
                        return (
                          <Th key={idx} borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                            {column}
                          </Th>
                        );
                      })}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {rowOfferData.map((row,idx) => {
                      return (
                        <Tr key={idx}>
                          <Td
                            p="16px 39px"
                            borderBottom={'1px solid #1F4260'}
                            borderColor="#1F4260">
                            <Box display={'flex'} alignItems="center" gap="12px">
                              <Img alt="img" src={getFileUrl(row.profileImg)}></Img>
                              <Text as="span" color="white">
                                {row.profileName}
                              </Text>
                            </Box>
                          </Td>
                          <Td
                            p="16px 39px"
                            borderBottom={'1px solid #1F4260'}
                            borderColor="#1F4260">
                            <Box display={'flex'} alignItems="center" gap="10px">
                              <Img alt="img" src={getFileUrl(row.img)}></Img>
                              <Text as="span" color="white">
                                {row.price1}
                              </Text>
                              <Text as="span" color="#7B82A8">
                                {row.price2}
                              </Text>
                            </Box>
                          </Td>
                          <Td
                            p="16px 39px"
                            borderBottom={'1px solid #1F4260'}
                            borderColor="#1F4260">
                            <Box>
                              <Text as="span" color="white">
                                {row.offerEndsIn}
                              </Text>
                            </Box>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </TabPanel>
          <TabPanel p="28px 32px">
            <Box>
              <TableContainer>
                <Table size="md" border="1px solid #667AE4">
                  <Thead bg="rgba(68, 171, 216, 0.1)" borderBottom={'1px solid transparent'}>
                    <Tr>
                      {columnActivityData.map((column,idx) => {
                        return (
                          <Th key={idx} borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                            {column}
                          </Th>
                        );
                      })}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {rowActivityData.map((row,idx) => {
                      return (
                        <Tr key={idx}>
                          <Td
                            p="16px 39px"
                            borderBottom={'1px solid #1F4260'}
                            borderColor="#1F4260">
                            <Text as="span" color="white">
                              {row.action}
                            </Text>
                          </Td>
                          <Td
                            p="16px 39px"
                            borderBottom={'1px solid #1F4260'}
                            borderColor="#1F4260">
                            <Text as="span" color="white">
                              {row.date}
                            </Text>
                          </Td>
                          <Td
                            p="16px 39px"
                            borderBottom={'1px solid #1F4260'}
                            borderColor="#1F4260">
                            <Box display={'flex'} alignItems="center" gap="12px">
                              <Img alt="img" src={getFileUrl(row.from.img)}></Img>
                              <Text as="span" color="white">
                                {row.from.profileName}
                              </Text>
                            </Box>
                          </Td>
                          <Td
                            p="16px 39px"
                            borderBottom={'1px solid #1F4260'}
                            borderColor="#1F4260">
                            <Box display={'flex'} alignItems="center" gap="10px">
                              <Img alt="img" src={getFileUrl(row.price1.priceImg)}></Img>
                              <Text as="span" color="white">
                                {row.price1.price1}
                              </Text>
                              <Text as="span" color="#7B82A8">
                                {row.price1.price2}
                              </Text>
                            </Box>
                          </Td>
                          <Td
                            p="16px 39px"
                            borderBottom={'1px solid #1F4260'}
                            borderColor="#1F4260">
                            <Box display={'flex'} alignItems="center" gap="12px">
                              <Img alt="img" src={getFileUrl(row.to.img)}></Img>
                              <Text as="span" color="white">
                                {row.to.profileName}
                              </Text>
                            </Box>
                          </Td>
                          <Td
                            p="16px 39px"
                            borderBottom={'1px solid #1F4260'}
                            borderColor="#1F4260">
                            <Text as="span" color="white">
                              {row.price2}
                            </Text>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </TabPanel>
          <TabPanel p="28px 32px">
            <Box border="1px solid #667AE4" p="28px 32px 23px 40px">
              <Flex flexDirection={{ base: 'column', md: 'row' }}>
                <Box w={{ base: '100%', md: '50%' }}>
                  <Box>
                    {contractDetailData.map((contract,idx) => {
                      return (
                        <Box mb="16px" key={idx}>
                          <Text as="h2" mb="10px" color={'#9FFFF3'}>
                            {contract.detail1}
                          </Text>
                          <Text as="p" color="white">
                            {contract.detail2}
                          </Text>
                        </Box>
                      );
                    })}
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
                      _focus={{ boxShadow: 'none', bg: 'transparent' }}
                      w={{base:"100%",md:"aut0"}}>
                      View on polygonscan
                    </Button>
                    <Button
                      bg="blue-100"
                      colorScheme={'blue-100'}
                      color="white"
                      py="12px"
                      px="26px"
                      fontFamily={'Poppins'}
                      borderRadius={'2px'}
                      w={{base:"100%",md:"aut0"}}>
                      VIE ON IPFS
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxW={'800px'}
        w="100%"
        p="24px"
        position={'relative'}
        bg="colorPrimaryDark"
        borderRadius={'4px'}
        mx="20px">
        <Box position={'absolute'} right="26px" top="18px" onClick={onClose} cursor="pointer">
          <Image src={getFileUrl("marketplace-assets/assets/images/cross.svg")} alt="img"></Image>
        </Box>
        <ModalHeader p="0px 0px 24px 0px">
          <Text
            as="h2"
            color="white"
            textTransform={'uppercase'}
            fontSize="24px"
            fontWeight={'700'}
            lineHeight="36px">
            {selectedAvatarImage.title}
          </Text>
        </ModalHeader>

        <ModalBody p="0px" mb="24px">
          <Box bg="#E6EDF4" position={'relative'} mb="24px">
            <Image src={getFileUrl(selectedAvatarImage.imgSrc)} m="auto"></Image>
            <Box position={'absolute'} right="29px" top="24px">
              <Image src={getFileUrl("marketplace-assets/assets/images/degreencount.png")} m="auto" alt="img"></Image>
            </Box>
          </Box>
          <Box>
            <Text
              as="p"
              color="white"
              letterSpacing={'0.02em'}
              fontSize="18px"
              fontWeight={'400'}
              lineHeight="27px">

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter gap="16px" p="0px">
          <Button
            onClick={onClose}
            border="1px solid #F0FCFB"
            p="12px 58px"
            bg="transparent"
            color="white"
            textTransform={'uppercase'}
            borderRadius="2px">
            CLOSE
          </Button>
          <Button
            colorScheme="rgba(19, 134, 240, 1)"
            bg="rgba(19, 134, 240, 1)"
            borderRadius={'2px'}
            textTransform={'uppercase'}
            color="white"
            p="12px 40px">
            BUY INDIVIDUALLY
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Box>
    </Box>
  );
};
