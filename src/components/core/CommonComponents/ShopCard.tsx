import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { RightArrowButton } from "../CommonComponents";
import { getFileUrl } from '../../../utils/getFileUrl';

export const ShopCard = ({ data,onClick }) => {
  return (
    <Box width={{lg: "33.33%", md: "50%", base: "100%"}} px={"12px"} mb={"20px"}>
      <Box px={'24px'} py={'21px'} bg={'colorPrimaryDark'} borderRadius={'8px'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Box
            fontWeight={'600'}
            fontSize={{ xl: '13px', lg: '11px', sm: '13px', base: '10px' }}
            lineHeight={'20px'}
            textAlign={'center'}
            letterSpacing={'0.02em'}
            textTransform={'uppercase'}
            color={'#F9FAFC'}
            bg={'rgba(23, 23, 43, 0.7)'}
            px={'13px'}
            py={'3px'}
            backdropFilter={'blur(7px)'}
            borderRadius={'42px'}
            border={'1px solid #E64411'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            height={'26px'}>
            {data?.total}
          </Box>
          <Flex gap={'16px'}>
            <Button
              border={'none'}
              outline={'none'}
              p={'0px'}
              bg={'transparent'}
              _hover={{ bg: 'transparent', opacity: '0.8' }}
              _focus={{ bg: 'transparent' }}>
              <Image src={getFileUrl("marketplace-assets/assets/images/eyes.png")} alt="icon" />
              <Text
                as="span"
                ml={'6px'}
                fontWeight={'400'}
                font-size={'16px'}
                lineHeight={'25px'}
                color={'#A1A1A1'}
                fontFamily="dinFonts">
                {data?.view}
              </Text>
            </Button>

            <Button
              border={'none'}
              outline={'none'}
              p={'0px'}
              bg={'transparent'}
              _hover={{ bg: 'transparent', opacity: '0.8' }}
              _focus={{ bg: 'transparent' }}>
              <Image src={getFileUrl("marketplace-assets/assets/images/heart.svg")} alt="icon" />
              <Text
                as="span"
                ml={'6px'}
                fontWeight={'400'}
                font-size={'16px'}
                lineHeight={'25px'}
                color={'#A1A1A1'}
                fontFamily="dinFonts">
                {data?.like}
              </Text>
            </Button>
          </Flex>
        </Flex>

        <Box mt={'16px'}>
          <Box borderRadius={'4px'} position={'relative'} zIndex={'0'}>
            <Image src={getFileUrl(data?.coverImgUrl)} alt="img" height={'100%'} width={'100%'} />
          </Box>

          <Box
            maxW={'120px'}
            width={'100%'}
            mx={'auto'}
            mt={'-70px'}
            position={'relative'}
            zIndex={'2'}>
            <Box
              height={'120px'}
              width={'120px'}
              borderRadius={'50%'}
              border={'6px solid #00FECF40'}>
              <Image
                src={getFileUrl(data?.userImgUrl)}
                alt="img"
                height={'100%'}
                width={'100%'}
                borderRadius={'50%'}
              />
            </Box>
            <Text
              fontWeight={'400'}
              fontSize={'20px'}
              lineHeight={'24px'}
              textAlign={'center'}
              letterSpacing={'0.02em'}
              color={'#FFFFFF'}
              fontFamily="dinFonts"
              mt={'10px'}
              mb={'18px'}>
              {data?.userName}
            </Text>
          </Box>

          <Flex
            borderTop={'1px solid #4A607C'}
            borderBottom={'1px solid #4A607C'}
            justifyContent={'space-between'}
            height={'48px'}
            alignItems={'center'}>
            <Text
              fontSize={'14px'}
              lineHeight={'16px'}
              textAlign={'center'}
              letterSpacing={'0.02em'}
              color={'#99BBE2'}
              fontFamily="dinFonts">
              COLLECTED
            </Text>
            <Text
              fontSize={'14px'}
              lineHeight={'16px'}
              textAlign={'center'}
              letterSpacing={'0.02em'}
              color={'#F0FCFB'}
              fontFamily="dinFonts">
              {data?.collected}
            </Text>
          </Flex>
          <Flex
            borderTop={'1px solid #4A607C'}
            borderBottom={'1px solid #4A607C'}
            justifyContent={'space-between'}
            height={'48px'}
            alignItems={'center'}>
            <Text
              fontSize={'14px'}
              lineHeight={'16px'}
              textAlign={'center'}
              letterSpacing={'0.02em'}
              color={'#99BBE2'}
              fontFamily="dinFonts">
              {data?.listedForSale}
            </Text>
            <Text
              fontSize={'14px'}
              lineHeight={'16px'}
              textAlign={'center'}
              letterSpacing={'0.02em'}
              color={'#F0FCFB'}
              fontFamily="dinFonts">
              20 ITEMS
            </Text>
          </Flex>

          <Flex mt={'26px'} justifyContent={'space-between'} alignItems={'center'}>
            <Button
              bg={'#25253A'}
              borderRadius={'2px'}
              border={'1px solid #414165'}
              p={'0px'}
              minH={'32px'}
              width={'32px'}
              _hover={{ bg: '#25253A', opacity: '0.6' }}
              _focus={{ bg: '#25253A' }}>
              <Image src={getFileUrl("marketplace-assets/assets/images/sharer.svg")} alt="icon" />
            </Button>
            <RightArrowButton onClick={onClick}>Visit Shop</RightArrowButton>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

