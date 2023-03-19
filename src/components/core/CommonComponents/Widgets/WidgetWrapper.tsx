import React, { ReactNode } from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  children: ReactNode;
}

const WidgetWrapper = ({ title, children }: Props) => {
  return (
    <Box w="100%" p="20px" bg="#112135" color="#fff" mb="20px" borderRadius="4px">
      <Text color="#9FFFF3" mb="12px">
        {title}
      </Text>
      <Divider orientation="horizontal" bg="#718DB0" />
      {children}
    </Box>
  );
};

export default WidgetWrapper;
