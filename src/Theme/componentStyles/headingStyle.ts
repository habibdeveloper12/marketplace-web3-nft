import { ComponentStyleConfig } from '@chakra-ui/react';

export const headingStyle: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    headingPrimary: {
      fontWeight: '600',
      textTransform: 'uppercase',
      color: '#F0FCFB',
      fontFamily: 'body',
      fontSize: {
        xl: '36px',
        lg: '32px',
        md: '28px',
        sm: '24px',
        base: '22px'
      },
      lineHeight: {
        xl: '54px',
        lg: '45px',
        md: '40px',
        sm: '36px',
        base: '32px'
      }
    },
    headingSecondary: {
      as: 'h4',
      fontSize: { lg: '22px', sm: '20px', base: '18px' },
      lineHeight: { lg: '36px', sm: '30px', base: '28px' },
      fontWeight: '600',
      color: 'primaryWhite',
      mb: { lg: '35px', sm: '25px', base: '20px' },
      textTransform: 'capitalize',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: { sm: 'flex-start', base: 'center' }
    }
  },
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: ''
  }
};
