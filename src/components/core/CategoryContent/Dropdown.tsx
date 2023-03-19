import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { Main } from 'next/document';
import { useState } from 'react';

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Box>
      <Box>
        <Button
          w="100%"
          h="54px"
          display={'flex'}
          borderRadius="2px"
          color="#CFCFE7"
          fontWeight={'400'}
          fontSize="14px"
          lineHeight={'24px'}
          _hover={{ bg: '#192C45' }}
          _focus={{ boxShadow: 'none', bg: '#192C45' }}
          justifyContent="space-between"
          bg="#192C45"
          onClick={toggling}>
          Select category <ChevronDownIcon color="#FFFFFF" h="20px" w="20px" />
        </Button>
        {isOpen && (
          <Box position={'absolute'} w="100%" onClick={toggling} zIndex="99" bottom="-260px">
            <Box bg="#1F3755" p="17px 17px 0px 17px" borderRadius={'2px'}>
              <Box color="white" pb="20px" cursor={'pointer'}>
                Clan avatars
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                Accessories
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                3D Mesh
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                Fractal World Assets
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                Clothing
              </Box>
              <Box color="white" pb="20px" cursor={'pointer'}>
                Equipments
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
