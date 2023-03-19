import { ComponentStyleConfig } from '@chakra-ui/react';

export const linkStyle: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants:{
     linkPrimary:{
        _hover:{ textDecoration: 'none', opacity: '80%' , color:'primaryWhite' }
     }
  },
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: ''
  }
};
