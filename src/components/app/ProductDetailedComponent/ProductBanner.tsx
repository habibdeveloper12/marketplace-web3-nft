import React from 'react';
import { Box, Flex, Img, Text } from '@chakra-ui/react';
import '@fontsource/poppins';
import { FlashDeal } from './FlashDeal';
import { availableColorsData } from '../../../constants/productDetailed';
import { getFileUrl } from '../../../utils/getFileUrl';

const ProductBanner = () => {
  return (
    <Flex pt="40px" gap="24px" flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
      <Box position={'relative'}>
        <Img
          position={'absolute'}
          alt="sixty-img"
          top="24px"
          right="24px"
          src={getFileUrl('marketplace-assets/assets/images/sixty.svg')}></Img>
        <Img
          alt="foot-img"
          w="100%"
          h="100%"
          src={getFileUrl('marketplace-assets/assets/images/Foot.png')}></Img>
      </Box>
      <Box w={{ base: '100%', md: '100%', lg: '50%' }}>
        <Box
          bg="colorPrimaryDark"
          p="32px 32px 32px 43px"
          backdropBlur={'7px'}
          border="1px solid #667AE4">
          <Box pb="24px" borderBottom={'1px solid #718DB0'}>
            <Flex justifyContent={'space-between'} alignItems="center" mb="17px">
              <Text
                as="h4"
                fontSize={'16px'}
                color="#42CE1F"
                textTransform={'uppercase'}
                fontWeight="600"
                lineHeight={'24px'}>
                Lucifer
              </Text>
              <Box display={'flex'} justifyContent="center" alignItems={'center'} gap="8px">
                <Box
                  w="32px"
                  h="32px"
                  display={'flex'}
                  justifyContent="center"
                  alignItems={'center'}
                  bg="#25253A"
                  border="1px solid #414165"
                  borderRadius={'2px'}>
                  <Img
                    alt="sahrer-img"
                    src={getFileUrl('marketplace-assets/assets/images/sharer.svg')}></Img>
                </Box>
                <Box
                  w="56px"
                  h="32px"
                  display={'flex'}
                  justifyContent="center"
                  alignItems={'center'}
                  bg="#25253A"
                  border="1px solid #414165"
                  borderRadius={'2px'}>
                  <Img
                    alt="mendo-img"
                    src={getFileUrl('marketplace-assets/assets/images/mendo.svg')}
                    mr="7px"></Img>
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
                  bg="#25253A"
                  border="1px solid #414165"
                  borderRadius={'2px'}>
                  <Img
                    alt="dot-img"
                    src={getFileUrl('marketplace-assets/assets/images/dotting.svg')}></Img>
                </Box>
              </Box>
            </Flex>
            <Flex justifyContent={'space-between'} alignItems="center">
              <Text
                as="h4"
                fontSize={'32px'}
                color="#9FFFF3"
                textTransform={'uppercase'}
                fontWeight="400"
                lineHeight={'40px'}>
                #003
              </Text>
              <Box
                bg="rgba(23, 23, 43, 0.7)"
                backdropBlur={'7px'}
                border="1px solid #8787A5"
                borderRadius="42px"
                p="3px 13px">
                <Text
                  as="span"
                  color="#8787A5"
                  fontSize={'13px'}
                  fontWeight="500"
                  lineHeight={'20px'}
                  letterSpacing="0.02em">
                  Footwear
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box mt="16px">
            <Text
              as="h5"
              fontSize={{ base: '22px', md: '32px' }}
              color="White"
              textTransform={'uppercase'}
              letterSpacing="0.02em"
              fontWeight="700"
              lineHeight={'48px'}>
              Lucifer's sneakers
            </Text>
            <Text
              mb="16px"
              as="p"
              fontSize={'15px'}
              color="#C1C1DC"
              fontWeight="400"
              lineHeight={'29px'}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae.
            </Text>
            <Flex pb="26px" borderBottom={'1px solid #718DB0'} flexWrap="wrap" gap="24px">
              <Box w={{ base: '100%', md: '46%' }}>
                <Box>
                  <Text
                    as="h5"
                    fontSize={'14px'}
                    color="#81F7FF"
                    textTransform={'uppercase'}
                    letterSpacing="0.1em"
                    fontWeight="600"
                    lineHeight={'21px'}>
                    CREATOR
                  </Text>
                  <Box display={'flex'} alignItems="center" mt="15px">
                    <Img
                      alt="cre-img"
                      src={getFileUrl('marketplace-assets/assets/images/CreWorsh.svg')}
                      mr="8px"></Img>
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
              <Box w={{ base: '100%', md: '46%' }}>
                <Box>
                  <Text
                    as="h5"
                    fontSize={'14px'}
                    color="#81F7FF"
                    textTransform={'uppercase'}
                    letterSpacing="0.1em"
                    fontWeight="600"
                    lineHeight={'21px'}>
                    seller
                  </Text>
                  <Box display={'flex'} alignItems="center" mt="8px">
                    <Img
                      alt="amski-img"
                      src={getFileUrl('marketplace-assets/assets/images/amski.svg')}
                      mr="8px"></Img>
                    <Text
                      as="h5"
                      fontSize={'16px'}
                      color="White"
                      fontWeight="500"
                      lineHeight={'24px'}>
                      Enoch
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
            <Box mt="16px">
              <Text
                as="h5"
                fontSize={'14px'}
                color="#4CBEFE"
                textTransform={'uppercase'}
                fontWeight="600"
                lineHeight={'21px'}>
                AVAILABLE COLORS
              </Text>
              <Flex gap="16px" mt="16px">
                {availableColorsData.map((data) => {
                  return (
                    <Box
                      key={data.id}
                      bg={data.availableColor}
                      cursor={'pointer'}
                      w="32px"
                      h={'32px'}
                      border="2px solid #FFFFFF"
                    />
                  );
                })}
              </Flex>
            </Box>
          </Box>
        </Box>
        <FlashDeal />
      </Box>
    </Flex>
  );
};

export default ProductBanner;
