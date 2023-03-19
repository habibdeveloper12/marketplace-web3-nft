import { Box, Container, Flex, Heading, Text, Image, Link } from '@chakra-ui/react';
import React, {useCallback} from 'react';
import TrendImg from './TrendImg';
import { TrendImageUrl } from '../../../constants/home';
import { useRouter } from 'next/router';

const FollowTrend = () => {
  const router = useRouter();
  const handleNavigation = useCallback(() => {
    router.push('/collections');
  }, []);

  return (
    <>
      <Box pt="114px" pb="80px" bg="#0B1926">
        <Container maxW={'1752px'} mx={'auto'}>
          <Box>
            <Text
              fontSize={{ lg: '18px', md: '16px', sm: '14px', base: '11px' }}
              lineHeight={'27px'}
              fontWeight={'300'}
              letterSpacing={'0.03em'}
              textTransform={'uppercase'}
              color="#FFDF6C">
              Follow the trend
            </Text>
            <Heading
              fontFamily={'body'}
              fontSize={{
                xl: '36px',
                lg: '32px',
                md: '28px',
                sm: '24px',
                base: '22px'
              }}
              lineHeight={{
                xl: '54px',
                lg: '45px',
                md: '40px',
                sm: '36px',
                base: '32px'
              }}
              fontWeight={'600'}
              textTransform={'uppercase'}
              color={'#F0FCFB'}>
              Top Collections of the Week
            </Heading>
          </Box>

          <Flex
            justifyContent={'space-between'}
            mt={{ md: '40px', sm: '30px', base: '20px' }}
            alignItems={'center'}
            flexWrap={'wrap'}>
            <Box width={{ lg: '50%', base: '100%' }} pr={{ lg: '60px', md: '40px', base: '0px' }}>
              <Flex flexWrap={'wrap'} mx={'-8px'}>
                {TrendImageUrl.map((TrendImage) => {
                  return (
                    <Box px={'8px'} py={'8px'} width={'50%'}>
                      <TrendImg data={TrendImage} />
                    </Box>
                  );
                })}
              </Flex>
            </Box>
            <Box width={{ lg: '50%', base: '100%' }} mt={{ md: '0px', sm: '40px', base: '25px' }}>
              <Heading
                fontFamily={'body'}
                as="h3"
                fontSize={{ xl: '32px', lg: '28px', base: '24px' }}
                lineHeight={{ xl: '48px', base: '36px' }}
                fontWeight={'700'}
                mb={'20px'}
                color={'#FFFFFF'}
                textTransform={'uppercase'}>
                FEATURED COLLECTIONS
              </Heading>
              <Text
                fontSize={{ xl: '22px', lg: '20px', base: '16px' }}
                lineHeight={{ xl: '36px', lg: '30px', base: '26px' }}
                fontWeight={'500'}
                mb={'15px'}
                color={'#F9FAFC'}
                fontFamily={'raleway'}
                maxW="776px"
                w="100%">
                Featured collections on the Enoch Marketplace showcases the best of the best 3D
                outfits and accessories. Support your favorite collection and take the final step to
                become an Enochian
              </Text>

              <Link
                fontSize={{ md: '15px', sm: '13px', base: '14px' }}
                lineHeight={'25px'}
                fontWeight={'600'}
                color={'#1DB4F4'}
                letterSpacing={'0.02em'}
                textTransform={'uppercase'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                _hover={{ textDecoration: 'none', opacity: '0.8' }}>
                GO TO COLLECTIONS
                <Image
                  src="https://cdn.enochdev.com/marketplace-assets/assets/images/arrow-forward.svg"
                  alt="icon"
                  ml={'12px'}
                />
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default FollowTrend;
