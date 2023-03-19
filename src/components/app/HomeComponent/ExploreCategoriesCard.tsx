import { Box, Link, Image, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ExploreCategoriesCard = (props: { data: { imgUrl: string; itemTitle: string; }; }) => {
  return (
    <>
      <Box bg={'#112135'} borderRadius={'12px'} overflow={'hidden'}>
        <Box>
          <Image src={props.data?.imgUrl} alt="img" width={'100%'} objectFit={'cover'} />
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
              color={'#FFFFFF'}
              textTransform={'uppercase'}
              whiteSpace={'nowrap'}
              overflow={'hidden'}
              textOverflow={'ellipsis'}>
              {props.data?.itemTitle}
            </Text>
            <Link
              href="#"
              fontSize={{ xl: '15px', base: '13px' }}
              lineHeight={'25px'}
              fontWeight={'600'}
              color="#283E53"
              letterSpacing={'0.02em'}
              textTransform={'uppercase'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={{ md: 'flex-end', sm: 'flex-start', base: 'flex-end' }}
              minW={'160px'}
              _hover={{ textDecoration: 'none', opacity: '0.8' }}
              gap={'10px'}>
              Explore now
              <Image
                src="https://cdn.enochdev.com/marketplace-assets/arrow.svg"
                alt="icon"
                width={{ xl: '38px', md: '26px', base: '20px' }}
                ml={'6px'}
              />
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default ExploreCategoriesCard;
