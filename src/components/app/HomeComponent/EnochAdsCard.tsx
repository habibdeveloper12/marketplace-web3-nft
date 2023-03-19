import React from 'react';
import { Box, Image, Tooltip, Button } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const EnochAdsCard = (props: { data: { adsImg: string } }) => {
  return (
    <>
      <Box>
        <Box width="100%" minH="100%" borderRadius="12px" overflow="hidden" mb="16px">
          <Image
            src={props.data?.adsImg}
            alt="img"
            height={'100%'}
            width={'100%'}
            objectFit={'cover'}
          />
        </Box>
        <Tooltip
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          hasArrow
          arrowSize={10}
          placement="top-end"
          maxW={'181px'}
          px={'13px'}
          py={'12px'}
          bg={'#112135'}
          mb={'6.2px'}>
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
            _hover={{
              bg: 'rgba(23, 23, 43, 0.7)',
              border: '1px solid #8787A5',
              opacity: '0.7'
            }}>
            ENOCH ADS
            <InfoOutlineIcon color={'#FFFFFF'} ml={'10px'} />
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default EnochAdsCard;
