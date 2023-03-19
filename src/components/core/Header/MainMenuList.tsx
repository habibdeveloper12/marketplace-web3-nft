import { Flex, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

const MainMenuList = ({ onClicks }) => {
  return (
    <>
      <Flex
        minWidth="max-content"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: '25px', lg: 'none' }}
        maxW={{ base: '100%', lg: '390px', xl: '531px' }}
        w="100%"
        ml="auto"
        color="#F0FCFB"
        fontSize={{ base: '18px', lg: '14px', xl: '18px' }}
        lineHeight="27px"
        fontWeight="600"
        letterSpacing="0.04em"
        textTransform="uppercase">
        <NextLink href="/products">
          <Link variant="linkPrimary" onClick={onClicks}>
            Explore
          </Link>
        </NextLink>
        <NextLink href="/categories">
          <Link variant="linkPrimary" onClick={onClicks}>
            Categories
          </Link>
        </NextLink>
        <NextLink href="/collections">
          <Link variant="linkPrimary" onClick={onClicks}>
            Collections
          </Link>
        </NextLink>
        <NextLink href="/avatar-packs">
          <Link href="/avatar-packs" variant="linkPrimary" onClick={onClicks}>
            Packs
          </Link>
        </NextLink>
        <NextLink href="/drops">
          <Link href="/drops" variant="linkPrimary" onClick={onClicks}>
            Drops
          </Link>
        </NextLink>
      </Flex>
    </>
  );
};

export default MainMenuList;
