import {
  Button,
  Box,
  Container,
  Flex,
  Image,
  Link,
  Text,
  Input,
  Heading,
  FormControl
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';

const LandingPageBanner = () => {
  return (
    <>
      <Box pt="52px" pb={{ lg: '108px', md: '60px', base: '50px' }}>
        <Container maxW="1752px" mx="auto">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ base: 'column', lg: 'row' }}
            mx="-15px">
            {/*-- BAnner Text --*/}
            <Box width={{ base: '100%', lg: '40%' }} pb={{ base: '50px', lg: '0px' }} px="15px">
              <Box maxW="670px" position="relative">
                <Image
                  src="https://cdn.enochdev.com/marketplace-assets/arrow-line-big.png"
                  alt="icon"
                  position="absolute"
                  right={{ lg: '-210px', base: 'auto' }}
                  top={{ lg: '50px', base: 'auto' }}
                  bottom={{ lg: 'auto', base: '-150px' }}
                  left={{ lg: 'auto', base: '-40px' }}
                />
                <Box maxW="max-content">
                  <Heading
                    fontFamily={'body'}
                    as="h2"
                    textTransform="uppercase"
                    color="#E3C7ED"
                    fontSize={{
                      xl: '32px',
                      md: '24px',
                      base: '20px'
                    }}
                    fontWeight="700"
                    fontStyle="italic"
                    mb="20px">
                    Powering a Headless
                  </Heading>
                  {/* <Heading fontFamily={"body"}
                  as="h3"
                  textTransform="uppercase"
                  color="#FFFFFF"
                  fontSize={{
                    xl: "64px",
                    md: "40px",
                    sm: "36px",
                    base: "32px",
                  }}
                  lineHeight={{ xl: "78px", sm: "48px", base: "40px" }}
                  fontWeight="700"
                  fontStyle="italic"
                  mb="27px"
                >
                  3d MarketPlace
                </Heading> */}
                  <Box mb="27px">
                    <Image
                      src="https://cdn.enochdev.com/marketplace-assets/3d-marketplace.svg"
                      alt="3d marketplace"
                    />
                  </Box>
                </Box>
                <Box w="100%" pb="17px" position="relative">
                  <Text
                    maxW="654px"
                    color="#F9FAFC"
                    fontSize={{ base: '14px', lg: '18px', xl: '20px' }}
                    fontWeight="400"
                    lineHeight={{ base: '24px', lg: '30px' }}
                    pb="24px"
                    pr={{ base: '0px', lg: '20px' }}>
                    Enoch marketplace is the first social-commerce driven marketplace for the
                    trading of digital goods (NFTs). Explore an ever expanding universe of 3D avatar
                    accessories, fashion and game assets
                  </Text>
                  <Flex gap="24px" alignItems="flex-start" position="relative" zIndex="2">
                    <Link
                      href="#"
                      bgGradient="linear(97.3deg, #1386F0 0%, #1673FF 100%)"
                      textTransform="uppercase"
                      color="#FFFFFF"
                      fontSize={{ xl: '18px', base: '16px' }}
                      fontWeight="600"
                      lineHeight="28px"
                      height={{ base: '45px', lg: '51px' }}
                      width="139px"
                      borderRadius="2px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      letterSpacing="0.03em"
                      _hover={{
                        bg: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                        opacity: '0.9'
                      }}>
                      explore
                    </Link>
                    <Button
                      border="1px solid #FFFFFF"
                      borderRadius="2px"
                      height={{ base: '45px', lg: '51px' }}
                      width="189px"
                      textTransform="uppercase"
                      color="#FFFFFF"
                      fontSize={{ xl: '18px', base: '16px' }}
                      fontWeight="600"
                      lineHeight="28px"
                      bg="transparent"
                      letterSpacing="0.02em"
                      _hover={{ bg: 'transparent', opacity: '0.9' }}>
                      list Your nft
                    </Button>
                  </Flex>
                </Box>
                <Box pt={{ xl: '20px', lg: '10px', base: '5px' }} position="relative">
                  <Box
                    w="167px"
                    position={{ lg: 'absolute', base: 'relative' }}
                    ml={{ lg: '0px', base: 'auto' }}
                    right={{ xl: '-20px', lg: '-80px' }}
                    top={{ xl: '-45px', lg: '-20px' }}>
                    <Box
                      position="relative"
                      maxW="167px"
                      textAlign="center"
                      mb={{ lg: '0px', base: '30px' }}>
                      <Image
                        src="https://cdn.enochdev.com/marketplace-assets/arrow-line-small.png"
                        alt="icon"
                        position="absolute"
                        top="-33px"
                        left="-65px"
                      />
                      <Flex mb="10px" justifyContent="center" alignItems="center">
                        <Text
                          fontWeight="700"
                          fontSize="24px"
                          lineHeight="31px"
                          color="#FFFFFF"
                          pr="5px"
                          borderRight="1px solid #FFFFFF"
                          fontFamily="dinFonts">
                          4.6
                        </Text>
                        <Flex ml="7.32px">
                          <Image
                            src="https://cdn.enochdev.com/marketplace-assets/star.svg"
                            alt="icon"
                            mr="5.5px"
                            h="18px"
                            w="18px"
                          />
                          <Image
                            src="https://cdn.enochdev.com/marketplace-assets/star.svg"
                            alt="icon"
                            mr="5.5px"
                            h="18px"
                            w="18px"
                          />
                          <Image
                            src="https://cdn.enochdev.com/marketplace-assets/star.svg"
                            alt="icon"
                            mr="5.5px"
                            h="18px"
                            w="18px"
                          />
                          <Image
                            src="https://cdn.enochdev.com/marketplace-assets/star.svg"
                            alt="icon"
                            mr="5.5px"
                            h="18px"
                            w="18px"
                          />
                          <Image
                            src="https://cdn.enochdev.com/marketplace-assets/star.svg"
                            alt="icon"
                            mr="5.5px"
                            h="18px"
                            w="18px"
                          />
                        </Flex>
                      </Flex>
                      <Text
                        fontWeight="400"
                        fontSize="16px"
                        lineHeight="20px"
                        color="#E4DCDC"
                        fontFamily="dinFonts">
                        (11.6k Total Review)
                      </Text>
                    </Box>
                  </Box>
                  <Heading
                    fontFamily={'body'}
                    as="h4"
                    textTransform="uppercase"
                    color="#F0FCFB"
                    fontSize={{ base: '16px', xl: '20px' }}
                    lineHeight="38px"
                    fontWeight="700"
                    letterSpacing="0.09em"
                    mb="8px">
                    Subscribe to our WHITELIST
                  </Heading>
                  <Box mb="16px">
                    <FormControl
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p="8px"
                      border="1px solid #56626E"
                      borderRadius="4px">
                      <Input
                        type="email"
                        placeholder="Email address"
                        border="none"
                        outline="none"
                        _focusVisible={{ outline: 'none' }}
                        fontSize={{ lg: '18px', base: '14px' }}
                        lineHeight="24px"
                        fontWeight="400"
                        color="#FFFFFF"
                        px={{ xl: '24px', base: '24px' }}
                        py="10px"
                        _placeholder={{
                          color: '#FFFFFF',
                          textTransform: 'capitalize'
                        }}
                      />
                      <Button
                        height={{ lg: '50px', base: '40px' }}
                        width={{ lg: '50px', base: '40px' }}
                        bg="#14283D"
                        borderRadius="50%"
                        _hover={{
                          bg: 'linear(97.3deg, #1386F0 0%, #1673FF 100%)',
                          opacity: '0.9'
                        }}>
                        <ArrowForwardIcon fontSize={{ lg: '32px', base: '24px' }} color="#ffffff" />
                      </Button>
                    </FormControl>
                  </Box>
                  <Text
                    color="#99BBE2"
                    fontSize="13px"
                    lineHeight="23px"
                    fontWeight="400"
                    letterSpacing="0.5px"
                    mb="0px">
                    Gain access to exclusive releases, NFT drops, think pieces, trend opportunity,
                    guides and more.
                  </Text>
                </Box>
              </Box>
            </Box>

            {/*-- BAnner Images --*/}
            <Box w={{ base: '100%', lg: '55%' }} px="15px" pt="70px">
              <Flex mx="-12px">
                <Box w="55%" px="12px">
                  <Box
                    width="75%"
                    ml="auto"
                    minH="45%"
                    mb="6%"
                    overflow="hidden"
                    position="relative"
                    borderRadius="8px"
                    bgGradient="linear(180deg, #667AE4 0%, #6B1AEF 100%)">
                    <Image
                      src="https://cdn.enochdev.com/marketplace-assets/landing-banner-img1.png"
                      alt="img"
                      width="100%"
                      h="100%"
                      position="absolute"
                    />
                  </Box>

                  <Box
                    width="100%"
                    ml="auto"
                    borderRadius="8px"
                    minH="50%"
                    overflow="hidden"
                    position="relative"
                    bgGradient="linear(180deg, #667AE4 0%, #6B1AEF 100%)">
                    <Image
                      src="https://cdn.enochdev.com/marketplace-assets/landing-banner-img2.png"
                      alt="img"
                      width="100%"
                      h="100%"
                      position="absolute"
                    />
                  </Box>
                </Box>

                <Box w="45%" px="12px">
                  <Box
                    width="100%"
                    minH="100%"
                    overflow="hidden"
                    position="relative"
                    borderRadius="8px"
                    bgGradient="linear(180deg, #667AE4 0%, #6B1AEF 100%)">
                    <Image
                      src="https://cdn.enochdev.com/marketplace-assets/landing-banner-img3.png"
                      alt="img"
                      width="100%"
                      h="100%"
                    />
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default LandingPageBanner;
