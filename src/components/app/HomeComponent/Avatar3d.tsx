import React, { useRef, useState, useCallback } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Avatar3dCard from './Avatar3dCard';
import { avatarData } from '../../../constants/marketplaceData';
import { SliderCustomButton, SliderWrapper } from '../../core/CommonComponents';

const Avater3d = () => {
  let slider: any = useRef();
  const [isSliderChanged, setIsSliderChanged] = useState(false);

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  const onSliderChange = useCallback(() => {
    setIsSliderChanged(true);
    process.nextTick(() => setIsSliderChanged(false));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    draggable: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
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
        breakpoint: 600,
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
    <>
      <Box pt={{base:"80px", md:"100",xxl:'153px'}} pb={{base:"80px", md:"100",xxl:'165px'}}>
        <Container variant={'primaryContainer'}>
          <Box textAlign={'center'}>
            <Text variant="textPrimary" mb="6px">PERMIUM CHARACTERS</Text>
            <Heading variant="headingPrimary" fontWeight="700">3D REAL AVATARS</Heading>
          </Box>

          <Box className={`sliderwrapper`} marginTop="40px">
            <SliderWrapper
              ref={(c) => (slider = c)}
              beforeChange={onSliderChange}
              sliderSettings={settings}>
              {avatarData.map((Avater3D) => {
                return (
                  <Box key={Avater3D.id} mb={'20px'}>
                    <Avatar3dCard
                      character={Avater3D.character}
                      imagePath={Avater3D.imagePath}
                      isSliderChanged={isSliderChanged}
                    />
                  </Box>
                );
              })}
            </SliderWrapper>
          </Box>

          <Flex
            maxW="120px"
            width={'100%'}
            mx={'auto'}
            mt={'28px'}
            justifyContent={'space-between'}>
            <SliderCustomButton position={'left'} onClick={previous} />
            <SliderCustomButton position={'right'} onClick={next} />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Avater3d;
