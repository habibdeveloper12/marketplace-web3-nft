import { Box, Button, Img } from '@chakra-ui/react';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';
import { AuctionCard } from '../../core/CategoryContent/AuctionCard';

import { SaleCard } from '../../core/CategoryContent/SaleCard';
import { BuyCard } from '../../core/CategoryContent/BuyCard';

export default class SimpleSlider extends Component {
  slider: any;
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
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
          display={{ base: 'flex', md: 'block', lg: 'block' }}
          justifyContent={'flex-end'}
          pb="20px"
          right={'0px'}
          top="-79px"
          zIndex={'99'}>
          <Button
            className="Button"
            onClick={this.previous}
            colorScheme="rgba(23, 23, 43, 0.7)"
            bg="rgba(23, 23, 43, 0.7)"
            border="1px solid #F18B14"
            mr="32px"
            borderRadius={'50%'}
            h="48px"
            w="48px">
            <Img src="https://cdn.enochdev.com/marketplace-assets/assets/images/left.svg"></Img>
          </Button>
          <Button
            onClick={this.next}
            bg="rgba(23, 23, 43, 0.7)"
            colorScheme="rgba(23, 23, 43, 0.7)"
            border="1px solid #F18B14"
            borderRadius={'50%'}
            h="48px"
            w="48px">
            <Img src="https://cdn.enochdev.com/marketplace-assets/assets/images/rid.svg"></Img>
          </Button>
        </Box>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <Box px={{ base: '0px', md: '12px' }}>
            <SaleCard
              cardWidth={'100%'}
              image="https://cdn.enochdev.com/marketplace/assets/collect-1.png"
              HeartCount="000"
              Citizen="2060"
              CardTitle="Coldstream boot"
              CardDesc="Futuristic, comfortable and light shoes, but additionally provides high protection against almost any blow."
              PriceCut="$300"
              OriginalPrice="$260"
            />
          </Box>
          <Box px={{ base: '0px', md: '12px' }}>
            <AuctionCard
              cardWidth={'100%'}
              image="https://cdn.enochdev.com/marketplace/assets/collect-22.png"
              HeartCount="000"
              Citizen="Enoch Citizen"
              CardTitle="Female Earrings"
              CardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
              BidPrice="$260"
            />
          </Box>
          <Box px={{ base: '0px', md: '12px' }}>
            <BuyCard
              cardWidth={'100%'}
              image="https://cdn.enochdev.com/marketplace/assets/collect-2.png"
              HeartCount="000"
              Citizen="Enoch Citizen"
              CardTitle="Female Earrings"
              CardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
              PriceTag="  $260.00"
            />
          </Box>
          <Box px={{ base: '0px', md: '12px' }}>
            <BuyCard
              cardWidth={'100%'}
              image="https://cdn.enochdev.com/marketplace/assets/collect-3.png"
              HeartCount="000"
              Citizen="Enoch Citizen"
              CardTitle="Female Earrings"
              CardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
              PriceTag="  $260.00"
            />
          </Box>
          <Box px={{ base: '0px', md: '12px' }}>
            <SaleCard
              cardWidth={'100%'}
              image="https://cdn.enochdev.com/marketplace/assets/collect-1.png"
              HeartCount="000"
              Citizen="Enoch Citizen"
              CardTitle="Female Earrings"
              CardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
              PriceCut="$300"
              OriginalPrice="$260"
            />
          </Box>
          <Box px={{ base: '0px', md: '12px' }}>
            <AuctionCard
              cardWidth={'100%'}
              image="https://cdn.enochdev.com/marketplace/assets/collect-2.png"
              HeartCount="000"
              Citizen="Enoch Citizen"
              CardTitle="Female Earrings"
              CardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
              BidPrice="$260"
            />
          </Box>
        </Slider>
      </Box>
      // <Box position={'relative'}>
      //   <Box
      //     position={{ base: 'static', md: 'absolute', lg: 'absolute' }}
      //     display={{ base: 'flex', md: 'block', lg: 'block' }}
      //     justifyContent={'flex-end'}
      //     pb="20px"
      //     right={'0px'}
      //     top="-79px"
      //     zIndex={'99'}>
      //     <Button
      //       className="Button"
      //       onClick={this.previous}
      //       colorScheme="rgba(23, 23, 43, 0.7)"
      //       bg="rgba(23, 23, 43, 0.7)"
      //       border="1px solid #F18B14"
      //       mr="32px"
      //       borderRadius={'50%'}>
      //       <Img src="/ProductDetailed/leftcon.svg"></Img>
      //     </Button>
      //     <Button
      //       onClick={this.next}
      //       bg="rgba(23, 23, 43, 0.7)"
      //       colorScheme="rgba(23, 23, 43, 0.7)"
      //       border="1px solid #F18B14"
      //       borderRadius={'50%'}>
      //       <Img src="/ProductDetailed/rightcon.svg"></Img>
      //     </Button>
      //   </Box>

      //   <Slider ref={(c) => (this.slider = c)} {...settings}>
      //     <Box px={{ base: '0px', md: '12px' }}>
      //       <SaleCard
      //         cardWidth={'100%'}
      //         image="https://cdn.enochdev.com/marketplace/assets/dopatashafon.png"
      //       />
      //     </Box>
      //     <Box px={{ base: '0px', md: '12px' }}>
      //       <AuctionCard
      //         cardWidth={'100%'}
      //         image="https://cdn.enochdev.com/marketplace/assets/dopatashafon.png"
      //         Heart="/dill.svg"
      //       />
      //     </Box>
      //     <Box px={{ base: '0px', md: '12px' }}>
      //       <BuyCard
      //         cardWidth={'100%'}
      //         image="https://cdn.enochdev.com/marketplace/assets/dopatashafon.png"
      //       />
      //     </Box>
      //     <Box px={{ base: '0px', md: '12px' }}>
      //       <BuyCard
      //         cardWidth={'100%'}
      //         image="https://cdn.enochdev.com/marketplace/assets/dopatashafon.png"
      //       />
      //     </Box>
      //     <Box px={{ base: '0px', md: '12px' }}>
      //       <SaleCard
      //         cardWidth={'100%'}
      //         image="https://cdn.enochdev.com/marketplace/assets/dopatashafon.png"
      //       />
      //     </Box>
      //     <Box px={{ base: '0px', md: '12px' }}>
      //       <AuctionCard
      //         cardWidth={'100%'}
      //         image="https://cdn.enochdev.com/marketplace/assets/dopatashafon.png"
      //         Heart="/dill.svg"
      //       />
      //     </Box>
      //   </Slider>
      // </Box>
    );
  }
}
