import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { nftCollections } from '../../../constants/nft';
import { NftCardWrapper } from '../../core/CommonComponents';
import SearchBox from './SearchBox';
import SearchResultCard from './SearchResultCard';
import { userData } from '../../../constants/search';
import { RightArrowButton } from '../../core/CommonComponents';
import { SliderWrapper } from '../../core/CommonComponents';

const GlobalSearchHeader = ({ title, route }: any) => (
  <Flex my="10px" justifyContent="space-between" alignItems="center">
    <Text color="#FFFFFF" fontSize="24px">
      {title}
    </Text>
    <Flex cursor="pointer" color="#1DB4F4" alignItems="center">
      <RightArrowButton>View All</RightArrowButton>
    </Flex>
  </Flex>
);

const GlobalSearchResults = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
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
      }
    ]
  };
  return (
    <Box px="20px" bg="#091320" w="100%">
      <Divider orientation="horizontal" borderColor="#718DB0" />
      <SearchBox placeholder="Search" />
      <Box my="20px">
        <GlobalSearchHeader {...{ title: 'People' }} />
        {userData.map((user) => (
          <SearchResultCard key={user._id} {...{ user }} />
        ))}
      </Box>

      <Box my="20px" position={'relative'}>
        <GlobalSearchHeader {...{ title: 'Marketplace' }} />
        <SliderWrapper sliderSettings={settings}>
          {nftCollections.slice(0,3).map((item) => {
            return (
              <Box display="flex" flexShrink="0" key={item._id}>
                <NftCardWrapper {...{width:"95%",fontSize:"10px",...item}} />
              </Box>
            );
          })}
        </SliderWrapper>
      </Box>

      <Box my="20px">
        <GlobalSearchHeader {...{ title: 'Shops' }} />
        {userData.map((user) => (
          <SearchResultCard key={user._id} {...{ cardType: 'shop', user }} />
        ))}
      </Box>
    </Box>
  );
};

export default GlobalSearchResults;
