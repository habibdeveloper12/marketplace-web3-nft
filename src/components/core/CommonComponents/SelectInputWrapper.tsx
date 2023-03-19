import { useState, useEffect, useId } from 'react';
import { Box } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Select } from 'chakra-react-select';

export const DropdownIndicator = () => (
  <Box px="20px">
    <ChevronDownIcon />
  </Box>
);

const customStyles = () => ({
  width: '200px',
  border: '1px solid #8F9099',
  display: 'flex',
  color: '#CFCFE7',
  borderRadius: '6px',
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
    base: '30px',
    md: '36px',
    lg: '40px',
    xl: '46px',
    '2xl': '50px'
  },
  fontFamily: 'poppins'
});

interface Props {
  name?: any;
  onChange?: any;
  value?: any;
  options?: any;
  placeholder: string;
  styles?: any;
}
export const SelectInputWrapper = ({ onChange, options, placeholder, styles }: Props) => {
  const [modifiedOptions, setModifiedOptions] = useState([]);

  const chakraStyles = {
    control: () => (styles ? styles() : customStyles()),
    menu: (provided) => ({
      ...provided,
      background: '#112334',
      marginTop: '-5px'
    }),
    menuList: (provided) => ({
      ...provided,
      background: 'transparent',
      borderRadius: '0',
      border: 'none'
    }),
    option: (provided, state): any => {
      return {
        ...provided,
        color: '#fff',
        width: '90%',
        margin: '0 auto',
        backgroundColor: 'transparent',
        fontSize: state.selectProps.myFontSize,
        fontFamily: 'poppins',
        '&:hover': {
          background: 'rgba(177, 197, 255, 0.16)',
          borderRadius: '5px'
        }
      };
    }
  };

  useEffect(() => {
    setModifiedOptions(
      options?.map((option) => ({
        value: option,
        label: option
      }))
    );
  }, []);

  return (
    <>
      <Select
        options={options?.map((option) => ({
          value: option,
          label: option
        }))}
        placeholder={placeholder}
        closeMenuOnSelect={true}
        components={{ DropdownIndicator }}
        chakraStyles={chakraStyles}
        variant="filled"
        onChange={(e) => onChange(e)}
        instanceId={useId()}
      />
    </>
  );
};
