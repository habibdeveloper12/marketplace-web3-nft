import { ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Img,
  Link,
  Text
} from '@chakra-ui/react';
import '@fontsource/poppins';
import React from 'react';

export const Banner = (props: { image: string }) => {
  return (
    <Box>
      <Breadcrumb my="10px" spacing="8px" separator={<ArrowRightIcon h="10px" color="#878F98" />}>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            color="#878F98"
            fontSize="13px"
            fontWeight="400"
            lineHeight={'20px'}
            textDecoration={'underline'}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            href="#"
            fontSize="13px"
            fontWeight="400"
            lineHeight={'20px'}
            color="#878F98">
            Categories
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box mb="32px" position={'relative'} zIndex="99">
        <Img w="100%" src={props.image}></Img>
      </Box>
    </Box>
  );
};
