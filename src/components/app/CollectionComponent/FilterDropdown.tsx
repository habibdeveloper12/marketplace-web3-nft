import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { SelectInputWrapper } from '../../core/CommonComponents';

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Box>
      <Box position={'relative'} w="180px">
        <Button
          border="1px solid #8F9099"
          p="6.5px 17px"
          display={'flex'}
          color="#CFCFE7"
          fontWeight={'400'}
          fontSize="14px"
          lineHeight={'21px'}
          _hover={{ bg: '#192C45' }}
          _focus={{ boxShadow: 'none', bg: '#192C45' }}
          justifyContent="space-between"
          colorScheme="transparent"
          bg="transparent"
          onClick={toggling}
          w="100%"
          borderRadius="6px"
          h="48px">
          All fliters <ChevronDownIcon ml="17px" color="#99BBE2" w="18px " h="18px" />
        </Button>
        {isOpen && (
          <Box position={'absolute'} w={'264px'} onClick={toggling} zIndex="99" top="44px">
            <Box bg="#1F3755" p="17px 17px 0px 17px" borderRadius={'2px'}>
              <Box color="white" pb="20px" cursor={'pointer'}>
                ...........
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                ...........
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                ...........
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                ...........
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                ...........
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                ...........
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FilterDropdown;
