import { ComponentStyleConfig } from '@chakra-ui/react';

export const tabStyle: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
    variants: {
        line: {
          tab: {
            color: '#FFFFFF',
            borderbottom: 'none',
            _selected: {
              borderColor: '#12BDF3',
              borderbottom: '2px solid',
              color: '#258CEC'
            }
          }
        }
      },
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: ''
  }
};
