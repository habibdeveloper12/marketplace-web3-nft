import { Box, Divider, Flex } from '@chakra-ui/react';
import { nftCollections } from '../../../constants/nft';
import { NftCardWrapper, SliderWrapper } from '../../core/CommonComponents';
import { Pagination } from '../../../components/core/CommonComponents';
import SearchBox from './SearchBox';

const MarketplaceSearchResults = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return (
    <Box px="20px" pb="20px">
      <Divider orientation="horizontal" borderColor="#718DB0" />
      <SearchBox placeholder="Search Marketplace" />
      <SliderWrapper sliderSettings={settings}>
        {nftCollections.map((item) => {
          return <NftCardWrapper key={item._id} {...{width:"95%",fontSize:"12px",...item}} />;
        })}
      </SliderWrapper>
      <Flex my="20px" justifyContent="flex-end">
        <Pagination />
      </Flex>
    </Box>
  );
};

export default MarketplaceSearchResults;
