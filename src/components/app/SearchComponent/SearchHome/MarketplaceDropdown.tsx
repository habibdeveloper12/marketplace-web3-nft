import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';
import { Main } from 'next/document';
import { useContext, useState } from 'react';
import { SearchContext } from './SearchContext';
const menuItem = [
  {
    id: 1,
    label: 'People'
  },
  {
    id: 2,
    label: 'Shop'
  },
  {
    id: 3,
    label: 'Marketplace'
  }
];
export function MarketplaceDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { category, setCategory } = useContext(SearchContext);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <Box>
      <Box
        position={'relative'}
        borderRight={{ base: 'none', md: '1px solid #688DB3' }}
        borderBottom={{ base: '10px solid', md: 'none' }}>
        <Button
          h="96px"
          p="16px 38px 16px 16px"
          display={'flex'}
          color="white"
          fontWeight={'600'}
          fontSize="22px"
          lineHeight={'170%'}
          _hover={{ bg: '#192C45', borderRadius: '6px' }}
          _focus={{ boxShadow: 'none', bg: '#192C45' }}
          justifyContent="space-between"
          bg="#192C45"
          onClick={toggling}
          w={{ base: '100%', md: 'auto' }}>
          {category}
          <ChevronDownIcon ml="70px" color="white" w="20px " h="20px" />
        </Button>
        {isOpen && (
          <Box
            position={'absolute'}
            w={{ base: '100%', md: '281px' }}
            onClick={toggling}
            zIndex="99"
            top="97px">
            <Box bg="#112334" p="10px" borderRadius={'2px'}>
              {menuItem.map((items) => (
                <Box
                  color="#E4E2E6"
                  p="6px 16px 10px 16px"
                  _hover={{ bg: '#4E6E94' }}
                  cursor={'pointer'}
                  fontSize={'16px'}
                  fontWeight={'400'}
                  lineHeight={'24px'}
                  onClick={() => setCategory(items.label)}>
                  {items.label}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
