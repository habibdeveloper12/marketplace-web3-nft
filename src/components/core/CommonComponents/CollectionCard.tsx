import React from 'react';
import { Box, Link, Image, Flex, Text, Button } from '@chakra-ui/react';
import { RightArrowButton } from './';
import { getFileUrl } from '../../../utils/getFileUrl';

type CollectionPropsType = {
  CardImage:string,
  CardTag:string, 
  onCardButtonClick:React.MouseEventHandler<HTMLButtonElement>;
}
export const CollectionCard = ({ CardImage, CardTag, onCardButtonClick }:CollectionPropsType) => {
  return (
    <>
      <Box
        bg={'colorPrimaryDark'}
        borderRadius={'8px'}
        overflow={'hidden'}
        w={{ base: '100%', md: '49%', lg: '32.5%' }}
        px="24px"
        pt="21px"
        pb="12px"
        mb="24px">
        <Box display={'flex'} alignItems="center" justifyContent={'space-between'} pb="17px">
          <Button
            py="3px"
            fontSize={'13px'}
            p="3px 13px"
            fontFamily={'Poppins'}
            fontWeight="700"
            border="1px solid #F18B14"
            borderRadius={'42px'}
            bg="rgba(23, 23, 43, 0.7)"
            letterSpacing={'0.02em'}
            _hover={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none', bg: 'transparent' }}
            textTransform="uppercase"
            color="white">
            TOTAL items -5600
          </Button>
          <Box display={'flex'} alignItems="center" gap="17px">
            <Box display={'flex'} alignItems="center" gap="7px">
              <Image src={getFileUrl("marketplace-assets/assets/images/Eyefeye.svg")} alt="img"></Image>
              <Text
                as="span"
                color="#A1A1A1"
                fontSize={'16px'}
                fontWeight="400"
                lineHeight={'25px'}>
                12
              </Text>
            </Box>
            <Box display={'flex'} alignItems="center" gap="7px">
              <Image src={getFileUrl("marketplace-assets/assets/images/dillnon.svg")} alt="img"></Image>
              <Text
                as="span"
                color="#A1A1A1"
                fontSize={'16px'}
                fontWeight="400"
                lineHeight={'25px'}>
                92
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Image src={getFileUrl(CardImage)} borderRadius="2px" width={'100%'} objectFit={'cover'} />
        </Box>
        <Box py="16px">
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
              {CardTag}
            </Text>
            <RightArrowButton onClick={onCardButtonClick}>SEE COLLECTION</RightArrowButton>
          </Flex>
        </Box>
        <Box>
          <Text
            as="p"
            color="#81F7FF"
            fontWeight={'500'}
            fontSize="15px"
            lineHeight={'22px'}
            letterSpacing="0.1em"
            textTransform={'uppercase'}>
            Total Value : $392K
          </Text>
        </Box>
      </Box>
    </>
  );
};
