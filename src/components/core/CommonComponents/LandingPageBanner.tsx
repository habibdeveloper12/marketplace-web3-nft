import React, { useCallback } from 'react';
import { Button, Box, Container, Flex, Image, Text, Heading, FormControl } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import EnochClient from '../../../services/EnochClient';
import { ADD_WHITELIST } from '../../../graphql/mutation';
import { InputWrapper } from '../../core/CommonComponents';
import ToastService from '../../../services/ToastService';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { EmailValidationSchema } from '../../../validations/validationSchema';
import { getFileUrl } from "../../../utils/getFileUrl";

export const LandingPageBanner = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(EmailValidationSchema),
    defaultValues: {
      email: ''
    }
  });
  const router = useRouter();

  const handleOnSubmit = useCallback(async (data) => {
    const { email } = data;
    try {
      const res = await EnochClient.mutation(ADD_WHITELIST, {
        enochwhitelist: { email }
      });
      if (res) {
        ToastService.success('Submited');
        reset();
      }
    } catch (err) {
      ToastService.error(err.message);
    }
  }, []);
  
  const handleNavigation = useCallback(() => {
    router.push("/products")
  },[])
  return (
    <>
      <Box pt="52px" pb="88px">
        <Container variant="mainContainer">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flexDirection={{ base: 'column', md: 'row' }}>
            {/*-- Banner Text --*/}
            <Box width={{ base: '100%', md: '52%' }} pb={{ base: '50px', lg: '0px' }}>
              <Box
                borderBottom="1px dashed #1CADFF"
                pb={{ base: '7px', xl: '16px' }}
                maxW="max-content">
                <Heading
                  as="h2"
                  textTransform="uppercase"
                  color="#D9D9D9"
                  fontSize={{
                    xl: '40px',
                    md: '25px',
                    sm: '22px',
                    base: '20px'
                  }}
                  fontWeight="700"
                  fontStyle="italic"
                  my={{ base: '0px', md: '10px' }}>
                  Powering a Headless
                </Heading>
                <Heading
                  as="h3"
                  textTransform="uppercase"
                  color="primaryWhite"
                  fontSize={{
                    xl: '64px',
                    md: '40px',
                    sm: '36px',
                    base: '32px'
                  }}
                  lineHeight={{ xl: '78px', sm: '48px', base: '40px' }}
                  fontWeight="700"
                  fontStyle="italic">
                  3d MarketPlace
                </Heading>
              </Box>
              <Box width="100%" pb="32px" borderBottom="1px solid #F18B14" position="relative">
                <Text
                  maxW={{ base: '100%', lg: '566px' }}
                  color="#D9D9D9"
                  fontSize={{ base: '14px', lg: '18px' }}
                  fontWeight="400"
                  lineHeight={{ base: '24px', lg: '30px' }}
                  py="20px"
                  pr={{ base: '0px', lg: '20px' }}>
                  Enoch marketplace is the first social-commerce driven marketplace for the trading
                  of digital goods (NFTs). Explore an ever expanding universe of 3D avatar
                  accessories, fashion and game assets
                </Text>
                <Flex gap="24px" alignItems="flex-start" position="relative" zIndex="2">
                  <Button variant="primaryButton" onClick={handleNavigation}>explore</Button>
                  <Button variant="oultineButton">list Your nft</Button>
                </Flex>
                <Box
                  position="absolute"
                  right={{ lg: '-40px', xl: '0px', md: '-90px', sm: '0px' }}
                  bottom="0px"
                  zIndex="1"
                  display={{ base: 'none', sm: 'block' }}>
                  <Image src={getFileUrl("marketplace-assets/assets/images/banner-vecto-icon.svg")} alt="img" />
                </Box>
              </Box>
              <Box pt={{ xl: '20px', lg: '10px', base: '5px' }}>
                <Heading
                  as="h4"
                  textTransform="uppercase"
                  color="#F0FCFB"
                  fontSize={{ base: '16px', xl: '20px' }}
                  lineHeight="38px"
                  fontWeight="700"
                  letterSpacing="0.09em"
                  mb="4px">
                  Subscribe to our WHITELIST
                </Heading>
                <Text
                  color="#99BBE2"
                  fontSize="13px"
                  lineHeight="23px"
                  fontWeight="400"
                  letterSpacing="0.5px"
                  mb="13px">
                  Gain access to exclusive releases, NFT drops, think pieces, trend opportunity,
                  guides and more.
                </Text>
                <Box>
                  <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <FormControl
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p="8px"
                      border="1px solid #F9FAFC"
                      borderRadius="64px">
                      <InputWrapper
                        control={{ ...register('email', { required: true }) }}
                        placeholder="Email address"
                        styles={{
                          fontSize: { lg: '18px', base: '14px' },
                          px: { xl: '36px', base: '24px' },
                          py: '10px'
                        }}
                      />
                      <Button type="submit" variant="primaryArrowButton">
                        <ArrowForwardIcon
                          fontSize={{ lg: '32px', base: '24px' }}
                          color="primaryWhite"
                        />
                      </Button>
                    </FormControl>
                  </form>
                </Box>
              </Box>
            </Box>

            {/*-- BAnner Images --*/}
            <Box width={{ base: '100%', md: '48%' }}>
              <Flex>
                <Box
                  width="50%"
                  pr="12px"
                  pb="54px"
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="flex-start"
                  flexDirection="column">
                  <Box
                    width="100%"
                    mb="21px"
                    borderRadius="8px"
                    bgGradient="linear(180deg, #667AE4 0%, #6B1AEF 100%)">
                    <Image src={getFileUrl("marketplace-assets/assets/images/banner-img1.png")} alt="img" width="100%" />
                  </Box>
                  <Box
                    width="85%"
                    ml="auto"
                    borderRadius="8px"
                    bgGradient="linear(180deg, #667AE4 0%, #6B1AEF 100%)">
                    <Image src={getFileUrl("marketplace-assets/assets/images/banner-img2.png")} alt="img" width="100%" />
                  </Box>
                </Box>
                <Box
                  width="50%"
                  pl="12px"
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                  flexDirection="column">
                  <Box
                    width="100%"
                    borderRadius="8px"
                    bgGradient="linear(180deg, #667AE4 0%, #6B1AEF 100%)">
                    <Image src={getFileUrl("marketplace-assets/assets/images/banner-img3.png")} alt="img" width="100%" />
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
