import { Box, Flex, Link, Heading, Image, Text, Button, Container } from '@chakra-ui/react';
import React from 'react';
import ExploreCategoriesCard from './ExploreCategoriesCard';

const ExploreCategories = (props: { data: any; title: string }) => {
  return (
    <>
      <Box>
        <Container maxW={'1752px'} mx={'auto'}>
          <Box>
            <Text
              fontSize={{ lg: '18px', md: '16px', sm: '14px', base: '11px' }}
              lineHeight={'27px'}
              fontWeight={'300'}
              letterSpacing={'0.03em'}
              textTransform={'uppercase'}
              color={'#FFDF6C'}>
              {props.title}
            </Text>
            <Heading
              fontFamily={'body'}
              fontSize={{
                xl: '36px',
                lg: '32px',
                md: '28px',
                sm: '24px',
                base: '22px'
              }}
              lineHeight={{
                xl: '54px',
                lg: '45px',
                md: '40px',
                sm: '36px',
                base: '32px'
              }}
              fontWeight={'600'}
              textTransform={'uppercase'}
              color={'#F0FCFB'}
              letterSpacing="0.08em">
              Explore Categories
            </Heading>
          </Box>
          {/* <Link
            href="#"
            fontSize={{ xl: "15px", base: "13px" }}
            lineHeight={"25px"}
            fontWeight={"600"}
            color={"#1DB4F4"}
            letterSpacing={"0.02em"}
            textTransform={"uppercase"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={{
              md: "flex-end",
              sm: "flex-start",
              base: "flex-end",
            }}
            minW={"160px"}
            _hover={{ textDecoration: "none", opacity: "0.8" }}
            gap={"10px"}
          >
            VIEW ALL
            <Image
              src="https://enochdev.com/marketplace/icons/arrow-forward.svg"
              alt="icon"
              width={{ xl: "38px", md: "26px", base: "20px" }}
              ml={"6px"}
            />
          </Link> */}
          <Box pt={'25px'}>
            <Flex flexWrap={'wrap'} mx={'-12px'}>
              {props.data.map((ExploreCardInfo: { imgUrl: string; itemTitle: string }) => {
                return (
                  <Box width={{ lg: '33.33%', sm: '50%', base: '100%' }} px={'12px'} mb={'24px'}>
                    <ExploreCategoriesCard data={ExploreCardInfo} />
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ExploreCategories;
