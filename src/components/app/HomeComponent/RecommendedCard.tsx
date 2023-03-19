import { Box, Flex, Link, Heading, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';

const RecommendedCard = (props: {
  data: {
    heading: string;
    imgUrl: string;
    itemTitle: string;
    paragraph: string;
  };
}) => {
  return (
    <>
      <Box
        width="100%"
        px={{ md: '24px', sm: '16px', base: '24px' }}
        py="25px"
        bg="#0B1926"
        borderRadius="4px">
        <Text
          fontSize={'13px'}
          lineHeight={'19.5px'}
          fontWeight={'400'}
          letterSpacing={'0.2em'}
          textTransform={'uppercase'}
          color="#FFE381">
          {props.data?.heading}
        </Text>

        <Box mt={'17px'} mb={'20px'} borderRadius={'4px'} position={'relative'}>
          <Image src={props.data?.imgUrl} alt="img" width={'100%'} />
          <Image
            src="https://cdn.enochdev.com/marketplace-assets/3d.svg"
            alt="3d"
            position="absolute"
            right="16px"
            bottom="16px"
          />
        </Box>

        <Box>
          <Flex alignItems="center" mb="8px">
            <Text
              fontWeight="700"
              fontSize="18px"
              lineHeight="25px"
              color="#A1A1A1"
              fontFamily="dinFonts">
              000
            </Text>
            <Button bg={'transparent'} p={'0'} _hover={{ bg: 'transparent' }}>
              <Image
                src="https://cdn.enochdev.com/marketplace-assets/heart-icon.svg"
                alt="icon"
                mr={'10px'}
              />
            </Button>
          </Flex>
          <Heading
            fontFamily={'body'}
            as="h3"
            fontSize={{
              xl: '24px',
              lg: '18px',
              md: '24px',
              sm: '16px',
              base: '18px'
            }}
            lineHeight={'36px'}
            fontWeight={'600'}
            letterSpacing={'0.02em'}
            textTransform={'uppercase'}
            color={'#FFFFFF'}>
            {props.data?.itemTitle}
          </Heading>
        </Box>

        <Text
          as="h3"
          fontSize={{ lg: '15px', md: '14px', base: '12px' }}
          lineHeight={'22px'}
          fontWeight={'400'}
          color={'#F9FAFC'}
          mt={'8px'}
          mb={'17px'}
          fontFamily={'raleway'}>
          {props.data?.paragraph}
        </Text>

        <Flex h="42px" maxW="256px">
          <Box
            bg="#112334"
            py="9px"
            px="22px"
            maxW="108px"
            w="100%"
            fontWeight="600"
            fontSize="18px"
            lineHeight="25px"
            color="#9FFFF3"
            textTransform="uppercase"
            fontFamily="dinFonts">
            Price
          </Box>
          <Box
            bg="#1D3953"
            py="9px"
            px="22px"
            maxW="148px"
            w="100%"
            fontWeight="600"
            fontSize="22px"
            lineHeight="25px"
            color="#FFFFFF"
            fontFamily="dinFonts">
            $8.50
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default RecommendedCard;
