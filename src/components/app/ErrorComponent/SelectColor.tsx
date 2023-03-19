import { Box } from '@chakra-ui/react';
import React from 'react';
//@ts-ignore
import { HuePicker } from 'react-color';

const SelectColor = ({ color, setColor }: any) => {
  return (
    <Box>
      <HuePicker
        className={'colorPicker'}
        color={color}
        onChange={(current: any) => setColor(current.hex)}
      />
    </Box>
  );
};

export default SelectColor;
