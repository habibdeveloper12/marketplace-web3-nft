import React from 'react';
import { Box, Flex, Button, Text, Image } from '@chakra-ui/react';

type cardInfo = {
  imgUrl: string;
  itemValue: string;
  name: string;
  likeValue: string;
  viewValue: string;
  btnText: string;
};

const DropCard = ({ imgUrl, itemValue, name, likeValue, viewValue, btnText }: cardInfo) => {
  return (
    <>
      <Box px="24px" py="18px" bg="#112334" borderRadius="4px" w="100%">
        <Flex alignItems="center" justifyContent="space-between" mb="13px">
          <Flex>
            <Flex alignItems="center" mr="16px">
              <Text
                fontWeight="700"
                fontSize="18px"
                lineHeight="25px"
                color="#A1A1A1"
                fontFamily="dinFonts">
                {likeValue}
              </Text>
              <Button bg="transparent" p="0" colorScheme="transparent">
                <Image
                  src="https://cdn.enochdev.com/marketplace-assets/heart-icon.svg"
                  alt="icon"
                />
              </Button>
            </Flex>
            <Flex alignItems="center">
              <Text
                fontWeight="700"
                fontSize="18px"
                lineHeight="25px"
                color="#A1A1A1"
                fontFamily="dinFonts">
                {viewValue}
              </Text>
              <Button bg="transparent" p="0" colorScheme="transparent">
                <Image src="https://cdn.enochdev.com/marketplace-assets/eye.svg" alt="icon" />
              </Button>
            </Flex>
          </Flex>

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
            colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(50deg, #1BB033, #1B96B0) border-box"
            color="white"
            css={{
              background:
                'linear-gradient(#08131D, #08131D) padding-box, linear-gradient(50deg, #1BB033, #1B96B0) border-box',
              border: '1px solid transparent',
              borderRadius: '50px',
              display: ''
            }}>
            {btnText}
          </Button>
        </Flex>

        <Box mb="37px" overflow="hidden" borderRadius="4px" position="relative">
          <Image src={imgUrl} alt="img" />
          <Image
            src="https://cdn.enochdev.com/marketplace/assets/viwershipthird.svg"
            alt="icon"
            position="absolute"
            right="16px"
            bottom="16px"
          />
        </Box>

        <Flex justifyContent="space-between" flexWrap="wrap">
          <Text
            fontWeight="600"
            fontSize="16px"
            lineHeight="24px"
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="#FFFFFF"
            mb="18px"
            mr="20px">
            {name}
          </Text>

          <Text
            fontWeight="600"
            fontSize="14px"
            lineHeight="21px"
            letterSpacing="0.06em"
            textTransform="uppercase"
            color="#C2D8F1"
            mb="18px">
            ITEM Value :{' '}
            <Text as="span" color="#1BB033">
              {itemValue}
            </Text>
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default DropCard;
