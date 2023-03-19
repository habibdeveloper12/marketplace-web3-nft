import { Box, useRadio } from '@chakra-ui/react';
import React from 'react';
interface Props {
  children?: string;
  item?: boolean;
  name?: string;
  onChange?: any;
}
export const RadioCard = (props : Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
  <>
     <Box as="label">
      <input {...input} />
        <Box
        {...checkbox}
        bg="#192C45"
        color="white"
        p="8px 18px"
        fontFamily="Poppins"
        fontSize={'13px'}
        fontWeight="600px"
        cursor="pointer"
        _checked={{
          bg: '#2358F0',
          color: 'white'
        }}
        >
        {props.children}
      </Box>
    </Box>
    </>
  );
};
