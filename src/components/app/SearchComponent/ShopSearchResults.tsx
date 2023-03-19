import { Box, Divider, Flex } from '@chakra-ui/react';
import React from 'react';
import { Pagination } from '../../core/CommonComponents';
import SearchBox from './SearchBox';
import SearchResultCard from './SearchResultCard';

const user = {
  id: 1,
  username: '@helloworld',
  mutualFriends: 7,
  isVerified: true,
  profilePicture:
    'https://images.unsplash.com/photo-1667324698552-14a7e7213211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  shortDescription:
    'Entrepreneur always eager to learn more and contribute as much as possible into making a better world. #crypto beginner & #nft creator #startup enthusiast'
};

const ShopSearchResults = () => {
  return (
    <Box px="20px" pb="20px">
      <Divider orientation="horizontal" borderColor="#718DB0" />
      <SearchBox placeholder="Search Shop" />
      <Box>
        {Array(6)
          .fill(null)
          .map((el) => (
            <SearchResultCard {...{ cardType: 'shop', user }} />
          ))}
      </Box>
      <Flex my="20px" justifyContent="flex-end">
        <Pagination />
      </Flex>
    </Box>
  );
};

export default ShopSearchResults;
