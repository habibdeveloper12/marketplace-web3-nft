import { Input } from '@chakra-ui/react';
import React from 'react';

type InputWrapperPropsType = {
  placeholder: string;
  border?: string;
  outline?: string;
  lineHeight?: string;
  fontWeight?: string;
  color?: string;
  textTransform?: string;
  styles: any;
  control?:any;
};

export const InputWrapper = ({
  placeholder,
  control,
  border = 'none',
  outline = 'none',
  lineHeight = '24px',
  fontWeight = '400',
  color = 'primaryWhite',
  textTransform = 'capitalize',
  ...styles
}: InputWrapperPropsType) => {
  return (
    <Input
      placeholder={placeholder}
      border={border}
      outline={outline}
      _focusVisible={{ outline }}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      color={color}
      _placeholder={{
        color,
        textTransform: textTransform
      }}
      {...control}
      {...styles}
    />
  );
};
