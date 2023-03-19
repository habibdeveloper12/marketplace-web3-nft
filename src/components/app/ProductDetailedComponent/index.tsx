import { Box, Container } from '@chakra-ui/react';
import '@fontsource/poppins';
import ProductBanner from './ProductBanner';
import { tabsData } from '../../../constants/productDetailed';
import { BoxWrapper, ProductPropertyTab, SuggestionSection } from '../../core/CommonComponents';

const ProductDetailed = () => {
  return (
    <BoxWrapper>
      <Container maxW={'1360px'} px="20px">
        <ProductBanner />
        <ProductPropertyTab tabsData={tabsData} />
        <Box mt="40px">
          <SuggestionSection />
        </Box>
      </Container>
    </BoxWrapper>
  );
};

export default ProductDetailed;
