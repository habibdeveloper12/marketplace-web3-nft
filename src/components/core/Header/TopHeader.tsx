import React, { useCallback, useEffect, useState } from 'react';
import { Box, Container, Flex, Image, Link, Badge } from '@chakra-ui/react';
import { BoxWrapper } from '../CommonComponents';
import UserMenu from './UserMenu';
import { getFileUrl } from '../../../utils/getFileUrl';
import { broadcast } from '../lib/broadcast';
import MarketplaceService from '../../../services/MarketplaceService';

const TopHeader = () => {
  const [user, setUser] = useState<any>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const bc = broadcast('enoch-stargate');

  const getUser = useCallback(async () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const { id }: any = MarketplaceService.decodeToken(token);
      const res = await MarketplaceService.getUserInfo(id);
      setUser(res?.data?.getUser);
    }
  }, [user]);

  useEffect(() => {
    bc.onmessage = (event) => {
      if (event?.data?.data?.isLoggedIn) {
        setIsLoggedIn(true);
        setUser(event?.data?.data);
      } else {
        setUser({});
      }
    };
    getUser();
  }, []);

  const handleClick = () => {
    const pathname = 'https://enochdev.com/stargate/auth/login?from=marketplace';
    window.open(`${pathname}`, '_blank');
  };

  return (
    <>
      <BoxWrapper styles={{ height: 'auto', zIndex: '5' }}>
        <Container variant="mainContainer">
          <Flex
            minWidth="max-content"
            justifyContent="flex-end"
            alignItems="center"
            minH="64px"
            gap="42px">
            <UserMenu {...{ user, isLoggedIn, handleClick }} />
            <Link
              href="#"
              display="flex"
              gap="16px"
              color="#FFF"
              bg="transparent"
              fontSize="14px"
              _hover={{ bg: 'transparent' }}>
              <Box position="relative">
                <Image
                  src={getFileUrl('marketplace-assets/assets/images/cart-icon.svg')}
                  alt="icon"
                />
                <Badge
                  borderRadius="50%"
                  height="21px"
                  width="21px"
                  bg="#DD490A"
                  border="1px solid #B13906"
                  color="#fff"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="absolute"
                  top="-8px"
                  right="-8px">
                  0
                </Badge>
              </Box>
              Cart
            </Link>
          </Flex>
        </Container>
      </BoxWrapper>
    </>
  );
};

export default TopHeader;
