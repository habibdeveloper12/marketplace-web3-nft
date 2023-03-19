import { Search2Icon } from '@chakra-ui/icons';
import { Box, Input } from '@chakra-ui/react';

interface Props {
  placeholder: string;
}
const SearchBox = ({ placeholder }: Props) => {
  return (
    <Box
      my="20px"
      bg="#223752"
      borderRadius="4px"
      display="flex"
      justifyContent="space-between"
      alignItems="center">
      <Input
        variant="unstyled"
        placeholder={placeholder}
        p="12px"
        color="#fff"
        borderRadius="2px"
      />
      <Search2Icon color="#F0FCFB" mr="12px" />
    </Box>
  );
};

export default SearchBox;
