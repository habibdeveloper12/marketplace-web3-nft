import { Box } from '@chakra-ui/react';
import React from 'react';

export const BoxWrapper = ({ styles = {},children }) => {
  return (
    <Box position="relative" zIndex="2" {...styles}>
      {children}
    </Box>
  );
};
