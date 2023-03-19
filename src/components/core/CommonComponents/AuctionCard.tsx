import React, { useState } from 'react';
import { Box, Button, Flex, HStack, Img, Text } from '@chakra-ui/react';
import '@fontsource/poppins';
import { getFileUrl } from "../../../utils/getFileUrl";

type AuctionCardPropsType = {
  saleType:string;
  image: string;
  deal: string;
  _id: string;
  heart: boolean;
  no_of_likes: number;
  citizen: string;
  price: {
    token: string;
    amount:number
  };
  width?: string | {base:string, md:string,lg:string,xl:string};
  fontSize?: string;
  onCardButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const AuctionCard = ({
  price,
  citizen,
  deal,
  _id,
  image,
  no_of_likes,
  heart = false,
  width = { base: '100%', md: '48%', lg: '48%', xl: '32%' },
  fontSize,
  onCardButtonClick
}: AuctionCardPropsType) => {
  const [isLiked, setIsLiked] = useState(heart);

  return (
    <Box
      p="24px"
      w={width}
      mb="24px"
      bg="colorPrimaryDark"
      borderRadius={'12px'}
      fontSize={fontSize} 
      >
      <Box display={'flex'} justifyContent="space-between" pb="18px">
        <Button
          py="3px"
          bg="rgba(23, 23, 43, 0.7)"
          fontSize={'13px'}
          px="13px"
          border="1px solid #8787A5"
          borderRadius={'42px'}
          _hover={{ bg: 'rgba(23, 23, 43, 0.7)' }}
          _focus={{ boxShadow: 'none', bg: 'rgba(23, 23, 43, 0.7)' }}
          color="#8787A5">
          Hot Deal
        </Button>

        <Button
          py="3px"
          fontSize={'13px'}
          p="3px 13px"
          fontFamily={'Poppins'}
          fontWeight="700"
          border="1px solid #F18B14"
          borderRadius={'42px'}
          bg="rgba(23, 23, 43, 0.7)"
          letterSpacing={'0.02em'}
          _hover={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none', bg: 'transparent' }}
          color="white">
          AUCTION 
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
      <Flex mb="16px" justifyContent={'space-between'}>
        <Box
          p="12px 12px 10px 12px"
          border="1px solid #6B1AEF60"
          backdropBlur={'7px'}
          mr="8px"
          width="42%"
          bg="rgba(23, 23, 43, 0.7)">
          <Text
            as="span"
            color="#42CE1F"
            fontSize={{ base: `11px`, md: '13px', lg: '11px', xl: '11px', xxxl: `${fontSize ? fontSize:"14px"}` }}
            fontWeight="600"
            lineHeight={'21px'}
            letterSpacing="0.02em"
            >
            HIGHEST BID
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={`${fontSize ? fontSize :"18px"}`}
            lineHeight={'21px'}
            fontWeight="400"
            fontFamily="dinFonts"
            letterSpacing="0.02em">
              
            ${price.amount}
          </Text>
        </Box>
        <Box
          p="12px 6px 10px 12px"
          border="1px solid #E6441160 "
          backdropBlur={'7px'}
          bg="rgba(23, 23, 43, 0.3)"
          maxWidth={{base:"144px",xl:"130px",xxl:"144px"}}
          w="100%"
          >
          <Text
            as="span"
            color="#99BBE2"
            fontSize={{ base: '11px', md: '13px', lg: '11px', xl: '11px', xxxl:`${fontSize ? fontSize:"13px"}` }}
            fontFamily={'Poppins'}
            lineHeight="21px"
            letterSpacing={'0.02em'}
            fontWeight="600">
            AUCTION ENDS IN
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={{ base: '14px', md: '13px', lg: '14px', xl: '14px', xxxl: `${fontSize ? fontSize:"16px"}` }}
            fontFamily="dinFonts"
            lineHeight="26px"
            fontWeight={'400'}
            fontStyle="normal">
            03 : 18 : 24 : 42s
          </Text>
        </Box>
      </Flex>
      <Button variant="secondaryButton" onClick={onCardButtonClick}>BID NOW</Button>
    </Box>
  );
};
