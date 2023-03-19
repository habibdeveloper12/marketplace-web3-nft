import { Box, Image, Heading, Flex, Button, Link, Text } from '@chakra-ui/react';
import React from 'react';

const EnochCitizenCard = () => {
  return (
    <>
      <Box bg={'#052954'} border={'2px solid #1DB4F4'} px={'24px'} pb={'24px'}>
        <Flex height={'68px'} alignItems={'center'} justifyContent={'space-between'}>
          <Heading
            fontWeight={'600'}
            fontSize={'19px'}
            lineHeight={'28px'}
            color={'#FF9900'}
            textTransform={'uppercase'}
            height={'68px'}
            alignItems={'center'}
            display={'flex'}
            justifyContent={'flex-start'}
            fontFamily={'Oswald'}>
            ENOCH CITIZEN
          </Heading>
          <Box
            borderLeft={'2px solid #1DB4F4'}
            pl={'12px'}
            height={'68px'}
            alignItems={'center'}
            display={'flex'}
            justifyContent={'flex-end'}>
            <Image
              src="https://enochdev.com/marketplace/detaield-collection/10items.svg"
              alt="img"
            />
          </Box>
        </Flex>

        <Box overflow={'hidden'} mb={'16px'}>
          <Image
            src="https://enochdev.com/marketplace/detaield-collection/detailed-collection-card-img.png"
            alt="img"
            width={'100%'}
            objectFit={'cover'}
          />
        </Box>

        <Flex mb={'12px'}>
          <Link
            fontWeight={'500'}
            fontSize={'13px'}
            lineHeight={'20px'}
            textAlign={'center'}
            letterSpacing={'0.02em'}
            color={'#8787A5'}
            py={'3px'}
            px={'13px'}
            mr={'8px'}
            bg={'rgba(23, 23, 43, 0.7)'}
            border={'1px solid #8787A5'}
            backdropFilter={'blur(7px)'}
            borderRadius={'42px'}
            _hover={{ opacity: '0.8' }}>
            Pack
          </Link>
          <Link
            fontWeight={'500'}
            fontSize={'13px'}
            lineHeight={'20px'}
            textAlign={'center'}
            letterSpacing={'0.02em'}
            color={'#42CE1F'}
            py={'3px'}
            px={'13px'}
            bg={'rgba(23, 23, 43, 0.7)'}
            border={'1px solid #42CE1F'}
            backdropFilter={'blur(7px)'}
            borderRadius={'42px'}
            _hover={{ opacity: '0.8' }}>
            Hot Deal
          </Link>
        </Flex>

        <Heading
          fontWeight={'400'}
          fontSize={'20px'}
          lineHeight={'24px'}
          letterSpacing={'0.02em'}
          color={'#FFFFFF'}
          fontFamily={'dinFonts'}
          mb={'12px'}
          textTransform={'uppercase'}>
          qUIBIC333
        </Heading>

        <Box
          bg={'#12386C'}
          border={'1px solid #1E5AA0'}
          borderRadius={'1px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          py={'7px'}
          px={'16px'}
          mb={'12px'}>
          <Text
            fontWeight={'400'}
            fontSize={'18px'}
            lineHeight={'25px'}
            color={'#9FFFF3'}
            letterSpacing={'0.02em'}
            textTransform={'uppercase'}
            fontFamily={'dinFonts'}>
            Price
          </Text>
          <Text
            fontWeight={'400'}
            fontSize={'20px'}
            lineHeight={'0px'}
            color={'#FFFFFF'}
            fontFamily={'dinFonts'}>
            $150
          </Text>
        </Box>

        <Text
          fontWeight={'400'}
          fontSize={'15px'}
          lineHeight={'22px'}
          color={'#F9FAFC'}
          w={'100%'}
          overflow={'hidden'}
          display={'webkit-box'}
          // _webkitLineClamp={"3"}
          // _webkitBoxOrient={"vertical"}
          textOverflow={'ellipsis'}
          mb={'15px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt...
        </Text>

        <Box display={'flex'} alignItems="center" justifyContent={'space-between'} gap="12px">
          <Button
            bg="transparent"
            w="100%"
            color="white"
            border="1px solid white"
            fontSize={{ base: '15px', md: '11px', lg: '11px', xl: '11px' }}
            py="12px"
            px="11px"
            borderRadius={'2px'}
            fontFamily={'Poppins'}
            _hover={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none', bg: 'transparent' }}>
            ADD TO CART
          </Button>
          <Button
            bg="#1386F0"
            colorScheme={'#1386F0'}
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
    </>
  );
};

export default EnochCitizenCard;
