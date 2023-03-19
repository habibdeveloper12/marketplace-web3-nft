import React from 'react';
import { Box, Flex, Image, Button, Container } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { enochAdsData } from '../../../constants/marketplaceData';
import { getFileUrl } from '../../../utils/getFileUrl';

export const EnochAds = () => {
  return (
    <>
      <Box pb={'55px'}>
        <Container maxW={'1752px'} mx={'auto'}>
          <Flex flexWrap={'wrap'} mx={'-12px'}>
            {enochAdsData.map((ads) => {
              return (
                <Box
                  key={ads.id}
                  width={{ lg: '33.33%', sm: '50%', base: '100%' }}
                  px={'12px'}
                  mb={'19px'}>
                  <Box
                    width={'100%'}
                    minH={'100%'}
                    height={'460px'}
                    borderRadius={'12px'}
                    overflow="hidden">
                    <Image
                      src={getFileUrl(ads.src)}
                      alt="img"
                      height={'100%'}
                      width={'100%'}
                      objectFit={'cover'}
                    />
                  </Box>
                </Box>
              );
            })}
          </Flex>
          <Button
            display={'flex'}
            border={'1px solid #8787A5'}
            borderRadius={'42px'}
            bg={'rgba(23, 23, 43, 0.7)'}
            ml={'auto'}
            width={'134px'}
            height={'26px'}
            fontSize={'13px'}
            fontWeight={'600'}
            lineHeight={'19.5px'}
            letterSpacing={'0.02em'}
            color={'#8787A5'}
            py={'3px'}
            px={'13px'}
            _hover={{ bg: 'rgba(23, 23, 43, 0.7)', border: '1px solid #8787A5', opacity: '0.7' }}>
            ENOCH ADS
            <InfoOutlineIcon color={'primaryWhite'} ml={'10px'} />
          </Button>
        </Container>
      </Box>
    </>
  );
};
