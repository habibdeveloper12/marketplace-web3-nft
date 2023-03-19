import React, { useCallback } from 'react';
import { Box, Flex, Container, Text, Heading } from '@chakra-ui/react';
import { ExploreCategoriesCard } from './ExploreCategoriesCard';
import { RightArrowButton } from './';
import { useRouter } from 'next/router';

type ExploreCategoriesPropsType = {
  category: Array<{
    imgUrl: string;
    itemTitle: string;
  }>;
  title: string;
};

export const ExploreCategories = ({ category, title }: ExploreCategoriesPropsType) => {
  const router = useRouter();

  const handleNavigation = useCallback((path: string) => {
    router.push(path);
  }, []);

  return (
    <>
      <Box pb={'61px'}>
        <Container maxW={'1752px'} mx={'auto'}>
          <Box>
            <Text variant="textPrimary" mb="7px">
              {title}
            </Text>
            <Box
              display={'flex'}
              justifyContent={{
                lg: 'space-between'
              }}
              alignItems="baseline">
              <Heading variant="headingPrimary">Explore Categories</Heading>
              <RightArrowButton onClick={() => handleNavigation('/categories')}>
                VIEW ALL
              </RightArrowButton>
            </Box>
          </Box>
          <Box pt={'25px'}>
            <Flex flexWrap={'wrap'} mx={'-12px'}>
              {category.map((category, idx) => {
                return (
                  <Box
                    key={idx}
                    width={{ lg: '33.33%', sm: '50%', base: '100%' }}
                    px={'12px'}
                    mb={'32px'}>
                    <ExploreCategoriesCard
                      {...category}
                      onCardButtonClick={() => handleNavigation('/categories')}
                    />
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
