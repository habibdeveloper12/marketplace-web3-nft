import React from 'react';
import { Box, Img } from '@chakra-ui/react';
import '@fontsource/poppins';
import { getFileUrl } from '../../../utils/getFileUrl';

type BannerPropsType = {
  image: string;
  Tag?: string;
  render?: React.FC;
};
export const Banner = ({ image, Tag, render: Component }: BannerPropsType) => {
  return (
    <Box mb="32px" position={'relative'} pt={`${Component != undefined ? '0px' : '20px'}`}>
      <Img alt="img" w="100%" src={getFileUrl(image)}></Img>
      {Tag != undefined && (
        <Box position={'absolute'} top="32px" left="19px">
          <Box
            position={'absolute'}
            top="32px"
            left="52px"
            fontSize="14px"
            fontWeight={'600'}
            width="max-content"
            lineHeight="15px"
            fontFamily="rajdhaniFont"
            textTransform={'uppercase'}
            color="white"
            _before={{
              content:
                "url('https://cdn.enochdev.com/marketplace-assets/assets/images/lefttag.svg')",
              position: 'absolute',
              left: '-29px',
              top: '0px'
            }}
            backgroundImage="url('https://cdn.enochdev.com/marketplace-assets/assets/images/back.png')"
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPosition="right"
            p="5px 12px 5px 22px"
            borderLeft={'none'}
            bgColor="rgba(18,40,89,0.3)">
            {Tag}
          </Box>
        </Box>
      )}
      {Component != undefined && <Component />}
    </Box>
  );
};
