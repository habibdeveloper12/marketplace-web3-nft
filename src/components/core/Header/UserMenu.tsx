import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Badge,
  Link,
  Text
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { menuListData } from '../../../constants/menuList';
import LoggedInUserMenu from './LoggedInUserMenu';
import { getFileUrl } from '../../../utils/getFileUrl';
import MarketplaceService from '../../../services/MarketplaceService';
import { broadcast } from '../lib/broadcast';

const UserMenu = ({ user, isLoggedIn, handleClick }: any) => {
  if (!isLoggedIn) {
    return (
      <Menu>
        <MenuButton
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
              // onClick={handleClick}
              border="1px solid #FFFFFF"
              borderRadius="50%"
              height="32px"
              width="32px"
              background="#C4C4C4"
              position="relative">
              <Image src={getFileUrl('marketplace-assets/assets/images/user-img.png')} alt="icon" />
              <Badge
                height="9.6px"
                width="9.6px"
                bg="#ECECEC"
                border="1px solid #FFFFFF"
                borderRadius="50%"
                position="absolute"
                top="6px"
                left="24px"></Badge>
            </Box>
            Hello, <Box>Sign in</Box>
          </Box>
        </MenuButton>
        <MenuList bg="#transparent" border={'none'} outline={'none'} minW={'248px'}>
          <MenuItem
            bg={'#3B4055'}
            color={'#D5F0F9'}
            px={'16px'}
            py={'6px'}
            fontWeight={'600'}
            textTransform={'uppercase'}
            height={'36px'}
            borderBottom={'1px solid #2F3346'}
            _hover={{
              bg: '#5E647C',
              color: '#FFFFFF',
              fontWeight: '700'
            }}
            _focus={{
              bg: '#5E647C',
              color: '#FFFFFF',
              fontWeight: '700'
            }}
            _active={{
              bg: '#5E647C',
              color: '#FFFFFF',
              fontWeight: '700'
            }}>
            <Text onClick={handleClick}>Go to Stargate</Text>
          </MenuItem>
          {menuListData.map((data) => (
            <MenuItem
              key={data.id}
              bg={'#3B4055'}
              color={'#D5F0F9'}
              px={'16px'}
              py={'6px'}
              fontWeight={'600'}
              textTransform={'uppercase'}
              height={'36px'}
              borderBottom={'1px solid #2F3346'}
              _hover={{
                bg: '#5E647C',
                color: '#FFFFFF',
                fontWeight: '700'
              }}
              _focus={{
                bg: '#5E647C',
                color: '#FFFFFF',
                fontWeight: '700'
              }}
              _active={{
                bg: '#5E647C',
                color: '#FFFFFF',
                fontWeight: '700'
              }}>
              <Link isExternal={data.isExternal} href={data.path}>
                {data.menu}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
  return <LoggedInUserMenu {...{ user, isLoggedIn }} />;
};

export default UserMenu;
