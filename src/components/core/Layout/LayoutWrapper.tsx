import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import ScrollButton from '../CommonComponents/ScrollButton';
import Footer from '../Footer/Footer';
import Navbar from '../Header';
import { getFileUrl } from '../../../utils/getFileUrl';

const LayoutWrapper = ({ children, chains, setDefaultChain, initialChain }: any) => {
  return (
    <Box
      position="relative"
      bg={'appMainColor'}
      mx={{
        exS: '10px',
        sm: '16px',
        md: '20px',
        lg: '40px',
        xl: '60px',
        '2xl': '100px'
      }}>
      {/* <Image src={getFileUrl("marketplace-assets/assets/images/header-light.png")} alt="img" left={"5%"} top={"0px"} position={"absolute"} zIndex={"0"} width={{xl: "auto", md:"70%", sm: "80%", base: "90%"}} /> */}
      <Image
        src={getFileUrl('marketplace-assets/assets/images/banner-graphic1.png')}
        alt="img"
        left={'0px'}
        top={'0px'}
        position={'absolute'}
        zIndex={'1'}
      />
      <Image
        src={getFileUrl('marketplace-assets/assets/images/banner-graphic2.png')}
        alt="img"
        right={'3%'}
        top={'15%'}
        position={'absolute'}
        zIndex={'1'}
      />
      {/* <Image src={getFileUrl("marketplace-assets/assets/images/light3.png")} alt="img" right={"0%"} top={"55%"} position={"absolute"} zIndex={"1"} />
      <Image src={getFileUrl("marketplace-assets/assets/images/light4.png")} alt="img" left={"0%"} bottom={"15%"} position={"absolute"} zIndex={"1"} /> */}
      <Navbar chains={chains} setDefaultChain={setDefaultChain} initialChain={initialChain} />
      {children}
      <ScrollButton />
      <Footer />
    </Box>
  );
};

export default LayoutWrapper;
