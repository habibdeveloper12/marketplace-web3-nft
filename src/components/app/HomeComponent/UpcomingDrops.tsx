import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  Button,
  Image
} from '@chakra-ui/react';
import { upcomingDropsData } from '../../../constants/marketplaceData';
import { getFileUrl } from '../../../utils/getFileUrl';

const UpcomingDrops = () => {
  return (
    <>
      <Box>
        <Container maxW={'1752px'} mx={'auto'}>
          <Flex flexWrap={'wrap'}>
            <Box width={{ md: '50%', base: '100%' }} pr={{ lg: '24px', md: '12px', base: '0px' }}>
              <Box>
                <Text
                  fontSize={{
                    lg: '18px',
                    md: '16px',
                    sm: '14px',
                    base: '11px'
                  }}
                  lineHeight={'27px'}
                  fontWeight={'300'}
                  letterSpacing={'0.03em'}
                  textTransform={'uppercase'}
                  color={'#81F7FF'}>
                  Watch out For
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
                  Upcoming Drops
                </Heading>
              </Box>

              <Box maxW={'602px'} width={'100%'}>
                <Text
                  color={'#F9FAFC'}
                  fontSize={{
                    xl: '18px',
                    lg: '14px',
                    md: '12px',
                    base: '16px'
                  }}
                  lineHeight={{
                    xl: '36px',
                    lg: '24px',
                    md: '20px',
                    base: '26px'
                  }}
                  fontWeight={'400'}
                  fontFamily={'raleway'}
                  mb={'20px'}
                  mt={'16px'}>
                  The future of avatar customization is here! These upcoming drops are NFTs that
                  will be purchasable on the marketplace soon. These are exciting times for 3D
                  artists and digital fashion enthusiasts as we are in the midst of a major shift in
                  how we buy and sell clothes and accessories. Any item you purchase from the
                  marketplace can be resold in your own storefront which can be customized to fit
                  your needs. Share your love of 3D art and fashion with others- and make some money
                  while you're at it!
                </Text>
                <Button
                  color={'#F9FAFC'}
                  fontSize={'15px'}
                  lineHeight={'22px'}
                  fontWeight={'600'}
                  textTransform={'uppercase'}
                  letterSpacing={'0.2em'}
                  height={'48px'}
                  width={'154px'}
                  py={'13px'}
                  px={'30px'}
                  bg={'transparent'}
                  border={'1px solid #FFFFFF'}
                  borderRadius={'2px'}
                  backdropFilter={'blur(7px)'}
                  _hover={{ bg: 'transparent' }}>
                  SEE DETAILS
                </Button>
              </Box>
            </Box>

            <Box
              width={{ md: '50%', base: '100%' }}
              pl={{ lg: '24px', md: '12px', base: '0px' }}
              mt={{ md: '0px', sm: '40px', base: '30px' }}>
              <Grid
                h="auto"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={'24px'}>
                {upcomingDropsData.map(({ id, imgSrc, rowSpan, colSpan }) => {
                  return (
                    <GridItem
                      key={id}
                      rowSpan={rowSpan}
                      colSpan={colSpan}
                      bg="#1F1F33"
                      p={{ sm: '16px', base: '8px' }}
                      position={'relative'}
                      border={'1px solid #99BBE2'}
                      borderRadius={'12px'}>
                      <Image src={getFileUrl(imgSrc)} alt="img" height={'100%'} width={'100%'} />
                      <Image
                        src={getFileUrl('marketplace-assets/assets/images/3d-dark.svg')}
                        alt="img"
                        position={'absolute'}
                        right={{ sm: '26px', base: '10px' }}
                        bottom={{ sm: '24px', base: '10px' }}
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default UpcomingDrops;
