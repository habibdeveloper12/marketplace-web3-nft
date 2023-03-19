import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RecommendedCard } from './RecommendedCard';
import { SectionTitle } from './SectionTitle';
import { recommendedCardData } from '../../../constants/marketplaceData';

export const RecommendedCollectibles = () => {
  const router = useRouter();
  return (
    <Box pb={'76px'}>
      <Container maxW={'1752px'} mx={'auto'}>
        <SectionTitle />
        <Box pt={'40px'}>
          <Flex flexWrap={'wrap'} mx={'-12px'}>
            {recommendedCardData.map((recommended) => {
              return (
                <Box width={{ lg: '33.33%', sm: '50%', base: '100%' }} px={'12px'} mb={'24px'}>
                  <RecommendedCard
                    key={recommended.id}
                    {...recommended}
                    onCardButtonClick={() =>
                      router.push(`collection/${recommended.collectionName}`)
                    }
                  />
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
