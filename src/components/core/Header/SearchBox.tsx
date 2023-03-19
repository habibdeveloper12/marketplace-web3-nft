import {
  Button,
  Box,
  Image,
  Link,
  Text,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverBody,
  Input,
  ListItem,
  UnorderedList,
  Container,
  Flex,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import Search from "../../app/SearchComponent/SearchHome";
import { MarketplaceDropdown } from "../../app/SearchComponent/SearchHome/MarketplaceDropdown";
import { SearchContextProvider } from "../../app/SearchComponent/SearchHome/SearchContext";


const SearchBox = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const handleToggle = useCallback(() => {
    setIsToggle((prev) => !prev);
  },[isToggle]);

  return (
    <SearchContextProvider>
      <Box>
      <Button
          bg="transparent"
          p="0"
          _hover={{ bg: "transparent" }}
          _focus={{ bg: "transparent" }}
          border="none"
          height="24px"
          width="24px"
          onClick={handleToggle}
        >
          <Image
            src="https://cdn.enochdev.com/marketplace-assets/assets/images/search_icon.svg"
            alt="icon"
          />
        </Button>
        {!isToggle ? (
          <Box display="none" />
        ) : (
          <Box
            bg="#08131D"
        
            w="100%"
            position="absolute"
            top="-63px"
            left="0px"
            zIndex="9999999"
            display="block"
          >
            <Container maxW="1790px" w="100%" px="20px" position="relative">
              <Box py="60px">
                <Box
                  borderRadius={"4px"}
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Box bg="#192C45" borderRadius={"2px"} w="100%">
                    <Flex flexDirection={{ base: "column", md: "row" }}>
                      <MarketplaceDropdown />
                      <Box
                        w="100%"
                        display={"flex"}
                        justifyContent="space-between"
                        alignItems={"center"}
                        pr="24px"
                        h={{ base: "96px" }}
                      >
                      <Input
                          pl="48px"
                          w="100%"
                          placeholder="Search in the marketplace "
                          border="none"
                          outline={"none"}
                          color="#445D78"
                          _focusVisible={{border:"none"}}
                          fontSize={"22px"}
                          fontWeight={"400"}
                          lineHeight={"170%"}
                        />
                        <Image
                          src="https://cdn.enochdev.com/starget-bucket/starget-dashboard/colorserch.svg"
                          alt="search"
                        />
                      </Box>
                    </Flex>
                  </Box>
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    bg="#0B1926"
                    h={{ base: "auto", md: "96px" }}
                    w={{ base: "max-content", md: "106px" }}
                    mt={{ base: "10px", md: "0px" }}
                    onClick={handleToggle}
                    position={{ base: "absolute", md: "initial" }}
                    top={{ base: "0", md: "initial" }}
                    right={{ base: "20px", md: "0" }}
                  >
                    <Image src="https://cdn.enochdev.com/starget-bucket/starget-dashboard/close.png" />
                  </Flex>
                </Box>

                <Box>
                  <Search />
                </Box>
              </Box>
            </Container>
          </Box>
        )}
      </Box>
    </SearchContextProvider>
  );
};

export default SearchBox;
