import {
  Box,
  Button,
  // selected,
  InputGroup,
  Select,
  InputRightElement,
  Input,
  ChakraProvider,
  // isExpanded,
  Container,
  Flex,
  HStack,
  Img,
  Text,
  Menu,
  MenuDivider,
  MenuButton,
  MenuList,
  MenuItem,
  Image
  // rightIcon
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  // CircleIcon,
  ChevronUpIcon,
  CheckIcon,
  SearchIcon,
  AddIcon,
  WarningIcon
} from '@chakra-ui/icons';
import '@fontsource/poppins';
import { Grid, GridItem } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const SliderCardSale = (props: { image: string }) => {
  return (
    <Box p="24px" w="100%" mb="24px" bg="#112135" borderRadius={'12px'}>
      <Box display={'flex'} justifyContent="space-between" pb="18px">
        <Button
          py="3px"
          fontSize={'13px'}
          px="13px"
          border="1px solid #8787A5"
          borderRadius={'42px'}
          bg="transparent"
          color="#8787A5"
          _hover={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none', bg: 'transparent' }}>
          Hot Deal
        </Button>
        <Button
          py="3px"
          fontSize={'13px'}
          fontWeight="700"
          lineHeight={'20px'}
          px="13px"
          border="1px solid #262EDE"
          borderRadius={'42px'}
          bg="rgba(23, 23, 43, 0.7)"
          color="white"
          _hover={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none', bg: 'transparent' }}>
          SALE
        </Button>
      </Box>
      <Box mb="16px">
        <Img src={props.image} borderRadius={'4px'} w="100%"></Img>
      </Box>
      <HStack justifyContent={'space-between'}>
        <Text
          as="p"
          color="white"
          fontSize={'18px'}
          fontWeight="400"
          lineHeight={'23px'}
          fontFamily="dinFonts">
          #B8/457843
        </Text>
        <Box gap="10px" display={'flex'}>
          <Img src="/dill.svg"></Img>
          <Text as="span" color="white" fontSize={'16px'}>
            92
          </Text>
        </Box>
      </HStack>
      <Box mb="16px">
        <Text as="span" color="#6398DB" fontSize={'14px'}>
          Enoch Citizen
        </Text>
      </Box>
      <Flex gap="8px" mb="16px" justifyContent={'space-between'}>
        <Box
          p="12px 46px 9px 12px"
          position={'relative'}
          width="44%"
          border="1px solid #6B1AEF60"
          backdropBlur={'7px'}
          bg="rgba(23, 23, 43, 0.7)">
          <Text
            as="span"
            color="#D84343"
            fontSize={'14px'}
            fontFamily={'Poppins'}
            textDecoration="line-through">
            $300
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={{ base: '18px', md: '16px', lg: '16px', xl: '16px', xxl: '18px' }}>
            $260
          </Text>
          <Box
            position={'absolute'}
            color="white"
            px="8px"
            bg="green"
            top={'-8px'}
            right="4px"
            fontWeight={'700'}
            lineHeight="18px"
            fontFamily="dinFonts"
            borderRadius={'42px'}
            fontSize="10px">
            15% OFF
          </Box>
        </Box>
        <Box
          p="12px 6px 6px 8px"
          border="1px solid #E6441160 "
          backdropBlur={'7px'}
          bg="rgba(23, 23, 43, 0.3)">
          <Text
            as="span"
            color="#99BBE2"
            fontSize={{ base: '13px', md: '13px', lg: '11px', xl: '11px', xxl: '12px' }}
            fontFamily={'Poppins'}
            lineHeight="21px"
            letterSpacing={'0.02em'}>
            FLASH DEAL ENDS IN
          </Text>
          <Text
            as="p"
            color="white"
            fontSize={{ base: '16px', md: '13px', lg: '14px', xl: '14px', xxl: '13px' }}
            fontFamily="dinFonts"
            lineHeight="26px"
            fontWeight={'600'}
            fontStyle="normal">
            03 : 18 : 24 : 42s
          </Text>
        </Box>
      </Flex>
      <Box display={'flex'} alignItems="center" justifyContent={'space-between'} gap="12px">
        <Button
          bg="transparent"
          w="100%"
          color="white"
          border="1px solid white"
          fontSize={{ base: '15px', md: '11px', lg: '11px', xl: '11px' }}
          py="12px"
          px="11px"
          borderRadius={'2px'}
          fontFamily={'Poppins'}
          _hover={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none', bg: 'transparent' }}>
          ADD TO CART
        </Button>
        <Button
          bg="#1386F0"
          colorScheme={'#1386F0'}
          w="100%"
          color="white"
          py="12px"
          px="26px"
          fontFamily={'Poppins'}
          borderRadius={'2px'}>
          BID NOW
        </Button>
      </Box>
    </Box>
  );
};
