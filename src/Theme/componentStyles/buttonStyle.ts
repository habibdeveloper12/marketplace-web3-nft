import { ComponentStyleConfig } from '@chakra-ui/react';

export const buttonStyle: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    primaryButton: {
      bgGradient: 'linear(97.3deg, blue-100 0%, blue-150 100%)',
      textTransform: 'uppercase',
      color: 'primaryWhite',
      fontSize: { xl: '18px', base: '16px' },
      fontWeight: '600',
      lineHeight: '28px',
      height: { base: '45px', lg: '56px' },
      width: '168px',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      letterSpacing: '0.03em',
      _hover: {
        bg: 'linear(97.3deg, blue-100 0%, blue-150 100%)',
        opacity: '0.9'
      }
    },
    primaryArrowButton: {
      height: { lg: '58px', base: '40px' },
      width: { lg: '96px', base: '64px' },
      bgGradient: 'linear(97.3deg, blue-100 0%, blue-150 100%)',
      borderRadius: '48px',
      _hover: {
        bg: 'linear(97.3deg, blue-100 0%, blue-150 100%)',
        opacity: '0.9'
      }
    },
    secondaryButton: {
      bg:"blue-100",
      h:"48px",
      fontSize:'15px',
      fontWeight:"600",
      lineHeight:'22px',
      colorScheme:'blue-100',
      borderRadius:'2px',
      color:"white",
      p:"13px 103px",
      width:{base:"100%", }
    },
    secondaryOutlinedButton: {
      bg:"transparent",
      h:"48px",
      fontSize: '15px',  
      fontWeight:"600",
      lineHeight:'22px',
      border:"1px solid #FFFFFF",
      colorScheme: 'transparent',
      borderRadius: '2px',
      color:"white",
      p:"13px 103px",
    },
    oultineButton: {
      border: '1px solid white',
      borderRadius: '2px',
      height: { base: '45px', lg: '56px' },
      width: '231px',
      textTransform: 'uppercase',
      color: 'primaryWhite',
      fontSize: { xl: '18px', base: '16px' },
      fontWeight: '600',
      lineHeight: '28px',
      bg: 'transparent',
      letterSpacing: '0.02em',
      _hover: { bg: 'transparent', opacity: '0.9' }
    },
    menuButtonOutlined: {
      bg: 'transparent',
      color: 'primaryWhite',
      border: '1px solid #F0FCFB',
      padding:"10px",
      borderRadius: '50px',
      height: { base: '45px', xl: '54px' },
      minW: 'max-content',
      maxW: { base: '190px', lg: '140px', xl: '190px' },
      width: '100%',
      fontSize: { base: '16px', lg: '12px', xl: '16px' },
      lineHeight: '24px',
      fontWeight: '600',
      _hover: { bg: 'transparent'},
      _active: { bg: 'transparent' }
    },
  },
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: ''
  }
};
