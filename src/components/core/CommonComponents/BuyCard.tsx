import React, { useState } from 'react';
import { Box, Button, HStack, Img, Text } from '@chakra-ui/react';
import { getFileUrl } from "../../../utils/getFileUrl";

type BuyCardPropsType = {
  image: string;
  saleType: string;
  deal: string;
  heart: boolean;
  citizen: string;
  no_of_likes: number;
  _id: string;
  price: {
    token: string;
    amount:number
  };
  onCardButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const BuyCard = ({
  no_of_likes,
  price,
  _id,
  citizen,
  heart,
  deal,
  saleType,
  image,
  onCardButtonClick
}: BuyCardPropsType) => {
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
          Hot deal
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
        {_id.slice(0,5)}
        </Text>
        <Box display={'flex'} justifyContent="center" alignItems="center" gap="8px">
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
      <Box mb="16px">
        <Text as="span" color="#6398DB" fontSize={'14px'}>
          {citizen}
        </Text>
      </Box>
      <Box
        border="1px solid #4A607C"
        display={'flex'}
        alignItems="center"
        bg="rgba(23, 23, 43, 0.26)"
        mb="20px"
        w="100%"
        h="68px"
        backdropBlur={'7px'}>
        <Box
          w="50%"
          h="68px"
          display={'flex'}
          alignItems="center"
          justifyContent={'center'}
          borderRight={'1px solid #4A607C'}
          color="#99BBE2"
          fontWeight={'600'}
          fontSize="14px"
          lineHeight={'21px'}>
          PRICE
        </Box>
        <Box
          color="white"
          w="50%"
          h="68px"
          display={'flex'}
          fontWeight="600"
          alignItems="center"
          justifyContent={'center'}
          fontSize={'24px'}
          lineHeight="30px"
          fontFamily="dinFonts">
          ${price.amount}
        </Box>
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
          borderRadius="0px"
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
          borderRadius={'2px'}
          fontFamily={'Poppins'}
          onClick={onCardButtonClick}
          >
          BID NOW
        </Button>
      </Box>
    </Box>
  );
};
