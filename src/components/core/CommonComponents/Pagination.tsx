import {
  Box,
  Flex,
  Img,
} from '@chakra-ui/react';
import '@fontsource/poppins';
import { getFileUrl } from "../../../utils/getFileUrl";

type PaginationPropsType = {}

export const Pagination = (props:PaginationPropsType) => {

  return (
    <Box>
      <Box pb="40px">
        <Flex justifyContent={'flex-end'} gap="8px">
          <Box
            w="48px"
            h="48px"
            bg="colorPrimaryDark"
            borderRadius={'24px'}
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            mr="8px">
            <Img alt="img" src={getFileUrl("marketplace-assets/assets/images/left.svg")}></Img>
          </Box>
          <Box
            bg="#263F5F"
            w="48px"
            h="48px"
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            borderRadius={'12px'}
            color="white">
            1
          </Box>
          <Box
            bg="colorPrimaryDark"
            w="48px"
            h="48px"
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            borderRadius={'12px'}
            color="white">
            2
          </Box>
          <Box
            bg="colorPrimaryDark"
            w="48px"
            h="48px"
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            borderRadius={'12px'}
            color="white">
            3
          </Box>
          <Box
            bg="colorPrimaryDark"
            w="48px"
            h="48px"
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            borderRadius={'12px'}
            color="white">
            4
          </Box>
          <Box
            w="48px"
            h="48px"
            bg="colorPrimaryDark"
            borderRadius={'24px'}
            display="flex"
            justifyContent={'center'}
            alignItems="center"
            ml="8px">
            <Img alt="rid" src={getFileUrl("marketplace-assets/assets/images/rid.svg")}></Img>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

