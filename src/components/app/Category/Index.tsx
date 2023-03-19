import { Box, Container, Flex, Img } from '@chakra-ui/react';
import '@fontsource/poppins';

import { Banner } from './Banner';
import CategoryContent from '../../core/CategoryContent/CategoryContent';
import { PaginationBtn } from '../../core/Pagination/PaginationBtn';

export default function CategoryPage() {
  return (
    <>
      <Box bg={'#071018'}>
        <Container maxW={'1790px'} px="20px" position={'relative'} zIndex="999">
          <Banner image="https://cdn.enochdev.com/marketplace/assets/mainBanner.png" />
          <CategoryContent />
          <PaginationBtn />
        </Container>
      </Box>
    </>
  );
}
