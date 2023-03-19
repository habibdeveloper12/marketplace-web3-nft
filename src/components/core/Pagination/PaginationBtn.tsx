import { Box, Flex, Img, Button } from '@chakra-ui/react';

import '@fontsource/poppins';

export const PaginationBtn = ({}) => {
  return (
    <Box>
      <Box mb="40px">
        <Flex justifyContent={'flex-end'} gap="8px">
          <Button
            w="48px"
            h="48px"
            bg="#112135"
            borderRadius={'24px'}
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            mr="8px"
            _hover={{ bg: '#263F5F' }}
            _focus={{ bg: '#263F5F' }}>
            <Img src="https://cdn.enochdev.com/marketplace-assets/assets/images/left.svg"></Img>
          </Button>
          <Button
            bg="#263F5F"
            w="48px"
            h="48px"
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            borderRadius={'12px'}
            color="white"
            _hover={{ bg: '#263F5F' }}
            _focus={{ bg: '#263F5F' }}>
            1
          </Button>
          <Button
            bg="#112135"
            w="48px"
            h="48px"
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            borderRadius={'12px'}
            color="white"
            _hover={{ bg: '#263F5F' }}
            _focus={{ bg: '#263F5F' }}>
            2
          </Button>
          <Button
            bg="#112135"
            w="48px"
            h="48px"
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            borderRadius={'12px'}
            color="white"
            _hover={{ bg: '#263F5F' }}
            _focus={{ bg: '#263F5F' }}>
            3
          </Button>
          <Button
            bg="#112135"
            w="48px"
            h="48px"
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            borderRadius={'12px'}
            color="white"
            _hover={{ bg: '#263F5F' }}
            _focus={{ bg: '#263F5F' }}>
            4
          </Button>
          <Button
            w="48px"
            h="48px"
            bg="#112135"
            borderRadius={'24px'}
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            ml="8px"
            _hover={{ bg: '#263F5F' }}
            _focus={{ bg: '#263F5F' }}>
            <Img src="https://cdn.enochdev.com/marketplace-assets/assets/images/rid.svg"></Img>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
