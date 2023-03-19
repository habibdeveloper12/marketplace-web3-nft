import React from 'react';
import { Box, Link, Image, Flex, Text } from '@chakra-ui/react';
import { RightArrowButton } from './';
import { getFileUrl } from '../../../utils/getFileUrl';

type ExploreCategoriesCardPropsType = {
  imgUrl: string;
  itemTitle: string;
  onCardButtonClick: React.MouseEventHandler<HTMLButtonElement>
};

export const ExploreCategoriesCard = ({ imgUrl, itemTitle, onCardButtonClick }: ExploreCategoriesCardPropsType) => {
  return (
    <>
      <Box bg={'colorPrimaryDark'} borderRadius={'12px'} overflow={'hidden'}>
        <Box>
          <Image src={getFileUrl(imgUrl)} alt="img" width={'100%'} objectFit={'cover'} />
        </Box>
        <Box py={{ md: '32px', sm: '16px', base: '24px' }} px="24px">
          <Flex
            alignItems={{ md: 'center', sm: 'flex-start', base: 'center' }}
            flexDirection={{ md: 'row', sm: 'column', base: 'row' }}
            justifyContent={'space-between'}
            gap={'10px'}>
            <Text
              fontSize={{ xl: '16px', base: '13px' }}
              lineHeight={'24px'}
              fontWeight={'500'}
              color={'primaryWhite'}
              textTransform={'uppercase'}
              whiteSpace={'nowrap'}
              overflow={'hidden'}
              textOverflow={'ellipsis'}>
              {itemTitle}
            </Text>
            <RightArrowButton
              onClick={onCardButtonClick}
              justifyContent={{ md: 'flex-end', sm: 'flex-start', base: 'flex-end' }}
            >Explore now</RightArrowButton>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
