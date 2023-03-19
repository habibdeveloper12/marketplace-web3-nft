import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const TrendImg = (props: { data: { imageUrl: string } }) => {
  return (
    <>
      <Box borderRadius={'4px'} overflow={'hidden'}>
        <Image
          src={props.data?.imageUrl}
          alt="img"
          height={'100%'}
          width={'100%'}
          objectFit={'cover'}
        />
      </Box>
    </>
  );
};

export default TrendImg;
