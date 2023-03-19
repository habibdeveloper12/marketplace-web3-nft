import React from 'react';
import {
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Flex,
  Link
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import MainMenuList from './MainMenuList';
import MenuBtns from './WalletComponent';
import { getFileUrl } from '../../../utils/getFileUrl';
const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="primaryWhite"
        as={Button}
        p="0"
        _hover={{ bg: 'transparent' }}
        _focus={{ bg: 'transparent' }}>
        <HamburgerIcon color="primaryWhite" fontSize="32px" fontWeight="600" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="rgba(18, 26, 33, 0.8)" backdropFilter="blur(2px)" />
        <DrawerContent bg="navbarColorSecondary" minW={{ base: '100%', sm: '50%' }}>
          <DrawerCloseButton color="primaryWhite" fontSize="20px" />
          <DrawerHeader py="50px">
            <Link href="#">
              <Box>
                <Image
                  src={getFileUrl('marketplace-assets/assets/images/logo.svg')}
                  alt="img"
                  maxW="150px"
                  mx="auto"
                />
              </Box>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column" gap="25px" alignItems="center" justifyContent="center">
              <MainMenuList onClicks={onClose} />
              <MenuBtns />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
