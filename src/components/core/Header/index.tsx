import { Box, Container, Flex, Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { getFileUrl } from '../../../utils/getFileUrl';
import { BoxWrapper } from '../CommonComponents';
import MainMenuList from './MainMenuList';
import WalletComponent from './WalletComponent';
import MobileMenu from './MobileMenu';
import SearchBox from './SearchBox';
import TopHeader from './TopHeader';
import { useScrollPosition } from '../../../hooks/useScrollPosition';

const MainHeader = ({ chains, setDefaultChain, initialChain }: any) => {
  const { scrollPosition } = useScrollPosition();

  return (
    <Box pos="sticky" top="0" zIndex={9999} bg={scrollPosition > 0 ? '#091320' : ''}>
      <TopHeader />
      <BoxWrapper styles={{ bg: 'navbarColorPrimary', minH: 'auto', zIndex: '4' }}>
        <Container variant="mainContainer">
          <Flex
            minWidth="max-content"
            justifyContent="space-between"
            alignItems="center"
            minH="112px"
            gap="50px">
            <NextLink href="/">
              <Link minW="150px" maxW={{ base: '150px', md: '190px' }}>
                <Box>
                  <Image src={getFileUrl('enoch-mp-logo.png')} alt="img" />
                </Box>
              </Link>
            </NextLink>
            <Box
              display={{ base: 'none', lg: 'flex' }}
              alignItems="center"
              justifyContent="flex-end"
              gap="20px"
              maxW="100%"
              width="100%">
              <MainMenuList onClicks={() => {}} />
              <SearchBox />
              <WalletComponent
                chains={chains}
                setDefaultChain={setDefaultChain}
                initialChain={initialChain}
              />
            </Box>
            <Box display={{ lg: 'none' }}>
              <Flex gap="20px" alignItems="center" justifyContent="flex-end">
                <SearchBox />
                <MobileMenu />
              </Flex>
            </Box>
          </Flex>
        </Container>
      </BoxWrapper>
    </Box>
  );
};

export default MainHeader;
