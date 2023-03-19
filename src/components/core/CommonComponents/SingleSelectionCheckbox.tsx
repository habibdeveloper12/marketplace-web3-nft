import React from 'react';
import { Box, useCheckbox, Text, Image, useRadio } from '@chakra-ui/react';
// import { getFileUrl } from '../../utils/getFileUrl';

function SingleSelectionCheckbox(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" position="relative" w={props?.width}>
      <input {...input} />
      {props.children}
    </Box>
  );
}

export default SingleSelectionCheckbox;
