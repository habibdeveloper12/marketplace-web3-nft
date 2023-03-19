import {
  Box,
  Button,
  Flex,
  Image,
  Img,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react';
import '@fontsource/poppins';
import { rowOfferData } from '../../../constants/productDetailed';
import { getFileUrl } from '../../../utils/getFileUrl';

export function BidNowModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="100%"
        display={'flex'}
        flexShrink="0"
        height={'48px'}
        bg="#1386F0"
        colorScheme={'#1386F0'}
        borderRadius={'2px'}
        color="white"
        onClick={onOpen}>
        BID NOW
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW={'800px'}
          w="100%"
          p="24px"
          position={'relative'}
          bg="#112135"
          borderRadius={'4px'}
          mx="20px">
          <Box position={'absolute'} right="26px" top="18px" onClick={onClose} cursor="pointer">
            <Image src={getFileUrl('marketplace-assets/assets/images/cross.svg')}></Image>
          </Box>
          <ModalHeader p="0px 0px 24px 0px">
            <Text
              as="h2"
              color="white"
              textTransform={'uppercase'}
              fontSize="24px"
              fontWeight={'700'}
              lineHeight="36px">
              {' '}
              Kitty Headset Pink
            </Text>
          </ModalHeader>

          <ModalBody p="0px" mb="14px">
            <Box>
              <Flex gap="32px" flexDirection={{ base: 'column', sm: 'column', md: 'row' }}>
                <Box w={{ base: '100%', sm: '100%', md: '50%' }}>
                  <Box h="372px" border={'9px solid white'}>
                    <Image
                      src={getFileUrl('marketplace-assets/assets/images/Foot.png')}
                      w="100%"
                      h="100%"></Image>
                  </Box>
                </Box>
                <Box w={{ base: '100%', sm: '100%', md: '50%' }}>
                  <Box>
                    <Text
                      as="h2"
                      mb="9px"
                      color="#42CE1F"
                      fontSize={'19px'}
                      fontWeight="400"
                      lineHeight={'25px'}>
                      Time Remaining{' '}
                    </Text>
                    <Box>
                      <Box>
                        <Flex
                          gap={{
                            base: '0px',
                            md: '0px',
                            lg: '0px',
                            xl: '10px'
                          }}>
                          <Box display={'flex'} flexDirection="column" alignItems={'center'}>
                            <Text
                              as="h1"
                              color="#FFFFFF"
                              fontWeight={'400'}
                              lineHeight="48px"
                              fontFamily="dinFonts"
                              fontSize="24px">
                              02
                            </Text>
                            <Text
                              as="h2"
                              color="#7B82A8"
                              fontWeight={'400'}
                              lineHeight="16px"
                              fontFamily="dinFonts"
                              textTransform={'uppercase'}
                              fontSize="13px">
                              Days
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              as="h1"
                              color="#FFFFFF"
                              fontWeight={'400'}
                              lineHeight="48px"
                              fontFamily="dinFonts"
                              fontSize="24px">
                              :
                            </Text>
                          </Box>
                          <Box display={'flex'} flexDirection="column" alignItems={'center'}>
                            <Text
                              as="h1"
                              color="#FFFFFF"
                              fontWeight={'400'}
                              lineHeight="48px"
                              fontFamily="dinFonts"
                              fontSize="24px">
                              04
                            </Text>
                            <Text
                              as="h2"
                              color="#7B82A8"
                              fontWeight={'400'}
                              lineHeight="17px"
                              fontFamily="dinFonts"
                              textTransform={'uppercase'}
                              fontSize="13px">
                              Hours
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              as="h1"
                              color="#FFFFFF"
                              fontWeight={'400'}
                              lineHeight="48px"
                              fontFamily="dinFonts"
                              fontSize="24px">
                              :
                            </Text>
                          </Box>
                          <Box display={'flex'} flexDirection="column" alignItems={'center'}>
                            <Text
                              as="h1"
                              color="#FFFFFF"
                              fontWeight={'400'}
                              lineHeight="48px"
                              fontFamily="dinFonts"
                              fontSize="24px">
                              34
                            </Text>
                            <Text
                              as="h2"
                              color="#7B82A8"
                              fontWeight={'400'}
                              lineHeight="17px"
                              fontFamily="dinFonts"
                              textTransform={'uppercase'}
                              fontSize="13px">
                              Minutes
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              as="h1"
                              color="#FFFFFF"
                              fontWeight={'400'}
                              lineHeight="48px"
                              fontFamily="dinFonts"
                              fontSize="24px">
                              :
                            </Text>
                          </Box>
                          <Box display={'flex'} flexDirection="column" alignItems={'center'}>
                            <Text
                              as="h1"
                              color="#FFFFFF"
                              fontWeight={'400'}
                              lineHeight="48px"
                              fontFamily="dinFonts"
                              fontSize="24px">
                              08
                            </Text>
                            <Text
                              as="h2"
                              color="#7B82A8"
                              fontWeight={'400'}
                              lineHeight="17px"
                              fontFamily="dinFonts"
                              textTransform={'uppercase'}
                              fontSize="13px">
                              Seconds
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                    <Text
                      as="p"
                      my="30px"
                      color="#FFFFFF"
                      fontSize={'15px'}
                      fontWeight="400"
                      lineHeight={'25px'}
                      letterSpacing="0.02em">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                    </Text>
                    <Box>
                      <Button
                        w="100%"
                        color="white"
                        colorScheme="rgba(19, 134, 240, 1)"
                        bg="rgba(19, 134, 240, 1)"
                        borderRadius={'2px'}
                        textTransform={'uppercase'}
                        p="12px 40px">
                        CONFIRM BID
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </ModalBody>

          <Box>
            <Box>
              <TableContainer
                overflowY="auto"
                maxHeight="300px"
                sx={{
                  '&::-webkit-scrollbar': {
                    width: '8px',
                    borderRadius: '20px',
                    backgroundColor: `rgba(0, 0, 0, 0.05)`
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: `#718DB0`,
                    borderRadius: '80px',
                    height: '33px'
                  },
                  '&::-webkit-scrollbar-track': {
                    bg: 'transparent'
                  },
                  '&::-webkit-scrollbar-track-piece:start': {
                    background: 'transparent',
                    mt: '48.5px'
                  }
                }}>
                <Table size="sm">
                  <Thead
                    borderBottom={'1px solid transparent'}
                    position="sticky"
                    top="0"
                    bg="#0F2B40">
                    <Tr>
                      {['User’s Profile', 'Price', 'Offer expires in'].map((tableHead, idx) => {
                        return (
                          <Th key={idx} borderBottom={'none'} p="16px 39px" color="#9FFFF3">
                            {tableHead}
                          </Th>
                        );
                      })}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {rowOfferData.map((row, idx) => {
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
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
export default BidNowModal;
