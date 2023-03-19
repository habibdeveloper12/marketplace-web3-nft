import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { Main } from 'next/document';
import { useState } from 'react';

const SortingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Box>
      <Box position={'relative'}>
        <Button
          border="1px solid #8F9099"
          p="6.5px 17px"
          display={'flex'}
          color="#ffffff"
          fontWeight={'400'}
          fontSize="16px"
          lineHeight={'170%'}
          justifyContent="space-between"
          bg="transparent"
          colorScheme={'transparent'}
          onClick={toggling}
          w="280px"
          h="48px"
          borderRadius="6px">
          Latest <ChevronDownIcon ml="17px" color="#99BBE2" w="18px " h="18px" />
        </Button>
        {isOpen && (
          <Box
            position={'absolute'}
            w={'264px'}
            onClick={toggling}
            zIndex="99"
            top="44px"
            right="0px">
            <Box bg="#1F3755" p="17px 17px 0px 17px" borderRadius={'2px'}>
              <Box color="white" pb="20px" cursor={'pointer'}>
                All
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                Top Collections
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                Last 7 Ddays
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                Last 3 months
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                2022
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                2021
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SortingDropdown;
