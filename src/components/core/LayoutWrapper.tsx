import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer/Footer";
// import MainHeader from "../Header/MainHeader";

const LayoutWrapper = ({ children }) => {
  return (
    <Box
      bg={"#071018"}
    >
      {/* <Image src="https://cdn.enochdev.com/marketplace/image/header-image/header-light.png" alt="img" left={"5%"} top={"0px"} position={"absolute"} zIndex={"0"} width={{xl: "auto", md:"70%", sm: "80%", base: "90%"}} /> */}
      <Image src="https://cdn.enochdev.com/marketplace/image/header-image/banner-graphic1.png" alt="img" left={"0px"} top={"0px"} position={"absolute"} zIndex={"1"} />
      <Image src="https://cdn.enochdev.com/marketplace/image/header-image/banner-graphic2.png" alt="img" right={"3%"} top={"6%"} position={"absolute"} zIndex={"1"} />
      {/* <Image src="https://cdn.enochdev.com/marketplace/image/header-image/light3.png" alt="img" right={"0%"} top={"55%"} position={"absolute"} zIndex={"1"} />
      <Image src="https://cdn.enochdev.com/marketplace/image/header-image/light4.png" alt="img" left={"0%"} bottom={"15%"} position={"absolute"} zIndex={"1"} /> */}
      {/* <MainHeader/> */}
      {children}
      <Footer/>
    </Box>
  );
};

export default LayoutWrapper;