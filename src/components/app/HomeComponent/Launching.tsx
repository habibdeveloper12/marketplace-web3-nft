import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  FormControl,
  Button,
  Input,
  Image,
  Badge
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';

const Launching = () => {
  return (
    <>
      <Box pb="100px">
        <Container maxW="1752px" mx="auto">
          <Flex mx="-12px" flexWrap="wrap">
            <Box px="12px" w={{ lg: '75%', base: '100%' }} mb={{ lg: '0px', base: '24px' }}>
              <Box
                bgGradient="linear(266.65deg, #A800E3 -38.07%, #3200C0 118.61%)"
                px={{ sm: '42px', base: '20px' }}
                py={'42px'}
                borderRadius="4px"
                w="100%"
                position="relative"
                h="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  flexDirection={{ lg: 'row', base: 'column' }}>
                  <Box
                    width={{ xl: '25%', lg: '32%', base: '100%' }}
                    mb={{ base: '50px', lg: '0px' }}>
                    <Box
                      borderRadius="50%"
                      bg="rgba(255, 255, 255, 0.1)"
                      maxH="261px"
                      maxW="261px"
                      height="261px"
                      width="100%"
                      position="relative">
                      <Badge
                        bg={'#F0FCFB'}
                        opacity={'0.1'}
                        position={'absolute'}
                        top={'60px'}
                        left={'-15px'}
                        height={'41px'}
                        width={'41px'}
                        borderRadius={'50%'}
                      />
                      <Badge
                        bg={'#F0FCFB'}
                        opacity={'0.1'}
                        position={'absolute'}
                        top={'105px'}
                        left={{ sm: '-26px', base: '-15px' }}
                        height={'21px'}
                        width={'21px'}
                        borderRadius={'50%'}
                      />
                    </Box>
                    <Image
                      src="https://cdn.enochdev.com/marketplace-assets/lanchpad-img.png"
                      position="absolute"
                      left="-20px"
                      top="0px"
                      w={{ xl: '320px', sm: '350px', base: '300px' }}
                    />
                  </Box>

                  <Box width={{ xl: '75%', lg: '68%', base: '100%' }}>
                    <Text
                      color="#FFCB13"
                      fontSize={{ xl: '18px', md: '16px', base: '14px' }}
                      lineHeight="27px"
                      fontWeight="500"
                      mb="10px"
                      letterSpacing="0.03em"
                      textTransform="uppercase">
                      LAUNCHING
                    </Text>
                    <Heading
                      fontFamily={'body'}
                      as="h2"
                      color="#F0FCFB"
                      fontSize={{
                        xl: '36px',
                        md: '32px',
                        sm: '28px',
                        base: '23px'
                      }}
                      lineHeight="43px"
                      fontWeight="700"
                      mb="13px"
                      letterSpacing="0.09em"
                      textTransform="uppercase">
                      October of 2023
                    </Heading>
                    <Box>
                      <Text
                        color="#F9FAFC"
                        fontSize={{ md: '16px', base: '14px' }}
                        lineHeight={{ md: '30px', base: '24px' }}
                        fontWeight="400"
                        mb="19px"
                        letterSpacing="0.03em"
                        maxW="917px"
                        width="100%">
                        We are hard at work in building a 3D marketplace for the trading of digital
                        collectibles. Our users can browse through our curated collections of
                        trending NFTs made specifically to breathe fresh air into their hyperreal 3D
                        avatars. Users can support their favourite 3D artists by visiting their
                        creator page.
                      </Text>
                      <Heading
                        fontFamily={'body'}
                        as="h4"
                        color="#F0FCFB"
                        fontSize={{ xl: '22px', md: '20px', base: '18px' }}
                        lineHeight="25px"
                        fontWeight="700"
                        mb="20px"
                        letterSpacing="0.02em"
                        textTransform="uppercase">
                        Join waitlist
                      </Heading>
                      <Box>
                        <FormControl
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          p="8px"
                          border="1px solid #F9FAFC"
                          borderRadius="4px"
                          maxW="647px"
                          width="100%">
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
                            px={{ xl: '24px', base: '16px' }}
                            py="10px"
                            _placeholder={{
                              color: '#FFFFFF',
                              textTransform: 'capitalize'
                            }}
                          />
                          <Button
                            height={{ lg: '50px', base: '40px' }}
                            width={{ lg: '50px', base: '40px' }}
                            bg="#F0FCFB"
                            borderRadius="50%"
                            _hover={{
                              bg: '#F0FCFB',
                              opacity: '0.9'
                            }}>
                            <ArrowForwardIcon fontSize="32px" color="#FF9900" />
                          </Button>
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box px="12px" w={{ xl: '25%', sm: '50%', base: '100%' }}>
              <Box
                bg="#263545"
                minH={{ lg: '100%', base: '250px' }}
                borderRadius="4px"
                overflow="hidden"
                backgroundImage={"url(https://cdn.enochdev.com/marketplace-assets/lanchpad-ads-img.png)"}
                backgroundSize={"cover"}>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Launching;
