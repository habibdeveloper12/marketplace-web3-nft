import { Box, Image, Badge } from '@chakra-ui/react';
import React from 'react';

const ErrorImg = ({ errorImgUrl, color }: any) => {
  return (
    <>
      <Box position="relative" transition="0.5s" cursor="pointer">
        <Badge
          position="absolute"
          bg={color}
          opacity={'20%'}
          h="100%"
          w="100%"
          left="0px"
          top="0px"
        />
        <Image src={errorImgUrl} alt="img" />
      </Box>
    </>
  );
};

export default ErrorImg;
