import React, { forwardRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type PropsType = {
  children: React.ReactNode;
  sliderSettings?: Object;
  beforeChange?:Function
}

export const SliderWrapper = forwardRef((props:PropsType, ref?) => {
  ref === undefined ? null : ref;
  const {children, sliderSettings, beforeChange} = props;

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    ...sliderSettings,

  };

  return (
    <Slider {...settings} ref={ref} beforeChange={beforeChange}>
      {children}
    </Slider>
  )
})

