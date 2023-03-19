import React from 'react';
import { Box, Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { getFileUrl } from '../../../utils/getFileUrl';

export const NFTDashboard = ({ collectionName }) => {
  return (
    <Container maxW={'1752px'} mx={'auto'}>
      <Box textAlign={'center'} pt={'105px'} pb={'32px'}>
        <Heading
          as="h3"
          fontFamily={'body'}
          fontSize={{
            xl: '32px',
            lg: '30px',
            md: '28px',
            sm: '24px',
            base: '22px'
          }}
          lineHeight={{
            xl: '40px',
            lg: '38px',
            md: '36px',
            sm: '34px',
            base: '30px'
          }}
          fontWeight={'600'}
          textTransform={'uppercase'}
          color={'#F0FCFB'}>
          {collectionName}
        </Heading>
        <Flex gap={'8px'} justifyContent={'center'} mt={'10px'}>
          <Button
            padding={'10px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            bg={'#25253A'}
            border={'1px solid #414165'}
            borderRadius={'2px'}
            _hover={{ bg: '#25253A', opacity: '0.8' }}
            _focus={{ bg: '#25253A' }}>
            <Image src={getFileUrl('marketplace-assets/assets/images/share-fill.svg')} alt="icon" />
          </Button>
          <Button
            padding={'10px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'7px'}
            bg={'#25253A'}
            border={'1px solid #414165'}
            borderRadius={'2px'}
            _hover={{ bg: '#25253A', opacity: '0.8' }}
            _focus={{ bg: '#25253A' }}>
            <Image
              src={getFileUrl('marketplace-assets/assets/images/orange-heart.svg')}
              alt="icon"
            />
            <Text
              fontSize={'16px'}
              lineHeight={'25px'}
              fontWeight={'400'}
              fontFamily={'dinFonts'}
              color={'#FFFFFF'}>
              92
            </Text>
          </Button>
          <Button
            padding={'10px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            bg={'#25253A'}
            border={'1px solid #414165'}
            borderRadius={'2px'}
            _hover={{ bg: '#25253A', opacity: '0.8' }}
            _focus={{ bg: '#25253A' }}>
            <Image src={getFileUrl('marketplace-assets/assets/images/3dot.svg')} alt="icon" />
          </Button>
        </Flex>

        <Box
          background={'#11213554'}
          backdrop-filter={'blur(27px)'}
          border={'1px solid #667AE4'}
          mt={'32px'}
          mb={'40px'}>
          <Flex flexWrap={'wrap'} alignItems={'center'} minH={'196px'} p={'40px'} mx={'-10px'}>
            <Box
              width={{ xl: '20%', lg: '25%', md: '33.33%', sm: '50%', base: '100' }}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              px={'10px'}>
              <Box
                minH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                minW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                p={'5px'}
                bg={'#F9EFE510'}
                borderRadius={'12px'}
                backdropFilter={'blur(12px)'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                mr={'16px'}>
                <Image
                  src={getFileUrl('marketplace-assets/assets/images/enoch-citizen-icon1.svg')}
                  alt="img"
                />
              </Box>
              <Box textAlign={'left'}>
                <Heading
                  as="h2"
                  color={'#FF8700'}
                  fontSize={{ xxl: '40px', xl: '27px', lg: '24px', base: '20px' }}
                  lineHeight={{ xxl: '51px', xl: '37px', lg: '34px', base: '30px' }}
                  fontWeight={'400'}
                  fontFamily="dinFonts">
                  176
                </Heading>
                <Text
                  fontWeight={'400'}
                  fontSize={{ xxl: '18px', xl: '16px', lg: '14px', base: '12px' }}
                  lineHeight={'23px'}
                  textTransform={'uppercase'}
                  color={'#FFFFFF'}
                  fontFamily="dinFonts">
                  UNIQUE items
                </Text>
              </Box>
            </Box>

            <Box
              width={{ xl: '20%', lg: '25%', md: '33.33%', sm: '50%', base: '100' }}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              px={'10px'}>
              <Box
                minH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                minW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                p={'5px'}
                bg={'#F013E710'}
                borderRadius={'12px'}
                backdropFilter={'blur(12px)'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                mr={'16px'}>
                <Image
                  src={getFileUrl('marketplace-assets/assets/images/enoch-citizen-icon2.svg')}
                  alt="img"
                />
              </Box>
              <Box textAlign={'left'}>
                <Heading
                  as="h2"
                  color={'#F013E7'}
                  fontSize={{ xxl: '40px', xl: '27px', lg: '24px', base: '20px' }}
                  lineHeight={{ xxl: '51px', xl: '37px', lg: '34px', base: '30px' }}
                  fontWeight={'400'}
                  fontFamily="dinFonts">
                  14.9K
                </Heading>
                <Text
                  fontWeight={'400'}
                  fontSize={{ xxl: '18px', xl: '16px', lg: '14px', base: '12px' }}
                  lineHeight={'23px'}
                  textTransform={'uppercase'}
                  color={'#FFFFFF'}
                  fontFamily="dinFonts">
                  Total items
                </Text>
              </Box>
            </Box>

            <Box
              width={{ xl: '20%', lg: '25%', md: '33.33%', sm: '50%', base: '100' }}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              px={'10px'}>
              <Box
                minH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                minW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                p={'5px'}
                bg={'#32A7E210'}
                borderRadius={'12px'}
                backdropFilter={'blur(12px)'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                mr={'16px'}>
                <Image
                  src={getFileUrl('marketplace-assets/assets/images/enoch-citizen-icon3.svg')}
                  alt="img"
                />
              </Box>
              <Box textAlign={'left'}>
                <Heading
                  as="h2"
                  color={'#32A7E2'}
                  fontSize={{ xxl: '40px', xl: '27px', lg: '24px', base: '20px' }}
                  lineHeight={{ xxl: '51px', xl: '37px', lg: '34px', base: '30px' }}
                  fontWeight={'400'}
                  fontFamily="dinFonts">
                  $522k+
                </Heading>
                <Text
                  fontWeight={'400'}
                  fontSize={{ xxl: '18px', xl: '16px', lg: '14px', base: '12px' }}
                  lineHeight={'23px'}
                  textTransform={'uppercase'}
                  color={'#FFFFFF'}
                  fontFamily="dinFonts">
                  Total Value
                </Text>
              </Box>
            </Box>

            <Box
              width={{ xl: '20%', lg: '25%', md: '33.33%', sm: '50%', base: '100' }}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              px={'10px'}>
              <Box
                minH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                minW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                p={'5px'}
                bg={'#22B07D10'}
                borderRadius={'12px'}
                backdropFilter={'blur(12px)'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                mr={'16px'}>
                <Image
                  src={getFileUrl('marketplace-assets/assets/images/enoch-citizen-icon4.svg')}
                  alt="img"
                />
              </Box>
              <Box textAlign={'left'} flexShrink="0">
                <Heading
                  as="h2"
                  color={' #21DB98'}
                  fontSize={{ xxl: '40px', xl: '27px', lg: '24px', base: '20px' }}
                  lineHeight={{ xxl: '51px', xl: '37px', lg: '34px', base: '30px' }}
                  fontWeight={'400'}
                  fontFamily="dinFonts">
                  130+
                </Heading>
                <Text
                  fontWeight={'400'}
                  fontSize={{ xxl: '18px', xl: '16px', lg: '14px', base: '12px' }}
                  lineHeight={'23px'}
                  textTransform={'uppercase'}
                  color={'#FFFFFF'}
                  fontFamily="dinFonts">
                  Total owners
                </Text>
              </Box>
            </Box>

            <Box
              width={{ xl: '20%', lg: '25%', md: '33.33%', sm: '50%', base: '100' }}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              px={'10px'}>
              <Box
                minH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                minW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxH={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                maxW={{ xxl: '72px', xl: '60px', lg: '50px', base: '40px' }}
                p={'5px'}
                bg={'#B548C610'}
                borderRadius={'12px'}
                backdropFilter={'blur(12px)'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                mr={'16px'}>
                <Image
                  src={getFileUrl('marketplace-assets/assets/images/enoch-citizen-icon5.svg')}
                  alt="img"
                />
              </Box>
              <Box textAlign={'left'} flexShrink="0">
                <Heading
                  as="h2"
                  color={'#B548C6'}
                  fontSize={{ xxl: '40px', xl: '27px', lg: '24px', base: '20px' }}
                  lineHeight={{ xxl: '51px', xl: '37px', lg: '34px', base: '30px' }}
                  fontWeight={'400'}
                  fontFamily="dinFonts">
                  $8 - $80
                </Heading>
                <Text
                  fontWeight={'400'}
                  fontSize={{ xxl: '18px', xl: '16px', lg: '14px', base: '12px' }}
                  lineHeight={'23px'}
                  textTransform={'uppercase'}
                  color={'#FFFFFF'}
                  fontFamily="dinFonts">
                  price RANGE
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};
