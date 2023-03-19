import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

const StatusCard = ({ data, selectedStatus }: { data?: string; selectedStatus?: string }) => {
  return (
    <Box
      bg={data === selectedStatus ? 'blue.100' : '#14283D'}
      borderRadius={'32px'}
      color="white"
      p="8px 11px"
      mr="8px"
      mb="10px"
      textTransform="uppercase"
      fontFamily="Poppins"
      fontSize={'13px'}
      fontWeight="600px"
      lineHeight={'20px'}
      cursor="pointer">
      {data}
    </Box>
  );
};

export default StatusCard;
