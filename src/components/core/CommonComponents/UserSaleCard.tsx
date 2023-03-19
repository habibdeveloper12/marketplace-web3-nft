import React, { useState } from 'react';
import { Box, Button, Flex, HStack, Img, Text } from '@chakra-ui/react';
import '@fontsource/poppins';
import { NFTCardTypes } from '../../../constants/nft';
import { getFileUrl } from "../../../utils/getFileUrl";

interface UserSaleCardProps extends NFTCardTypes {}

export const UserSaleCard = ({
  saleType,
  deal,
  _id,
  image,
  citizen,
  off_percent,
  sale_price,
  price,
  heart,
  no_of_likes
}: UserSaleCardProps) => {
  const [isLiked, setIsLiked] = useState(heart);
  return (
    <Box
      p="24px"
      w={{ base: '100%', md: '48%', lg: '48%', xl: '32%' }}
      mb="24px"
      bg="colorPrimaryDark"
      borderRadius={'12px'}>
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
          {'AUCTION'}
        </Button>
      </Box>
      <Box mb="16px">
        <Img alt="img" src={getFileUrl(image)} borderRadius={'4px'} w="100%"></Img>
      </Box>
      <HStack justifyContent={'space-between'}>
        <Text as="span" color="primaryWhite" fontSize={'20px'} fontFamily={'DIN 2014'}>
          PRICE ${price.amount}
        </Text>
        <Box display={'flex'} justifyContent="center" alignItems="center" gap="10px">
          <Button
            onClick={() => setIsLiked((prev) => !prev)}
            bg="transparent"
            _active={{ bg: 'transparent' }}
            _hover={{ bg: 'transparent' }}>
            <Img
              alt="heart"
              src={`${isLiked ? getFileUrl('marketplace-assets/assets/images/redheart.svg') : getFileUrl('marketplace-assets/assets/images/dill.svg')}`}></Img>
          </Button>
          <Text as="span" color="white" fontSize={'16px'}>
            {no_of_likes}
          </Text>
        </Box>
      </HStack>
      <Box mb="16px" display="flex" alignItems="center" justifyContent="space-between">
        <Text as="p" color="#6398DB" fontSize={'14px'} fontFamily={'DIN 2014'}>
          {_id}
        </Text>
        <Text as="span" color="#6398DB" fontSize={'14px'}>
          {citizen}
        </Text>
      </Box>

      <Box display={'flex'} alignItems="center" justifyContent={'space-between'} gap="12px">
        <Button
          bg="transparent"
          w="100%"
          color="white"
          border="1px solid white"
          fontSize={{ base: '15px', md: '11px', lg: '11px', xl: '11px' }}
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
          borderRadius={'2px'}>
          BUY NOW
        </Button>
      </Box>
    </Box>
  );
};
