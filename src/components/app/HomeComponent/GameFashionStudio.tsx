import { Box, Container, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import StudioCard from './StudioCard';
import { Image } from '@chakra-ui/react';
import { studioCardInfo } from '../../../constants/home';

const GameFashionStudio = () => {
  return (
    <>
      <Box py={'100px'}>
        <Container maxW={'1752px'} mx={'auto'}>
          <Box
            bgGradient={'linear(180deg, #667AE4 0%, #6B1AEF 100%)'}
            p={'1px'}
            borderRadius={'24px'}>
            <Box
              bgGradient={'linear(79.35deg, #112135 33.01%, #223C5D 86.54%)'}
              px={'40px'}
              pt={'56px'}
              pb={'36px'}
              color="#FFFFFF"
              borderRadius={'24px'}
              position={'relative'}
              zIndex={'2'}>
              <Image
                src="https://enochdev.com/marketplace/landing-page/light-img.png"
                alt="img"
                position={'absolute'}
                left={'16%'}
                top={'10%'}
                filter={'blur(5px) brightness(2)'}
                opacity={'0.35'}
                zIndex={'0'}
              />
              <Heading
                fontFamily={'body'}
                as="h2"
                fontSize={{ lg: '32px', md: '28px', sm: '24px', base: '20px' }}
                lineHeight={{ lg: '48px', md: '38px', sm: '36px', base: '32px' }}
                fontWeight={'700'}
                color={'#FFFFFF'}
                mb={'39px'}
                textTransform={'uppercase'}
                position={'relative'}
                zIndex={'1'}>
                Enoch GAME & FASHION studio
              </Heading>
              <Flex
                flexWrap={'wrap'}
                justifyContent={'space-between'}
                mx={{ xl: '0px', base: '-12px' }}
                position={'relative'}
                zIndex={'1'}>
                {studioCardInfo.map((studioCardImg) => {
                  return (
                    <Box
                      width={{ md: '25%', base: '50%' }}
                      mb={'24px'}
                      px={{ xl: '0px', base: '12px' }}
                      textAlign={'center'}>
                      <StudioCard data={studioCardImg} />
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default GameFashionStudio;
