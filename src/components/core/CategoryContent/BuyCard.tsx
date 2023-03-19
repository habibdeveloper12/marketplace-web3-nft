import { Box, Button, HStack, Img, Text } from '@chakra-ui/react';

export const BuyCard = ({
  image,
  cardWidth,
  HeartCount,
  Citizen,
  CardTitle,
  CardDesc,
  PriceTag
}) => {
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
          border="1px solid rgba(105, 228, 102, 1)"
          borderRadius={'42px'}
          bg="rgba(23, 23, 43, 0.7)"
          letterSpacing={'0.02em'}
          colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(0deg, #69E466,#FFC700) border-box"
          color="white"
          css={{
            background:
              'linear-gradient(#08131D, #08131D) padding-box, linear-gradient(0deg, #FFC700,#69E466) border-box',
            border: '1px solid transparent',
            borderRadius: '50px',
            display: ''
          }}>
          BUY
        </Button>
      </Box>
      <Box mb="16px" position={'relative'}>
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
        <Text color="#A7B3BF" fontSize={'15px'} fontWeight="400" lineHeight={'22px'} minH="69px">
          {CardDesc}
        </Text>
      </Box>
      <Box
        border="1px solid rgba(241, 139, 20, 1)"
        display={'flex'}
        alignItems="center"
        bg="rgba(23, 23, 43, 0.26)"
        borderRadius={'2px'}
        p="24px"
        justifyContent={'space-between'}
        w="100%"
        h="68px"
        backdropBlur={'7px'}
        css={{
          background:
            'linear-gradient(#0B1926, #0B1926) padding-box, linear-gradient(0deg, rgba(241, 139, 20, 0.3),rgba(230, 68, 17, 0.3)) border-box',
          border: '1px solid transparent',
          borderRadius: '2px',

          display: ''
        }}>
        <Box
          display={'flex'}
          alignItems="center"
          justifyContent={'center'}
          color="#71FF01"
          fontWeight={'600'}
          fontSize="14px"
          lineHeight={'21px'}
          letterSpacing="0.02em">
          PRICE
        </Box>
        <Box
          color="white"
          display={'flex'}
          fontWeight="700"
          alignItems="center"
          justifyContent={'center'}
          fontSize={'20px'}
          lineHeight="16px"
          fontFamily="dinFonts">
          {PriceTag}
        </Box>
      </Box>
    </Box>
  );
};
