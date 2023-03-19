import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Text,

} from '@chakra-ui/react';

export const SaleCard = ({
  image,
  cardWidth,
  HeartCount,
  Citizen,
  CardTitle,
  CardDesc,
  PriceCut,
  OriginalPrice,
  MarginBox
}:any) => {
  return (
    <Box p="24px" w={cardWidth} mb="24px" bg="#0B1926" borderRadius={'2px'}>
      <Box display={'flex'} justifyContent="space-between" pb="16px">
        <Button
          py="3px"
          fontSize={'13px'}
          h="26px"
          px="13px"
          alignItems={'center'}
          fontWeight={'600'}
          lineHeight="20px"
          borderRadius={'42px'}
          colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #E611B7, #7514F1) border-box"
          color="white"
          textTransform={'uppercase'}
          css={{
            background:
              'linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #F18B14, #E64411) border-box',
            border: '1px solid transparent',
            borderRadius: '50px',
            display: ''
          }}>
          <Img mr="6px" src="https://cdn.enochdev.com/marketplace/assets/aggicon.svg"></Img>
          Hot Deal
        </Button>

        <Button
          py="3px"
          h="26px"
          fontSize={'13px'}
          p="3px 28px"
          fontFamily={'Poppins'}
          fontWeight="700"
          border="1px solid rgba(102, 183, 228, 1)"
          borderRadius={'42px'}
          bg="rgba(23, 23, 43, 0.7)"
          letterSpacing={'0.02em'}
          colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(0deg, #7000FF,#66B7E4) border-box"
          color="white"
          css={{
            background:
              'linear-gradient(#08131D, #08131D) padding-box, linear-gradient(0deg, #7000FF,#66B7E4) border-box',
            border: '1px solid transparent',
            borderRadius: '50px',
            display: ''
          }}>
          SALE
        </Button>
      </Box>
      <Box mb="10px" position={'relative'}>
        <Img src={image} borderRadius={'2px'} w="100%"></Img>
        <Box position={'absolute'} right="16px" bottom={'16px'}>
          <Img src="https://cdn.enochdev.com/marketplace-assets/3d.svg"></Img>
        </Box>
      </Box>
      <HStack justifyContent={'space-between'}>
        <Box display={'flex'}>
          <Text
            as="span"
            color="#A1A1A1"
            fontSize="18px"
            fontWeight="700"
            lineHeight={'25px'}
            mr="3px">
            {HeartCount}
          </Text>
          <Img src="https://cdn.enochdev.com/marketplace-assets/assets/images/dill.svg"></Img>
        </Box>
        <Text as="span" color="#63C5DB" fontSize="14px" fontWeight="500" lineHeight={'21px'}>
          {Citizen}
        </Text>
      </HStack>
      <Box mb="8px">
        <Text
          letterSpacing={'0.04em'}
          as="p"
          color="white"
          fontSize={'18px'}
          fontWeight="600"
          lineHeight={'27px'}
          textTransform="uppercase">
          {CardTitle}
        </Text>
      </Box>
      <Box mb="10px">
        <Text color="#A7B3BF" fontSize={'15px'} fontWeight="400" minH="69px" lineHeight={'22px'}>
          {CardDesc}
        </Text>
      </Box>
      <Flex>
        <Box
          mr="16px"
          borderRadius={'2px'}
          p="12px 46px 9px 12px"
          position={'relative'}
          width="73%"
          border="1px solid #6B1AEF60"
          backdropBlur={'7px'}>
          <Text
            as="span"
            color="#D84343"
            fontSize={'14px'}
            fontFamily={'Poppins'}
            textDecoration="line-through"
            textDecorationStyle="solid"
            textDecorationColor={'#D84343'}
            textDecorationThickness="1px">
            {PriceCut}
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={{
              base: '18px',
              md: '16px',
              lg: '16px',
              xl: '16px',
              xxl: '18px'
            }}>
            {OriginalPrice}
          </Text>
          <Box
            position={'absolute'}
            color="white"
            px="8px"
            bg="#1BB033"
            top={'-8px'}
            right="4px"
            fontWeight={'700'}
            lineHeight="18px"
            fontFamily="dinFonts"
            borderRadius={'42px'}
            fontSize="10px">
            15% OFF
          </Box>
        </Box>
        <Box
          p="12px 2px 6px 8px"
          w="100%"
          borderRadius={'2px'}
          border="1px solid #E6441160 "
          backdropBlur={'7px'}>
          <Text
            as="span"
            color="#99BBE2"
            fontSize={{
              base: '13px',
              md: '13px',
              lg: '11px',
              xl: '10px',
              xxl: '12px'
            }}
            fontWeight="600"
            lineHeight="21px"
            letterSpacing={'0.02em'}>
            FLASH DEAL ENDS IN
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={{
              base: '16px',
              md: '13px',
              lg: '14px',
              xl: '12px',
              xxl: '14px'
            }}
            fontFamily="dinFonts"
            lineHeight="26px"
            fontWeight={'600'}
            fontStyle="normal">
            03 : 18 : 24 : 42s
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
