import React from 'react';
import { Box, Image, Link } from '@chakra-ui/react';
import { getFileUrl } from '../../../utils/getFileUrl';

const StudioCard = (props: { data: { imgUrl: string; userName: string } }) => {
  return (
    <>
      <Box>
        <Box
          maxW={'224px'}
          width={'100%'}
          mx={'auto'}
          borderRadius={'50%'}
          bg={'#99BBE2'}
          mb={'16px'}>
          <Image src={getFileUrl(props.data?.imgUrl)} alt="img" height={'100%'} width={'100%'} />
        </Box>
        <Link
          href="#"
          fontSize={{ lg: '20px', sm: '12px', base: '12px' }}
          lineHeight={'30px'}
          fontWeight={'500'}
          color={'#56F984'}
          _hover={{ textDecoration: 'none' }}>
          {props.data?.userName}
        </Link>
      </Box>
    </>
  );
};

export default StudioCard;
