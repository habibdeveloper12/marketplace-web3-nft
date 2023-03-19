import {
  Box,
  Heading,
  Text,
  Link,
  Container,
  Flex,
  Input,
  Button,
  Image,
  keyframes,
  usePrefersReducedMotion
} from '@chakra-ui/react';
import React, { useState } from 'react';
import ErrorImg from './ErrorImg';
import SelectColor from './SelectColor';

const fadeIn = keyframes`
  from { 
    opacity: 0;
    transform: translateX(0%);
   }
  to { 
    opacity: 1;
    transform: translateX(0%);
   }
`;
const textOP = keyframes`
from { 
  opacity: 1;
 }
to { 
  opacity: 0;
 }
`;
const Error = () => {
  const [color, setColor] = useState('#0004e7');

  const errorPageConfig = {
    fourLetter: [
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/1.png',
        top: '0%',
        right: '22%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/2.png',
        top: '14%',
        right: '37%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/3.png',
        top: '29%',
        right: '',
        left: '23%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/4.png',
        top: '45%',
        right: '',
        left: '10%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/5.png',
        top: '61%',
        right: '',
        left: '-4%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/6.png',
        top: '76%',
        right: '',
        left: '-18%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/7.png',
        top: '76%',
        right: '',
        left: '8%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/8.png',
        top: '76%',
        right: '',
        left: '34%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/9.png',
        top: '76%',
        right: '',
        left: '77%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/10.png',
        top: '14.5%',
        right: '22%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/11.png',
        top: '29%',
        right: '22%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/12.png',
        top: '44%',
        right: '22%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/13.png',
        top: '57.5%',
        right: '22%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/14.png',
        top: '71%',
        right: '22%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/15.png',
        top: '85%',
        right: '22%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/16.png',
        top: '',
        right: '22%',
        left: '',
        bottom: '-12%'
      }
    ],
    zeroLetter: [
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/1.png',
        top: '-4%',
        right: '',
        left: '38%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/2.png',
        top: '2%',
        right: '',
        left: '18%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/3.png',
        top: '2%',
        right: '18%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/4.png',
        top: '13%',
        right: '',
        left: '6%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/5.png',
        top: '14%',
        right: '5%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/6.png',
        top: '29%',
        right: '',
        left: '0%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/7.png',
        top: '29%',
        right: '0%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/8.png',
        top: '44.5%',
        right: '',
        left: '0%',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/9.png',
        top: '44.5%',
        right: '0%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/10.png',
        top: '59.5%',
        right: '',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/11.png',
        top: '59%',
        right: '0%',
        left: '',
        bottom: ''
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/12.png',
        top: '',
        right: '6%',
        left: '',
        bottom: '13%'
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/13.png',
        top: '',
        right: '',
        left: '6%',
        bottom: '13%'
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/14.png',
        top: '',
        right: '',
        left: '18%',
        bottom: '2%'
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/15.png',
        top: '',
        right: '18%',
        left: '',
        bottom: '2%'
      },
      {
        image: 'https://cdn.enochdev.com/starget-bucket/onboarding/404/16.png',
        top: '',
        right: '38%',
        left: '',
        bottom: '-4%'
      }
    ]
  };

  return (
    <>
      <Box pt={{ lg: '94px', base: '50px' }} pb="100px" textAlign="center">
        <Container maxW="1816px" px="20px" mx="auto">
          <Heading
            fontWeight="600"
            fontSize={{ lg: '36px', md: '28px', sm: '24px', base: '20px' }}
            lineHeight="125%"
            textAlign="center"
            color="#091320"
            fontFamily="body"
            mb="13px"
            transition="0.3s">
            Whoops, that page is gone.
          </Heading>

          <Text
            fontWeight="400"
            fontSize={{ lg: '18px', md: '16px', sm: '14px', base: '13px' }}
            lineHeight="150%"
            text-align="center"
            color="#8B8B8B"
            maxW={{ lg: '519px', md: '450px', base: '300px' }}
            mx="auto"
            mb={{ lg: '68px', base: '35px' }}
            transition="0.3s">
            While you’re here, feast your eyes upon these tantalizing popular designs matching the
            color <Link color={color}>{color}</Link>
          </Text>

          <Flex
            maxW={{ lg: '780px', md: '570px', sm: '400px', base: '280px' }}
            mx="auto"
            textAlign="center"
            mb={{ lg: '125px', md: '80px', base: '60px' }}
            fontWeight="700"
            fontSize={{ lg: '348.522px', md: '250px', sm: '180px', base: '120px' }}
            lineHeight="77%"
            color="#D8D9DD"
            fontFamily="inter"
            alignItems="center"
            justifyContent="space-between"
            transition="0.3s">
            <Box position="relative" transition="0.3s">
              {errorPageConfig?.fourLetter?.map((data) => (
                <Box
                  overflow="hidden"
                  zIndex="2"
                  _hover={{
                    zIndex: '3',
                    transform: 'scale(1.5) !important',
                    boxShadow: '0 5px 30px rgb(0 0 0 / 30%)'
                  }}
                  borderRadius="2px"
                  transition="0.3s"
                  animation={`${fadeIn} 2.7s linear`}
                  maxW={{ lg: '51px', md: '35px', sm: '26px', base: '18px' }}
                  position="absolute"
                  top={data?.top}
                  right={data?.right}
                  left={data?.left}
                  bottom={data?.bottom}>
                  <ErrorImg errorImgUrl={data?.image} color={color} />
                </Box>
              ))}
              <Text animation={`${textOP} 1.3s linear`} opacity="0">
                4
              </Text>
            </Box>
            <Box position="relative" ml={{ sm: '-30px', base: '-15px' }} transition="0.3s">
              <Text animation={`${textOP} 1.3s linear`} opacity="0">
                0
              </Text>
              {errorPageConfig?.zeroLetter.map((data) => (
                <Box
                  overflow="hidden"
                  zIndex="2"
                  _hover={{
                    zIndex: '3',
                    transform: 'scale(1.5) !important',
                    boxShadow: '0 5px 30px rgb(0 0 0 / 30%)'
                  }}
                  borderRadius="2px"
                  transition="0.3s"
                  animation={`${fadeIn} 2.7s linear`}
                  maxW={{ lg: '51px', md: '35px', sm: '26px', base: '18px' }}
                  position="absolute"
                  top={data?.top}
                  right={data?.right}
                  left={data?.left}
                  bottom={data?.bottom}>
                  <ErrorImg errorImgUrl={data?.image} color={color} />
                </Box>
              ))}
            </Box>
            <Box position="relative" transition="0.3s">
              {errorPageConfig?.fourLetter.map((data) => (
                <Box
                  overflow="hidden"
                  zIndex="2"
                  _hover={{
                    zIndex: '3',
                    transform: 'scale(1.5) !important',
                    boxShadow: '0 5px 30px rgb(0 0 0 / 30%)'
                  }}
                  borderRadius="2px"
                  transition="0.3s"
                  animation={`${fadeIn} 2.7s linear`}
                  maxW={{ lg: '51px', md: '35px', sm: '26px', base: '18px' }}
                  position="absolute"
                  top={data?.top}
                  right={data?.right}
                  left={data?.left}
                  bottom={data?.bottom}>
                  <ErrorImg errorImgUrl={data?.image} color={color} />
                </Box>
              ))}
              <Text animation={`${textOP} 1.3s linear`} opacity="0">
                4
              </Text>
            </Box>
          </Flex>
          <Box maxW="400px" mx="auto" px="20px" textAlign="center">
            <Box mb="30px">
              <SelectColor mx={'auto'} {...{ color, setColor }} />
            </Box>
            <Flex bg="#F4F6F9" borderRadius="54px" maxW="292px" mx="auto" overflow="hidden">
              <Button bg="transparent" colorScheme="transparent" _hover={{ opacity: '0.7' }}>
                <Image
                  src="https://cdn.enochdev.com/starget-bucket/onboarding/404/search.svg"
                  alt="icon"
                />
              </Button>
              <Input
                type="text"
                py="10px"
                px="8px"
                placeholder="Search Enoch"
                fontWeight="500"
                fontSize="14px"
                lineHeight="150%"
                display="flex"
                alignItems="center"
                color="#737373"
                border="none"
                outline="none"
                _focusVisible={{ outline: 'none' }}
              />
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Error;
