import React, { useState } from 'react';
import { Box, Button, Flex, HStack, Img, Text } from '@chakra-ui/react';
import '@fontsource/poppins';
import { NFTCardTypes } from '../../../constants/nft';
import { getFileUrl } from '../../../utils/getFileUrl';
interface SaleCardPropsType extends NFTCardTypes {
  width?: string | { base: string; md: string; lg: string; xl: string };
  fontSize?: string;
  onCardButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  price: {
    token: string;
    amount: number;
  };
}

export const SaleCard = ({
  saleType,
  deal,
  _id,
  image,
  citizen,
  off_percent,
  sale_price,
  price,
  heart,
  no_of_likes,
  width = { base: '100%', md: '48%', lg: '48%', xl: '32%' },
  fontSize,
  onCardButtonClick
}: SaleCardPropsType) => {
  const [isLiked, setIsLiked] = useState(heart);
  return (
    <Box
      p="24px"
      w={width}
      mb="24px"
      bg="colorPrimaryDark"
      borderRadius={'12px'}
      fontSize={fontSize}>
      <Box display={'flex'} justifyContent="space-between" pb="18px">
        <Button
          py="3px"
          fontSize={'13px'}
          px="13px"
          border="1px solid #8787A5"
          borderRadius={'42px'}
          bg="transparent"
          color="#8787A5"
          _hover={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none', bg: 'transparent' }}>
          {deal}
        </Button>
        <Button
          py="3px"
          fontSize={'13px'}
          fontWeight="700"
          lineHeight={'20px'}
          px="13px"
          border="1px solid #262EDE"
          borderRadius={'42px'}
          bg="rgba(23, 23, 43, 0.7)"
          color="white"
          _hover={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none', bg: 'transparent' }}>
          {saleType}
        </Button>
      </Box>
      <Box mb="16px">
        <Img alt="img" src={getFileUrl(image)} borderRadius={'4px'} w="100%"></Img>
      </Box>
      <HStack justifyContent={'space-between'}>
        <Text as="p" color="white" fontSize={'22px'} fontFamily="dinFonts">
          {_id?.slice(0, 5)}
        </Text>
        <Box display={'flex'} justifyContent="center" alignItems="center" gap="8px">
          <Button
            onClick={() => setIsLiked((prev) => !prev)}
            bg="transparent"
            _active={{ bg: 'transparent' }}
            _hover={{ bg: 'transparent' }}>
            <Img
              alt="heart"
              src={`${
                isLiked
                  ? getFileUrl('marketplace-assets/assets/images/redheart.svg')
                  : getFileUrl('marketplace-assets/assets/images/dill.svg')
              }`}></Img>
          </Button>
          <Text as="span" color="white" fontSize={'16px'}>
            {no_of_likes}
          </Text>
        </Box>
      </HStack>
      <Box mb="16px">
        <Text as="span" color="#6398DB" fontSize={'14px'}>
          {citizen}
        </Text>
      </Box>
      <Flex gap="8px" mb="16px" justifyContent={'space-between'}>
        <Box
          p="12px 12px 10px 12px"
          position={'relative'}
          width={{ base: '40%', md: '38%', lg: '41%', xxl: '38%' }}
          border="1px solid #6B1AEF60"
          backdropBlur={'7px'}
          bg="rgba(23, 23, 43, 0.7)">
          <Text
            as="span"
            color="#D84343"
            fontSize={'14px'}
            fontFamily={'Poppins'}
            textDecoration="line-through">
            ${price?.amount}
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={{ base: '18px', md: '16px', lg: '16px', xl: '16px', xxl: '18px' }}>
            ${sale_price}
          </Text>
          <Box
            position={'absolute'}
            color="white"
            px="8px"
            bg="green"
            top={'-8px'}
            right="4px"
            fontWeight={'700'}
            lineHeight="18px"
            fontFamily="dinFonts"
            borderRadius={'42px'}
            fontSize="10px">
            {off_percent}
          </Box>
        </Box>
        <Box
          p="12px 12px 10px 12px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          border="1px solid #E6441160 "
          backdropBlur={'7px'}
          bg="rgba(23, 23, 43, 0.3)"
          maxW="156px"
          w="100%">
          <Text
            as="span"
            color="#99BBE2"
            fontSize={{
              base: '11px',
              md: '13px',
              lg: '11px',
              xl: '11px',
              xxxl: `${fontSize ? fontSize : '13px'}`
            }}
            fontFamily={'Poppins'}
            lineHeight="21px"
            fontWeight="600"
            letterSpacing={'0.02em'}
            maxW="156px"
            w="100%">
            FLASH DEAL ENDS IN
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={{
              base: '14px',
              md: '13px',
              lg: '14px',
              xl: '14px',
              xxxl: `${fontSize ? fontSize : '16px'}`
            }}
            fontFamily="dinFonts"
            lineHeight="26px"
            fontWeight={'400'}
            fontStyle="normal">
            03 : 18 : 24 : 42s
          </Text>
        </Box>
      </Flex>
      <Box display={'flex'} alignItems="center" justifyContent={'space-between'} gap="12px">
        <Button
          bg="transparent"
          w="100%"
          color="white"
          border="1px solid white"
          fontSize={{ base: '15px', md: '11px', lg: '11px', xl: `${fontSize ? fontSize : '11px'}` }}
          py="12px"
          px="11px"
          borderRadius={'0px'}
          fontFamily={'Poppins'}
          _hover={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none', bg: 'transparent' }}>
          ADD TO CART
        </Button>
        <Button
          bg="blue-100"
          colorScheme={'blue-100'}
          w="100%"
          color="white"
          py="12px"
          px="26px"
          fontFamily={'Poppins'}
          borderRadius={'2px'}
          onClick={onCardButtonClick}>
          BID NOW
        </Button>
      </Box>
    </Box>
  );
};
