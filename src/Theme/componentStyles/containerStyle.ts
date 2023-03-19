import { ComponentStyleConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

export const containerStyle: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    mainContainer: {
      maxWidth: '1752px',
      mx: 'auto'
    },
    primaryContainer: {
      maxWidth: '1752px',
      mx: 'auto'
    }
  },
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: ''
  }
};
