import React, { useState, useEffect, useCallback } from "react";
import { Box, Button, Img } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { getFileUrl } from "../../../utils/getFileUrl";

const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showScrollBtn = useCallback(() => {
    if(window.scrollY === 0) {
      setIsVisible(false);
    } else  setIsVisible(true);
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", showScrollBtn);
    return () => window.removeEventListener("scroll", showScrollBtn);
  }, [isVisible]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right={{base:"16px", md:"20px",xxxl:"84px"}}
          zIndex={999}
        >
          <Button
            size={"sm"}
            w="44px"
            h="44px"
            colorScheme={"linear(180deg, #F18B14 0%, #E64411 100%)"}
            bgGradient="linear(180deg, #F18B14 0%, #E64411 100%)"
            borderRadius={"50%"}
            variant="solid"
          >
            <Img src={getFileUrl("marketplace-assets/assets/images/Polygon.svg")}></Img>
          </Button>
        </Box>
      )}
    </>
  );
};

export default ScrollUpBtn;


