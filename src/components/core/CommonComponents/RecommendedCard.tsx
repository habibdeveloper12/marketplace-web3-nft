import React from 'react';
import { Box, Flex, Link, Heading, Image, Text, Button } from '@chakra-ui/react';
import { RightArrowButton } from '../CommonComponents';
import { getFileUrl } from '../../../utils/getFileUrl';

type RecommendedCardPropsTyp = {
  productTitle:string,
  productImageUrl:string,
  productSubtitle:string,
  productDescription:string,
  amount:number
  onCardButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const RecommendedCard = ({
  productTitle,
  productImageUrl,
  productSubtitle,
  productDescription,
  amount,
  onCardButtonClick
}:RecommendedCardPropsTyp) => {
  return (
    <Box width={'100%'} px={'24px'} py={'16px'} bg={'colorPrimaryDark'} borderRadius={'4px'}>
      <Text
        fontSize={'13px'}
        lineHeight={'19.5px'}
        fontWeight={'400'}
        letterSpacing={'0.2em'}
        textTransform={'uppercase'}
        color={'#81F7FF'}>
        {productTitle}
      </Text>

      <Box mt={'17px'} mb={'20px'} borderRadius={'4px'} position={'relative'}>
        <Image src={getFileUrl(productImageUrl)} alt="img" width={'100%'} />
        <Image
          src={getFileUrl("marketplace-assets/assets/images/3d-dark.svg")}
          alt="3d"
          position={'absolute'}
          right={'8px'}
          bottom={'8px'}
        />
      </Box>

      <Flex
        justifyContent={'space-between'}
        flexDirection={{ md: 'row', sm: 'column', base: 'row' }}
        alignItems={{ lg: 'center', sm: 'flex-start', base: 'center' }}>
        <Heading
          as="h3"
          fontSize={{
            xl: '22px',
            lg: '18px',
            md: '24px',
            sm: '16px',
            base: '18px'
          }}
          lineHeight={'36px'}
          fontWeight={'600'}
          letterSpacing={'0.02em'}
          textTransform={'uppercase'}
          color={'primaryWhite'}>
          {productSubtitle}
        </Heading>

        <Button
          bg={'transparent'}
          fontSize={'16px'}
          lineHeight={'25px'}
          fontWeight={'400'}
          color={'#A1A1A1'}
          p={'0'}
          _hover={{ bg: 'transparent' }}>
          <Image src={getFileUrl("marketplace-assets/assets/images/heart.svg")} alt="icon" mr={'10px'} /> 92
        </Button>
      </Flex>

      <Text
        as="h3"
        fontSize={'15px'}
        lineHeight={'22px'}
        fontWeight={'400'}
        color={'#F9FAFC'}
        mt={'8px'}
        mb={'17px'}>
        {productDescription}
      </Text>

      <Box
        height={'56px'}
        width={'100%'}
        bg={'#192D46'}
        borderRadius={'4px'}
        p={'16px'}
        mb={'16px'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text
            fontSize={'15px'}
            lineHeight={'25px'}
            fontWeight={'600'}
            letterSpacing={'0.02em'}
            textTransform={'uppercase'}
            color={'#42CE1F'}>
            Price
          </Text>
          <Text fontSize={'16px'} lineHeight={'25px'} fontWeight={'700'} color={'primaryWhite'}>
            ${amount}
          </Text>
        </Flex>
      </Box>

      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Link
          fontSize={'15px'}
          lineHeight={'25px'}
          fontWeight={'600'}
          color={'orange-50'}
          letterSpacing={'0.02em'}
          textTransform={'uppercase'}
          _hover={{ textDecoration: 'none', opacity: '0.8' }}>
          Add To Cart
        </Link>
        <RightArrowButton onClick={onCardButtonClick}>Buy now</RightArrowButton>
      </Flex>
    </Box>
  );
};
