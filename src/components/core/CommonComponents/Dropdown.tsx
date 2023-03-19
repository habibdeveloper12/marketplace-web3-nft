import { useCallback, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { SelectInputWrapper } from './';

interface DropdownPropsType {
  options: string[];
  placeholder: string;
  style?:Object;
}
  export const Dropdown = ({ options, placeholder, style = "" }: DropdownPropsType) => {
    const [selectOption, setSelectOption] = useState<string>('');
    const handleSelect = useCallback(
      (option) => {
        setSelectOption(option.value);
      },
      [selectOption]
    );

  return (
    <Box>
      <Box position={'relative'} {...style}>
      <SelectInputWrapper onChange={handleSelect} options={options} placeholder={placeholder} />
    </Box>
   </Box> 
  );
};

