import React, { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { SliderCustomButton, NftCardWrapper, SliderWrapper } from '../../core/CommonComponents';
import { recommendedNfts } from '../../../constants/nft';

const Collections = () => {
  let slider: any = useRef();

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
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
    <Box position={'relative'}>
      <Box
        position={{ base: 'static', md: 'absolute', lg: 'absolute' }}
        display={{ base: 'flex', md: 'flex', lg: 'flex' }}
        justifyContent={'flex-end'}
        pb="20px"
        right={'0px'}
        top="-79px"
        gap="20px"
        zIndex={'3'}>
        <SliderCustomButton position={'left'} onClick={previous} />
        <SliderCustomButton position={'right'} onClick={next} />
      </Box>
      <SliderWrapper ref={(c) => (slider = c)} sliderSettings={settings}>
        {recommendedNfts.map((recommended) => {
          return (
            <Box key={recommended._id} px={{ base: '0px', md: '12px' }}>
              <NftCardWrapper {...{ width: '100%', ...recommended }}></NftCardWrapper>
            </Box>
          );
        })}
      </SliderWrapper>
    </Box>
  );
};

export default Collections;
