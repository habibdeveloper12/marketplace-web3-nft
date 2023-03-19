import { ComponentStyleConfig } from '@chakra-ui/react';

export const textStyle: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants:{
     textPrimary:{
        lineHeight:"27px",
        fontWeight:"300",
        letterSpacing:"0.03em",
        textTransform:"uppercase",
        color:"#81F7FF",
        fontSize:{ lg: "18px", md: "16px", sm: "14px", base: "11px" }
     },
     textSecondary:{
      as:"h5",
      fontSize:'14px',
      color:"#81F7FF",
      textTransform:'uppercase',
      letterSpacing:"0.1em",
      fontWeight:"600",
      lineHeight:'21px',
     },
     textTertiary:{
      fontSize:'15px',
      color:"#C1C1DC",
      letterSpacing:"0.1em",
      fontWeight:"400",
      lineHeight:'29px'
     }
  },
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: ''
  }
};
