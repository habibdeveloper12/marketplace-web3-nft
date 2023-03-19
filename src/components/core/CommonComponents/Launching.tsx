import React, { useCallback } from 'react';
import { Box, Container, Flex, Text, Heading, FormControl, Button, Image } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmailValidationSchema } from '../../../validations/validationSchema';
import EnochClient from '../../../services/EnochClient';
import ToastService from '../../../services/ToastService';
import { ADD_WAITLIST } from '../../../graphql/mutation';
import { InputWrapper } from '../CommonComponents';
import { getFileUrl } from '../../../utils/getFileUrl';

export const Launching = () => {
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

  const handleOnSubmit = useCallback(async (data) => {
    const { email } = data;
    try {
      const res = await EnochClient.mutation(ADD_WAITLIST, {
        enochwaitlist: { email }
      });
      if (res) {
        ToastService.success('Submited');
        reset();
      }
    } catch (err) {
      ToastService.error(err.message);
    }
  }, []);

  return (
    <>
      <Box pb="100px">
        <Container variant="mainContainer">
          <Box
            bgGradient="linear(265.57deg, #DC7210 -9.17%, #7203FF 161.11%)"
            px={{ sm: '42px', base: '20px' }}
            py={'42px'}
            borderRadius="24px">
            <Flex
              alignItems="center"
              justifyContent="space-between"
              flexDirection={{ lg: 'row', base: 'column' }}>
              <Box width={{ xl: '25%', lg: '32%', base: '100%' }} mb={{ base: '50px', lg: '0px' }}>
                <Box
                  borderRadius="50%"
                  bg="rgba(255, 255, 255, 0.1)"
                  maxH="261px"
                  maxW="261px"
                  height="261px"
                  width="100%"
                  position="relative">
                  <Image
                    alt="rocket"
                    src={getFileUrl('marketplace-assets/assets/images/rocket.svg')}
                    position="absolute"
                    right="-20px"
                    top="-20px"
                  />
                </Box>
              </Box>

              <Box width={{ xl: '75%', lg: '68%', base: '100%' }}>
                <Text
                  color="#FFCB13"
                  fontSize={{ xl: '18px', md: '16px', base: '14px' }}
                  lineHeight="27px"
                  fontWeight="300"
                  mb="10px"
                  letterSpacing="0.03em"
                  textTransform="uppercase">
                  LAUNCHING
                </Text>
                <Heading
                  as="h2"
                  color="#F0FCFB"
                  fontSize={{ xl: '36px', md: '32px', sm: '28px', base: '23px' }}
                  lineHeight="43px"
                  fontWeight="700"
                  mb="13px"
                  letterSpacing="0.09em"
                  textTransform="uppercase">
                  September of 2023
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
                    collectibles. Our users can browse through our curated collections of trending
                    NFTs made specifically to breathe fresh air into their hyperreal 3D avatars.
                    Users can support their favourite 3D artists by visiting their creator page.
                  </Text>
                  <Heading
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
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                      <FormControl
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        p="8px"
                        border="1px solid #F9FAFC"
                        borderRadius="64px"
                        maxW="647px"
                        width="100%">
                        <InputWrapper
                          control={{ ...register('email', { required: true }) }}
                          placeholder="Email address"
                          styles={{
                            fontSize: { lg: '18px', base: '14px' },
                            px: { xl: '36px', base: '24px' },
                            py: '10px'
                          }}
                        />
                        <Button
                          type="submit"
                          height={{ lg: '58px', base: '40px' }}
                          width={{ lg: '96px', base: '64px' }}
                          bg="#F0FCFB"
                          borderRadius="48px"
                          _hover={{
                            bg: '#F0FCFB',
                            opacity: '0.9'
                          }}>
                          <ArrowForwardIcon fontSize="32px" color="orange-50" />
                        </Button>
                      </FormControl>
                    </form>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};
