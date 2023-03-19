import React from 'react';
import { Flex, Box, Progress } from '@chakra-ui/react';

const ProgressBar = (props: {
  data: { starValue: string; progressValue: string; progressBarValue: string };
}) => {
  return (
    <>
      <Flex
        fontWeight="700"
        fontSize="10px"
        lineHeight="13px"
        textAlign="right"
        letterSpacing="0.1em"
        textTransform="uppercase"
        fontFamily="Din"
        color="#FFFFFF"
        w="100%"
        justifyContent="space-between"
        alignItems="center">
        <Box px="8px" borderRadius="40px" bg="#0C4A6E" minW="max-content">
          {props.data?.starValue}
        </Box>
        <Box
          borderRadius="30px"
          overflow="hidden"
          bg="#1D3D65"
          py="1px"
          h="8px"
          mx="12px"
          maxW={{ lg: '568px', base: '100%' }}
          w="100%">
          <Box w={props.data?.progressBarValue} h="100%" bg="#15D28E" borderRadius="30px" />
        </Box>
        <Box px="8px" borderRadius="40px" bg="#0C4A6E" minW="max-content">
          {props.data?.progressValue}
        </Box>
      </Flex>
    </>
  );
};

export default ProgressBar;
