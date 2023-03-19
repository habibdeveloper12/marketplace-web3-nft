import { Box, Container, Flex, Image, Img, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { PeopleCardInfo2 } from '../../../../constants/peopleCardInfo';
import PeopleCard from './PeopleCard';

const AllShops = () => {
  return (
    <>
      <Box bg="#08131D" w="100%" p="24px">
        <Container maxW="1816px" m={'auto'}>
          <Flex my="24px">
            <Text fontWeight="600" fontSize="24px" lineHeight="170%" color="white">
              Shops
            </Text>
          </Flex>
          <Flex justifyContent="flex-start" mx="-12px" flexWrap="wrap">
            {PeopleCardInfo2.map((cardInfo) => {
              return (
                <Box w={{ xl: '25%', lg: '33%', sm: '50%', base: '100%' }} px="12px" py="12px">
                  <PeopleCard data={cardInfo} />
                </Box>
              );
            })}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default AllShops;
