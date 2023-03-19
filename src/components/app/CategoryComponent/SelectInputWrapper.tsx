import { Box, Image, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { useState } from 'react';
import { useEffect } from 'react';

export const DropdownIndicator = () => (
  <Image
    p="16px"
    w="100%"
    src={'https://cdn.enochdev.com/stargate/asset/Vector.svg'}
    alt="dropdow icon"
    color={'#7B82A8'}
  />
);

const SelectInputWrapper = ({ name, onChange, onBlur, value, options, placeholder }: any) => {
  const [modifiedOptions, setModifiedOptions] = useState([]);

  useEffect(() => {
    setModifiedOptions(
      options?.map((option: any) => ({
        value: option,
        label: option
      }))
    );
  }, []);

  const chakraStyles = {
    control: () => ({
      backgroundColor: '#14283D',
      display: 'flex',
      color: '#688DB3',
      paddingLeft: {
        exS: '0px',
        sm: '0px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '12px'
      },
      fontSize: {
        exS: '14px',
        sm: '15px',
        md: '16px',
        lg: '17px',
        xl: '18px',
        '2xl': '18px'
      },
      minHeight: {
        base: '54px',
        md: '54px',
        lg: '54px',
        xl: '54px',
        '2xl': '54px'
      },
      fontFamily: 'poppins'
    }),

    menu: (provided: any) => ({
      ...provided,
      background: '#112334',
      backdropFilter: 'blur(60px)',
      marginTop: '-5px',
      position: 'absolute',
      top: '130px',
      zIndex: '9999'
    }),
    menuList: (provided: any) => ({
      ...provided,
      background: 'transparent',
      borderRadius: '0',
      border: 'none'
    }),
    option: (provided: any, state: any) => {
      return {
        ...provided,
        color: '#fff',
        backgroundColor: 'transparent',
        // fontSize: state.selectProps.myFontSize,
        fontFamily: 'poppins',
        fontSize: '15px',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.1)'
        }
      };
    }
  };
  return (
    <>
      <Select
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        options={options?.map((option: any) => ({
          value: option,
          label: option
        }))}
        placeholder={<Box color="#688DB3">{placeholder}</Box>}
        closeMenuOnSelect={true}
        components={{ DropdownIndicator }}
        chakraStyles={chakraStyles}
        variant="filled"
      />
    </>
  );
};

export default SelectInputWrapper;
