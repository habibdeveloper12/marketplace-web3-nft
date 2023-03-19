import React from 'react';
import { Box, Container, Flex, Link, Image, Text } from '@chakra-ui/react';
import { footerIconsdata } from '../../../constants/footer';
import { getFileUrl } from '../../../utils/getFileUrl';

const FooterBottom = () => {
  return (
    <>
      <Box py="30px" borderTop={'1px solid #48486F'} position={'relative'} zIndex={'1'}>
        <Container variant="mainContainer">
          <Flex justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'}>
            <Box width={{ md: '55%', base: '100%' }} pr={{ lg: '20px', md: '40px' }}>
              <Text
                color={'#8C89A0'}
                letterSpacing={'0.03em'}
                fontSize={{ lg: '12px', base: '10px' }}
                lineHeight={{ lg: '24px', base: '20px' }}
                fontWeight={'400'}>
                © 2022,&nbsp;
                <Link href="#" variant="linkPrimary">
                  Enoch Limited.&nbsp;
                </Link>
                All rights reserved. PLAY-TO-EARN games and related logos are trademarks or
                registered trademarks of&nbsp;
                <Link href="#" variant="linkPrimary">
                  Enoch Limited.&nbsp;
                </Link>
                Avatar Labs Magic® is a trademark or registered trademark of{' '}
                <Link href="#" variant="linkPrimary">
                  Enoch Ltd.
                </Link>
                in the United Kingdom and elsewhere. All other copyrights and trademarks are the
                property of their respective owners.
              </Text>
            </Box>

            <Box width={{ md: '45%', base: '100%' }} mt={{ md: '30px', base: '20px' }}>
              <Flex
                maxW={'417px'}
                width={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}
                ml={{ md: 'auto' }}>
                {footerIconsdata.map((icon) => {
                  return (
                    <Link
                      key={icon.id}
                      href="#"
                      width={{ lg: 'auto', sm: '18px', base: '16px' }}
                      _hover={{ textDecoration: 'none', opacity: '0.6' }}>
                      <Image src={getFileUrl(icon.imgSrc)} alt="icon" />
                    </Link>
                  );
                })}
              </Flex>
              <Flex
                color={'#8C89A0'}
                letterSpacing={'0.03em'}
                fontSize={{ lg: '13px', base: '10px' }}
                lineHeight={'18.3px'}
                fontWeight={'400'}
                maxW={'417px'}
                width={'100%'}
                justifyContent={{ md: 'space-between', base: 'flex-start' }}
                alignItems={'center'}
                ml={{ md: 'auto' }}
                mt={'16px'}
                flexWrap={'wrap'}
                gap={{ md: '0px', base: '10px' }}>
                <Link href="#" variant="linkPrimary">
                  Legal Disclaimer
                </Link>
                <Link href="#" variant="linkPrimary">
                  Cookies & Privacy Policy
                </Link>
                <Link href="#" variant="linkPrimary">
                  Copyright Policy
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default FooterBottom;
