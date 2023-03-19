import { Box, Link, Image, Flex, Text, Button } from '@chakra-ui/react';
import React from 'react';

const CollectionCard = ({ Collect }) => {
  return (
    <>
      {Collect?.map((en) => (
        <Box
          bg={'#0B1926'}
          borderRadius={'4px'}
          overflow={'hidden'}
          w={{ base: '100%', md: '49%', lg: '32.5%' }}
          px="24px"
          pt="21px"
          pb="12px"
          mb="24px">
          <Box display={'flex'} alignItems="center" justifyContent={'space-between'} pb="17px">
            <Box display={'flex'} alignItems="center">
              <Box display={'flex'} alignItems="center" mr="16px">
                <Text
                  as="span"
                  color="#A1A1A1"
                  fontSize={'18px'}
                  fontWeight="700"
                  lineHeight={'25px'}>
                  {en.Hcount}
                </Text>
                <Image
                  ml="3px"
                  src="https://cdn.enochdev.com/marketplace/assets/bhujjaheart.svg"></Image>
              </Box>
              <Box display={'flex'} alignItems="center">
                <Text
                  as="span"
                  color="#A1A1A1"
                  fontSize={'18px'}
                  fontWeight="700"
                  lineHeight={'25px'}>
                  {en.ViewCount}
                </Text>
                <Image
                  ml="6px"
                  src="https://cdn.enochdev.com/marketplace/assets/bhujjaeye.svg"></Image>
              </Box>
            </Box>
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
              textTransform="uppercase"
              color="white"
              h="26px"
              css={{
                background:
                  'linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, rgba(117, 20, 241, 1), rgba(230, 17, 183, 1)) border-box',
                border: '1px solid transparent',
                borderRadius: '50px',
                display: ''
              }}>
              {en.TotalItems}
            </Button>
          </Box>
          <Box position={'relative'}>
            <Image src={en.CardImage} borderRadius="2px" width={'100%'} objectFit={'cover'} />
            <Box position={'absolute'} top="14px" right="13px">
              <Image src="https://cdn.enochdev.com/marketplace/assets/tocollectmarker.svg" />
            </Box>
          </Box>
          <Box pt="16px">
            <Flex
              alignItems={{ md: 'center', sm: 'flex-start', base: 'center' }}
              justifyContent={'space-between'}>
              <Box>
                <Text
                  fontSize={{ xl: '16px', base: '13px' }}
                  lineHeight={'24px'}
                  fontWeight={'600'}
                  color={'#FFFFFF'}
                  textTransform={'uppercase'}
                  whiteSpace={'nowrap'}
                  overflow={'hidden'}
                  textOverflow={'ellipsis'}>
                  {en.CardTag}
                </Text>
                <Text
                  as="p"
                  color="white"
                  fontWeight={'600'}
                  fontSize="14px"
                  lineHeight={'21px'}
                  letterSpacing="0.06em"
                  textTransform={'uppercase'}>
                  Total Value :
                  <Link ml="5px" color="#81F7FF">
                    {en.Value}
                  </Link>
                </Text>
              </Box>

              <Button
                border="1px solid #4E6E94"
                borderRadius={'1px'}
                fontSize={{ xl: '12px', base: '12px' }}
                lineHeight={'150%px'}
                fontWeight={'500'}
                color={'#4E6E94'}
                letterSpacing={'0.02em'}
                textTransform={'uppercase'}
                bg="transparent"
                p="8px 24px"
                colorScheme={'transparent'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={{
                  md: 'flex-end',
                  sm: 'flex-start',
                  base: 'flex-end'
                }}
                h="34px"
                _hover={{ textDecoration: 'none', opacity: '0.8' }}>
                SEE COLLECTION
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CollectionCard;
