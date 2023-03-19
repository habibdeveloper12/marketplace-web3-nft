import React from 'react';
import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import { getFileUrl } from '../../../utils/getFileUrl';

export const CommunitySlider = () => {
  return (
    <Box position={'relative'} overflow="visible">
      <Box mb="32px">
        <Text
          as="h4"
          color="#81F7FF"
          fontWeight={'300'}
          fontSize="18px"
          lineHeight={'27px'}
          letterSpacing="0.3em"
          textTransform={'uppercase'}>
          SUB HEADING
        </Text>
        <Text
          as="h4"
          color="primaryWhite"
          fontWeight={'700'}
          fontSize={{
            xl: '36px',
            lg: '32px',
            md: '28px',
            sm: '24px',
            base: '19px'
          }}
          lineHeight={{
            xl: '54px',
            lg: '45px',
            md: '40px',
            sm: '36px',
            base: '32px'
          }}
          textTransform={'uppercase'}>
          What the community has to say
        </Text>
      </Box>

      <Box w="100%">
        <Box position={'relative'} overflow="visible">
          <Box
            position={'absolute'}
            right={{ base: '0px', md: '0px', lg: '0px', xl: '0px', xxl: '0px', xxxl: '-170px' }}
            top={{ base: 'none', md: 'none', lg: 'none', xl: '-83px', xxl: '-83px' }}
            bottom={{ base: '0px', md: '0px', lg: '0px' }}
            borderRadius={'50%'}
            h="649px"
            maxW={'649px'}
            w="100%"
            bg="#672EC5"
            opacity={'0.12'}
            filter={'blur(72px)'}></Box>
          <Box
            position={'absolute'}
            right={{ base: '298px', md: '298px', lg: '0px', xl: '0px', xxl: '136px' }}
            top={{ base: 'none', md: 'none', lg: 'none', xl: '-83px', xxl: '-83px' }}
            bottom={{ base: '118px', md: '118px', lg: '118px' }}
            borderRadius={'50%'}
            h="498px"
            maxW={'498px'}
            w="100%"
            bg="rgba(57, 176, 243, 0.6)"
            opacity={'0.12'}
            filter={'blur(72px)'}></Box>
          <Box
            _before={{
              content: '""',
              display: 'block',
              h: '10px',
              maxW: '600px',
              w: '100%',
              bg: '#718DB0'
            }}
            borderLeft="10px solid #718DB0"
            borderBottom={'10px solid #718DB0'}>
            <Flex
              flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
              alignItems={{ base: 'center', md: 'center', lg: 'end', xl: 'end' }}>
              <Box
                pl={{ base: '20px', md: '56px' }}
                pt="56px"
                w={{ base: '100%', md: '100%', lg: '63%' }}
                h="100%"
                flexDirection={'column'}>
                <Img
                  alt="img"
                  src={getFileUrl('marketplace-assets/assets/images/starvar.svg')}
                  mb="20px"></Img>
                <Text
                  as="h4"
                  color="primaryWhite"
                  fontWeight={'600'}
                  fontSize="38px"
                  lineHeight={'57px'}
                  textTransform={'uppercase'}>
                  Freda Collier
                </Text>
                <Box mt="16px" mb="20px" w="120px" h="2px" bg="white"></Box>
                <Img
                  alt="img"
                  src={getFileUrl('marketplace-assets/assets/images/grrenish.svg')}
                  mb="20px"></Img>
                <Text
                  as="h4"
                  color="primaryWhite"
                  fontWeight={'400'}
                  fontSize="20px"
                  lineHeight={'34px'}>
                  Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima
                  dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus
                  ipsam non aspernatur voluptate id.Ipsum vel nobis doloremque est aut non
                  accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim
                  quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.
                </Text>
                <Box
                  display={'flex'}
                  justifyContent={{ base: 'center', md: 'center', lg: 'end', xl: 'flex-end' }}
                  pb="40px">
                  <Flex gap="30px" alignItems={'center'}>
                    <Button
                      w="48px "
                      h="48px"
                      className="Button"
                      colorScheme="rgba(23, 23, 43, 0.7)"
                      bg="rgba(23, 23, 43, 0.7)"
                      border="1px solid #F18B14"
                      borderRadius={'50%'}>
                      <Img
                        alt="img"
                        src={getFileUrl('marketplace-assets/assets/images/leftcon.svg')}></Img>
                    </Button>
                    <Flex alignItems={'baseline'}>
                      <Text
                        as="span"
                        color="#42CE1F"
                        fontWeight={'400'}
                        fontSize="56px"
                        lineHeight={'71px'}
                        textTransform={'uppercase'}>
                        01
                      </Text>
                      <Text
                        as="span"
                        color="white"
                        fontWeight={'400'}
                        fontSize="16px"
                        lineHeight={'20px'}
                        textTransform={'uppercase'}>
                        / 04
                      </Text>
                    </Flex>

                    <Button
                      w="48px "
                      h="48px"
                      bg="rgba(23, 23, 43, 0.7)"
                      colorScheme="rgba(23, 23, 43, 0.7)"
                      border="1px solid #F18B14"
                      borderRadius={'50%'}>
                      <Img
                        alt="img"
                        src={getFileUrl('marketplace-assets/assets/images/rightcon.svg')}></Img>
                    </Button>
                  </Flex>
                </Box>
              </Box>
              <Box display={'flex'} justifyContent="center">
                <Box>
                  <Img
                    alt="img"
                    h={{ base: 'auto', md: 'auto', lg: 'auto', xl: '679px' }}
                    position={{ base: 'static', md: 'static', lg: 'static', xl: 'absolute' }}
                    top="-109px"
                    right={'0px'}
                    maxW="460px"
                    w="100%"
                    src={getFileUrl('marketplace-assets/assets/images/girliyish.png')}></Img>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CommunitySlider;
