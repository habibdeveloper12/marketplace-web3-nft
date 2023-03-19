import React, { useCallback } from 'react';
import {
  Box,
  Container,
  Flex,
  Link,
  Image,
  Text,
  Heading,
  Badge,
  FormControl,
  Button
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FooterBottom from './FooterBottom';
import { InputWrapper } from '../CommonComponents';
import { EmailValidationSchema } from '../../../validations/validationSchema';
import EnochClient from '../../../services/EnochClient';
import ToastService from '../../../services/ToastService';
import { ADD_NEWSLETTER } from '../../../graphql/mutation';
import { footerMarketplaceLinkdata } from '../../../constants/footer';
import { getFileUrl } from '../../../utils/getFileUrl';

const Footer = () => {
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
      const res = await EnochClient.mutation(ADD_NEWSLETTER, {
        enochnewsletter: { email }
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
      <Box
        bg={'#0B1D34'}
        pt={{ lg: '100px', md: '80px', sm: '60px', base: '50px' }}
        position={'relative'}
        zIndex={'3'}
        overflow="hidden">
        <Image
          src={getFileUrl('marketplace-assets/assets/images/footer-light.png')}
          alt="img"
          position={'absolute'}
          bottom={'0px'}
          right={'0px'}
          zIndex={'0'}
          height={'100%'}
          maxH={'100%'}
        />
        <Container maxW={'1752px'} mx={'auto'} position={'relative'} zIndex={'1'}>
          <Flex pb={{ lg: '84px', sm: '65px', base: '50px' }} flexWrap="wrap">
            <Box
              width={{ md: '35%', base: '100%' }}
              pr={'20px'}
              mb={{ md: '0px', base: '30px' }}
              textAlign={{ sm: 'left', base: 'center' }}>
              <Link
                href="#"
                minW={'150px'}
                maxW={{ base: '150px', md: '190px' }}
                m={{ sm: '0', base: 'auto' }}
                mr={{ sm: 'auto' }}
                display={'flex'}>
                <Image
                  src={getFileUrl('marketplace-assets/assets/images/marketplace-footer-logo.svg')}
                  alt="img"
                />
              </Link>
              <Text
                color={'#F9FAFC'}
                fontSize={{ xl: '20px', lg: '18px', md: '16px', base: '14px' }}
                fontWeight={'400'}
                lineHeight={{
                  xl: '36px',
                  lg: '28px',
                  md: '26px',
                  base: '24px'
                }}
                letterSpacing={'0.02em'}
                maxW={'423px'}
                pt={'11px'}>
                Explore our curated 3D marketplace filled with NFTs and accessories to customize
                your 3D avatar
              </Text>
            </Box>

            <Box
              width={{ md: '20%', sm: '50%', base: '100%' }}
              mb={{ md: '0px', base: '30px' }}
              textAlign={{ sm: 'left', base: 'center' }}>
              <Heading variant={'headingSecondary'}>
                Marketplace
                <Badge
                  position={'absolute'}
                  bottom={'-5px'}
                  left={{ sm: '0px', base: 'auto' }}
                  right={{ base: 'auto' }}
                  bgGradient={'linear-gradient(97.3deg, #A363FF 1000%, #6A1DFF 100%)'}
                  height={'2px'}
                  width={'50px'}></Badge>
              </Heading>

              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={{ sm: 'flex-start', base: 'center' }}
                justifyContent={'flex-start'}
                gap={'12px'}
                fontSize={{ xl: '18px', lg: '16px', base: '14px' }}
                lineHeight={{ lg: '29px', base: '24px' }}
                fontWeight={'400'}
                color={'#F9FAFC'}>
                {footerMarketplaceLinkdata.map(({ link, path, id }) => {
                  return (
                    <Link key={id} href={path} _hover={{ textDecoration: 'none', opacity: '0.8' }}>
                      {link}
                    </Link>
                  );
                })}
              </Box>
            </Box>

            <Box
              width={{ md: '20%', sm: '50%', base: '100%' }}
              mb={{ md: '0px', base: '30px' }}
              textAlign={{ sm: 'left', base: 'center' }}>
              <Heading variant={'headingSecondary'}>
                Company
                <Badge
                  position={'absolute'}
                  bottom={'-5px'}
                  left={{ sm: '0px', base: 'auto' }}
                  right={{ base: 'auto' }}
                  bgGradient={'linear-gradient(97.3deg, #A363FF 1000%, #6A1DFF 100%)'}
                  height={'2px'}
                  width={'50px'}></Badge>
              </Heading>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={{ sm: 'flex-start', base: 'center' }}
                justifyContent={'flex-start'}
                gap={'12px'}
                fontSize={{ xl: '18px', lg: '16px', base: '14px' }}
                lineHeight={{ lg: '29px', base: '24px' }}
                fontWeight={'400'}
                color={'#F9FAFC'}>
                {['Team', 'FAQs', 'Contact us'].map((item, key) => {
                  return (
                    <Link key={key} href="#" _hover={{ textDecoration: 'none', opacity: '0.8' }}>
                      {item}
                    </Link>
                  );
                })}
              </Box>
            </Box>

            <Box
              width={{ md: '25%', base: '100%' }}
              mb={{ md: '0px', base: '30px' }}
              textAlign={{ sm: 'left', base: 'center' }}>
              <Heading variant={'headingSecondary'}>
                Join Newsletter
                <Badge
                  position={'absolute'}
                  bottom={'-5px'}
                  left={{ sm: '0px', base: 'auto' }}
                  right={{ base: 'auto' }}
                  bgGradient={'linear-gradient(97.3deg, #A363FF 1000%, #6A1DFF 100%)'}
                  height={'2px'}
                  width={'50px'}></Badge>
              </Heading>
              <Box>
                <Text
                  fontSize={{ lg: '16px', base: '14px' }}
                  lineHeight={{ lg: '29px', base: '24px' }}
                  fontWeight={'400'}
                  color={'#F9FAFC'}
                  mb={{ lg: '30px', base: '20px' }}
                  textTransform="capitalize"
                  maxW={{ sm: '300px', base: '100%' }}>
                  signup for our newsletter to get the latest news in your inbox.
                </Text>
                <Box>
                  <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <FormControl
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p="5px"
                      border="1px solid #F9FAFC"
                      borderRadius="64px"
                      maxW={{ sm: '300px', base: '100%' }}
                      width="100%">
                      <InputWrapper
                        control={{ ...register('email', { required: true }) }}
                        placeholder="Email address"
                        styles={{
                          fontSize: { lg: '15px', base: '14px' },
                          px: { xl: '30px', base: '24px' },
                          py: '5px'
                        }}
                      />
                      <Button
                        type="submit"
                        minH={'44px'}
                        minW={'44px'}
                        bgGradient={'linear(97.3deg, blue-100 0%, blue-150 100%)'}
                        borderRadius="48px"
                        _hover={{
                          bgGradient: 'linear(97.3deg, blue-150 0%, blue-100 100%)',
                          opacity: '0.9'
                        }}>
                        <ArrowForwardIcon fontSize="22px" color="primaryWhite" />
                      </Button>
                    </FormControl>
                  </form>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Container>
        <FooterBottom />
      </Box>
    </>
  );
};

export default Footer;
