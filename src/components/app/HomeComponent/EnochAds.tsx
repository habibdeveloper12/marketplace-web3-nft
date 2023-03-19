import { Box, Flex, Image, Button, Container, Tooltip } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import React from 'react';
import EnochAdsCard from './EnochAdsCard';
import { adsCard } from '../../../constants/home';

const EnochAds = () => {
  return (
    <>
      <Box pb={'80px'}>
        <Container maxW={'1752px'} mx={'auto'}>
          <Flex flexWrap={'wrap'} mx={'-12px'}>
            {adsCard.map((cardinfo) => {
              return (
                <Box
                  width={{ lg: '25%', sm: '50%', base: '100%' }}
                  px={'12px'}
                  mb={{ lg: '0px', base: '20px' }}>
                  <EnochAdsCard data={cardinfo} />
                </Box>
              );
            })}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default EnochAds;
