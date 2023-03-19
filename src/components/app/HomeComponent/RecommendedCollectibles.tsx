import { Box, Container, Flex, Link, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import RecommendedCard from './RecommendedCard';
import { Recommended } from '../../../constants/home';

const RecommendedCollectibles = () => {
  return (
    <>
      <Box pb={'76px'}>
        <Container maxW="1752px" mx="auto">
          <Box>
            <Text
              fontSize={{ lg: '18px', md: '16px', sm: '14px', base: '11px' }}
              lineHeight={'27px'}
              fontWeight={'300'}
              textTransform="uppercase"
              letterSpacing="0.3em"
              color="#FFDF6C">
              Browse by enoch’s recommendation
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
              Recommended Collectibles for You
            </Heading>
          </Box>
          <Box pt={'40px'}>
            <Flex flexWrap={'wrap'} mx={'-12px'}>
              {Recommended.map((RecommendedCardInfo) => {
                return (
                  <Box
                    width={{ xl: '25%', lg: '33.33%', sm: '50%', base: '100%' }}
                    px="12px"
                    mb="24px">
                    <RecommendedCard data={RecommendedCardInfo} />
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RecommendedCollectibles;
