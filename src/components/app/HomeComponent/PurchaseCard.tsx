import {
  Box,
  Flex,
  Link,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";

interface PurchaseProps {
  heading?: string;
  purchaseImg?: string;
  itemTitle?: string;
  paragraph?: string;
  price?: string;
  id?: string;
   title?: string; 
   subtitle?: string; 
   productImageUrl?: string;
    productTitle?: string; 
    description?: string; 
    amount?: number;
   }
   
interface Props{
  data:PurchaseProps
  onPurchase?: React.MouseEventHandler<HTMLButtonElement>;
}

const PurchaseCard = ({data}:Props) => {
  return (
    <>
      <Box
        width="100%"
        px={{ md: "24px", sm: "16px", base: "24px" }}
        py="25px"
        bg="#0B1926"
        borderRadius="4px"
        position="relative"
      >
        <Text
          fontSize={"14px"}
          lineHeight={"21px"}
          fontWeight={"600"}
          textTransform={"uppercase"}
          letterSpacing={"0.1em"}
          color={"#FF9900"}
        >
          {data?.heading}
        </Text>

        <Box mt={"17px"} mb={"12px"} borderRadius={"4px"} position="relative">
          <Image src={data?.purchaseImg} alt="img" width={"100%"} />
        </Box>

        <Flex
          justifyContent={"space-between"}
          // flexDirection={{ md: "row", sm: "column", base: "row" }}
          alignItems={"center"}
          marginBottom={"12px"}
        >
          <Flex>
          <Button
            py="3px"
            fontSize={"13px"}
            h="26px"
            px="13px"
            alignItems={"center"}
            fontWeight={"600"}
            lineHeight="20px"
            borderRadius={"42px"}
            colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #E611B7, #7514F1) border-box"
            color="white"
            textTransform={"uppercase"}
            mr="12.5px"
            css={{
              background:
                "linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #F18B14, #E64411) border-box",
              border: "1px solid transparent",
              borderRadius: "50px",
              display: "",
            }}
          >
            <Image
              mr="6px"
              src="https://cdn.enochdev.com/marketplace/assets/aggicon.svg"
            />
            Hot Deal
          </Button>

          <Button
            py="3px"
            fontSize={"13px"}
            h="26px"
            px="13px"
            alignItems={"center"}
            fontWeight={"600"}
            lineHeight="20px"
            borderRadius={"42px"}
            colorScheme="linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #1B96B0, #1B96B0) border-box"
            color="white"
            textTransform={"uppercase"}
            css={{
              background:
                "linear-gradient(#08131D, #08131D) padding-box, linear-gradient(10deg, #1B96B0, #1B96B0) border-box",
              border: "1px solid transparent",
              borderRadius: "50px",
              display: "",
            }}
          >
            <Image
              mr="6px"
              src="https://cdn.enochdev.com/marketplace/assets/aggicon.svg"
            />
            TOP PACK
          </Button>
          </Flex>

          <Flex alignItems="center" mb="8px">
            <Text
              fontWeight="700"
              fontSize="18px"
              lineHeight="25px"
              color="#A1A1A1"
              fontFamily="dinFonts"
            >
              000
            </Text>
            <Button bg={"transparent"} p={"0"} _hover={{ bg: "transparent" }}>
              <Image
                src="https://cdn.enochdev.com/marketplace-assets/heart-icon.svg"
                alt="icon"
                mr={"10px"}
              />
            </Button>
          </Flex>
        </Flex>

        <Heading
          fontFamily={"body"}
          as="h3"
          fontSize={{
            xl: "25px",
            lg: "18px",
            md: "24px",
            sm: "16px",
            base: "18px",
          }}
          lineHeight={"25px"}
          fontWeight={"700"}
          letterSpacing={"0.02em"}
          textTransform={"uppercase"}
          color={"#FFFFFF"}
        >
          {data?.itemTitle}
        </Heading>

        <Text
          as="h3"
          fontSize={"15px"}
          lineHeight={"22px"}
          fontWeight={"400"}
          color={"#F9FAFC"}
          mt={"8px"}
          mb={"18px"}
          fontFamily={"raleway"}
        >
          {data?.paragraph}
        </Text>

        <Flex h="42px" maxW="256px">
          <Box
            bg="#112334"
            py="9px"
            px="22px"
            maxW="108px"
            w="100%"
            fontWeight="600"
            fontSize="18px"
            lineHeight="25px"
            color="#9FFFF3"
            textTransform="uppercase"
            fontFamily="dinFonts"
          >
            Price
          </Box>
          <Box
            bg="#1D3953"
            py="9px"
            px="22px"
            maxW="148px"
            w="100%"
            fontWeight="600"
            fontSize="22px"
            lineHeight="25px"
            color="#FFFFFF"
            fontFamily="dinFonts"
          >
            $8.50
          </Box>
        </Flex>
        <Image
          src="https://cdn.enochdev.com/marketplace-assets/pack-heading.svg"
          alt="icon"
          position="absolute"
          right="16px"
          bottom="16px"
        />
      </Box>
    </>
  );
};

export default PurchaseCard;
