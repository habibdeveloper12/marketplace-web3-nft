import React, { useState } from 'react';
import { Box, Button, Flex, Image, Text, Badge, Img } from '@chakra-ui/react';

const PeopleCard = ({ data }: any) => {
  const [isBtnColor, setIsBtnColor] = useState<boolean>(false);

  const handleBntColor = () => {
    setIsBtnColor((prev) => !prev);
  };

  return (
    <>
      <Box bg="#162E4B" borderRadius="4px" p="24px" w="100%">
        <Flex alignItems="center" justifyContent="flex-start" mb="18px">
          <Box
            h={{ xxl: '110px', xl: '70px', lg: '60px', base: '50px' }}
            w={{ xxl: '110px', xl: '70px', lg: '60px', base: '50px' }}
            borderRadius="50%"
            overflow="hidden"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="#000000">
            <Image src={data?.imgUrl} alt="img" h="100%" w="100%" position={'absolute'} />
          </Box>
          <Box ml="16px">
            <Text
              fontWeight="600"
              fontSize={{ xl: '18px', md: '16px', base: '14px' }}
              lineHeight="22px"
              color="#FFFFFF"
              mb="5px">
              {data?.userName}
            </Text>
            <Text
              fontWeight="500"
              fontSize={{ lg: '14px', md: '13px', base: '12px' }}
              lineHeight="21px"
              color="#FFFFFF">
              {data?.country}
            </Text>
          </Box>
        </Flex>
        <Text fontWeight="400" fontSize="14px" lineHeight="24px" color="#B9D5FF" mb="14px">
          {data?.cardText}
        </Text>
        <Flex>
          {!isBtnColor ? (
            <Button
              onClick={handleBntColor}
              bg="#1673FF"
              colorScheme="#1673FF"
              borderRadius="44px"
              h="40px"
              w="114px"
              p="10px"
              fontWeight="500"
              fontSize={{ lg: '14px', md: '13px', base: '12px' }}
              lineHeight="150%"
              color="#FFFFFF"
              _hover={{ opacity: '0.8' }}>
              <Image
                src="https://cdn.enochdev.com/starget-bucket/onboarding/individual-business/icon-plus.svg"
                alt="icon"
                mr="8px"
              />
              Follow
            </Button>
          ) : (
            <Button
              onClick={handleBntColor}
              bg="#15803D"
              colorScheme="#15803D"
              borderRadius="44px"
              h="40px"
              w="137px"
              p="8px"
              fontWeight="500"
              fontSize="14px"
              lineHeight="150%"
              color="#FFFFFF"
              _hover={{ opacity: '0.8' }}>
              <Image
                src="https://cdn.enochdev.com/starget-bucket/onboarding/individual-business/icon-check.svg"
                alt="icon"
                mr="8px"
              />
              Following
            </Button>
          )}
          <Button
            bg={data?.cartBg}
            colorScheme="#15803D"
            borderRadius="44px"
            h="40px"
            w="137px"
            p="8px"
            fontWeight="500"
            fontSize="14px"
            lineHeight="150%"
            color="#FFFFFF"
            display={data?.cartShow}
            alignItems={'center'}
            ml="12px">
            <Img src={data?.cartImg} mr="8px" />
            {data?.cartText}
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default PeopleCard;
