import React from 'react';
import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import { availableColorsData } from '../../../constants/productDetailed';
import { getFileUrl } from "../../../utils/getFileUrl";

const AvatarPackBanner = () => {
  return (
    <Flex pt="40px" gap="24px" flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
      <Box position={'relative'}>
        <Img position={'absolute'} alt="sixty" top="24px" right="24px" src={getFileUrl("marketplace-assets/assets/images/sixty.svg")}></Img>

        <Img w="100%" h="100%" alt="heroimage" src={getFileUrl("marketplace-assets/assets/images/heromage.png")}></Img>
      </Box>
      <Box w={{ base: '100%', md: '100%', lg: '50%' }}>
        <Box bg="colorPrimaryDark" py="32px" px="32px"backdropBlur={'7px'} border="1px solid #667AE4">
          <Box pb="24px" borderBottom="1px solid" borderColor={'rgba(113, 141, 176, 0.3)'}>
            <Flex justifyContent={'space-between'} alignItems="center">
              <Img alt="items" src={getFileUrl("marketplace-assets/assets/images/items.png")}></Img>
              <Box display={'flex'} flexDirection="column" alignItems={'end'}>
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
                    <Img src={getFileUrl("marketplace-assets/assets/images/sharer.svg")}></Img>
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
                    <Img src={getFileUrl("marketplace-assets/assets/images/mendo.svg")} mr="7px"></Img>
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
                    <Img src={getFileUrl("marketplace-assets/assets/images/dotting.svg")}></Img>
                  </Box>
                </Box>
                <Box
                  mt="19px"
                  bg="rgba(23, 23, 43, 0.7)"
                  backdropBlur={'7px'}
                  border="1px solid #8787A5"
                  borderRadius="42px"
                  p="3px 13px"
                  textAlign={'center'}>
                  <Text
                    as="span"
                    color="#8787A5"
                    fontSize={'13px'}
                    fontWeight="500"
                    lineHeight={'20px'}
                    letterSpacing="0.02em">
                    PACK
                  </Text>
                </Box>
              </Box>
            </Flex>
            <Flex justifyContent={'space-between'} alignItems="center"></Flex>
          </Box>
          <Box mt="16px">
            <Text
              as="h5"
              fontSize={'32px'}
              color="White"
              textTransform={'uppercase'}
              letterSpacing="0.02em"
              fontWeight="700"
              lineHeight={'48px'}>
              THE PERFECT MASTER
            </Text>
            <Text
              as="h5"
              mb="16px"
              fontSize={'14px'}
              color="#81F7FF"
              textTransform={'uppercase'}
              letterSpacing="0.1em"
              fontWeight="600"
              lineHeight={'21px'}>
              SEE ALL PACK ITEMS
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
            <Flex pb="26px" borderBottom="1px solid" borderColor={'rgba(113, 141, 176, 0.3)'} flexWrap="wrap" gap="24px">
              <Box w={{base:"100%",md:"46%"}}>
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
                    <Img src={getFileUrl("marketplace-assets/assets/images/CreWorsh.svg")} mr="8px"></Img>
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
              <Box w={{base:"100%",md:"46%"}}>
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
                  <Box display={'flex'} alignItems="center" mt="15px">
                    <Img src={getFileUrl("marketplace-assets/assets/images/amski.svg")} mr="8px"></Img>
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
            <Box
              mt="16px"
              pb="24px"
              borderBottom="1px solid"
              borderColor={'rgba(113, 141, 176, 0.3)'}>
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
                {availableColorsData.map((color) => {
                  return (
                    <Box
                      key={color.id}
                      bg={color.availableColor}
                      cursor={'pointer'}
                      w="32px"
                      h={'32px'}
                      border="2px solid #FFFFFF"
                    />
                  );
                })}
              </Flex>
            </Box>
            <Box pt="24px" pb="28px">
              <Box>
                <Text
                  as="h4"
                  fontSize={'32px'}
                  fontFamily=" dinFonts"
                  color="#9FFFF3"
                  textTransform={'uppercase'}
                  fontWeight="600"
                  lineHeight={'32px'}>
                  price
                </Text>
                <Box display={'flex'} mt="16px" alignItems={'baseline'} gap="20px">
                  <Text
                    as="h4"
                    fontSize={'68px'}
                    fontFamily=" dinFonts"
                    color="White"
                    fontWeight="600"
                    lineHeight={'68px'}>
                    $120
                  </Text>
                  <Text
                    as="h4"
                    fontSize={'14px'}
                    color="#718DB0"
                    fontWeight="600"
                    textTransform={'uppercase'}
                    lineHeight={'21px'}>
                    10 Items
                  </Text>
                </Box>
              </Box>
            </Box>
            <Flex gap="17px" flexDirection={{ base: 'column', md: 'row' }}>
              <Button
                bg="transparent"
                h="48px"
                fontSize={'15px'}
                fontWeight="600"
                lineHeight={'22px'}
                border="1px solid #FFFFFF"
                colorScheme={'transparent'}
                borderRadius={'2px'}
                color="white"
                p="13px 10px"
                w={{base:"100%",md:"50%"}}>
                ADD TO CART
              </Button>
              <Button
                bg="blue-100"
                h="48px"
                fontSize={'15px'}
                fontWeight="600"
                lineHeight={'22px'}
                colorScheme={'blue-100'}
                borderRadius={'2px'}
                color="white"
                p="13px 10px"
                w={{base:"100%",md:"50%"}}>
                BUY NOW
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default AvatarPackBanner;
