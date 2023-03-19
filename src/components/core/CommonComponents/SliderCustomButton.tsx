import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

type SliderButtonPropsType = {
  position: string;
  onClick: () => void;
};

export const SliderCustomButton = ({ position, onClick = () => {} }: 
  SliderButtonPropsType ) => {
  switch (position) {
    case 'left':
      return (
        <Button
          height={'48px'}
          width={'48px'}
          bg={'rgba(23, 23, 43, 0.7)'}
          backdropFilter={'blur(7px)'}
          borderRadius={'50%'}
          onClick={onClick}
          border={'1px solid #E64411'}
          fontSize={'32px'}
          color={'primaryWhite'}
          _hover={{ bg: '#17172B' }}
          _focus={{ bg: '#17172B' }}>
          <ChevronLeftIcon />
        </Button>
      );
    case 'right':
      return (
        <Button
          height={'48px'}
          width={'48px'}
          onClick={onClick}
          bg={'rgba(23, 23, 43, 0.7)'}
          backdropFilter={'blur(7px)'}
          borderRadius={'50%'}
          border={'1px solid #E64411'}
          fontSize={'32px'}
          color={'primaryWhite'}
          _hover={{ bg: '#17172B' }}
          _focus={{ bg: '#17172B' }}>
          <ChevronRightIcon />
        </Button>
      );
    default:
      null;
  }
};
