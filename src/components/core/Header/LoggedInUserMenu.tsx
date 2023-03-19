import React from 'react';
import {
  Button,
  Box,
  Image,
  Badge,
  Link,
  PopoverBody,
  PopoverContent,
  Popover,
  PopoverTrigger,
  Flex
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { userMenuData } from '../../../constants/menuList';
import { getFileUrl } from '../../../utils/getFileUrl';

const LoggedInUserMenu = ({ user, isLoggedIn }: any) => {
  return (
    <Box position="relative" display="flex" alignItems="center" justifyContent="center">
      <Popover placement="top-start">
        <PopoverTrigger>
          <Box
            bg="transparent"
            color="#FFF"
            as={Button}
            p="0"
            rightIcon={<ChevronDownIcon />}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              fontSize="14px"
              gap="8px">
              <Box
                border="1px solid #FFFFFF"
                borderRadius="50%"
                h="32px"
                w="32px"
                background="#C4C4C4"
                position="relative">
                ]
                <Box borderRadius="50%" h="32px" w="32px" overflow="hidden">
                  <Image
                    src={
                      user?.avatar
                        ? user?.avatar
                        : getFileUrl('marketplace-assets/assets/images/user-img1.png')
                    }
                    // src={getFileUrl('marketplace-assets/assets/images/user-img1.png')}
                    alt="img"
                    h="100%"
                    w="100%"
                  />
                </Box>
                <Badge
                  height="9.6px"
                  width="9.6px"
                  bg="#86CE23"
                  border="1px solid #FFFFFF"
                  borderRadius="50%"
                  position="absolute"
                  top="4px"
                  left="24px"></Badge>
              </Box>
              Hello, <Box>{user?.firstName}</Box>
            </Box>
          </Box>
        </PopoverTrigger>
        <PopoverContent border="none" borderRadius="0px" maxW="248px" top="5px">
          <PopoverBody p="0px" borderRadius="0px" bg="#2F3346">
            <Flex p="16px" bg="#3B4055" justifyContent="space-between" alignItems="center">
              <Flex gap="8px" alignItems="center">
                <Box
                  border="1px solid #FFFFFF"
                  borderRadius="50%"
                  height={{ sm: '30px', base: '26px' }}
                  width={{ sm: '30px', base: '26px' }}
                  background="#C4C4C4"
                  position="relative">
                  <Box
                    borderRadius="50%"
                    height={{ sm: '30px', base: '26px' }}
                    width={{ sm: '30px', base: '26px' }}
                    overflow="hidden">
                    <Image
                      src={getFileUrl('marketplace-assets/assets/images/user-img1.png')}
                      alt="img"
                      h="100%"
                      w="100%"
                    />
                  </Box>
                  <Badge
                    position="absolute"
                    bg="#86CE23"
                    border="1px solid #FFFFFF"
                    borderRadius="50%"
                    top="-2px"
                    right="-2px"
                    h="9.5px"
                    w="9.5px"></Badge>
                </Box>
                <Link
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="170.23%"
                  color="#FFFFFF"
                  _hover={{ textDecoration: 'none', opacity: '0.8' }}>
                  @Hulk
                </Link>
              </Flex>

              <Link
                fontWeight="500"
                fontSize="14px"
                lineHeight="170.23%"
                color="#1DB4F4"
                textDecoration="underline"
                _hover={{ opacity: '0.8' }}>
                Change
              </Link>
            </Flex>

            <Box fontWeight="500" fontSize="14px" lineHeight="260%" color="#99BBE2" px="16px">
              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                flexDirection="column"
                pb="13px"
                borderBottom="1px solid #688DB3"
                pt="6px">
                {userMenuData.map((menu, idx) => {
                  if (menu === 'Follower Requests') {
                    return (
                      <Link
                        href="#"
                        _hover={{ textDecoration: 'none', opacity: '0.8' }}
                        w="100%"
                        position="relative">
                        {menu}
                        <Badge
                          position="absolute"
                          top="10px"
                          right="0px"
                          bg="#1DB4F4"
                          h="20px"
                          w="20px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          borderRadius="50%"
                          fontSize="14px"
                          fontWeight="700"
                          color="#FFFFFF"
                          fontFamily="DIN 2014">
                          9
                        </Badge>
                      </Link>
                    );
                  }
                  return (
                    <Link
                      key={idx}
                      href="#"
                      _hover={{ textDecoration: 'none', opacity: '0.8' }}
                      w="100%">
                      {menu}
                    </Link>
                  );
                })}
              </Box>

              <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                flexDirection="column"
                pb="13px"
                pt="6px">
                <Link href="#" _hover={{ textDecoration: 'none', opacity: '0.8' }} w="100%">
                  Setting
                </Link>
                <Link href="#" _hover={{ textDecoration: 'none', opacity: '0.8' }} w="100%">
                  Help Center
                </Link>
                <Link
                  href="#"
                  _hover={{ textDecoration: 'none', opacity: '0.8' }}
                  w="100%"
                  color="#F22D13">
                  Log out
                </Link>
              </Box>
            </Box>

            <Box
              fontWeight="700"
              fontSize="14px"
              lineHeight="170.23%"
              textTransform="uppercase"
              color="#D5F0F9"
              display="flex"
              alignItems="flex-start"
              justifyContent="flex-start"
              flexDirection="column"
              gap="1px">
              <Link
                bg="#3B4055"
                px="16px"
                py="6px"
                _hover={{
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  bg: '#5E647C'
                }}
                w="100%">
                GO TO MARKETPLACE
              </Link>
              <Link
                bg="#3B4055"
                px="16px"
                py="6px"
                _hover={{
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  bg: '#5E647C'
                }}
                w="100%">
                Switch to Enoch Website
              </Link>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default LoggedInUserMenu;
