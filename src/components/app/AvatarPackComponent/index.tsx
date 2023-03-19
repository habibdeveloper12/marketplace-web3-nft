import React from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Flex } from '@chakra-ui/react';
import { BoxWrapper, Banner, CategoryLeft, NftCardWrapper } from '../../core/CommonComponents';
import { avatarPackData } from '../../../constants/nft';
const AvatarPackComponent = () => {
  const router = useRouter();
  return (
    <BoxWrapper>
      <Container variant="mainContainer">
        <Banner
          image={("marketplace-assets/assets/images/avater-packs-main-banner.png")}
          Tag="CATEGORIES"></Banner>
        <Flex
          mb={'142px'}
          mt={'40px'}
          gap="24px"
          direction={{ base: 'column', md: 'column', lg: 'row' }}>
          <CategoryLeft />

          <Box w={{ base: '100%', md: '100%', lg: '75%' }}>
            <Flex mb="8px" flexWrap={'wrap'} justifyContent="flex-start" mx={'-12px'}>
              {
                
                avatarPackData.map((avatar) => {
                  return (
                    <NftCardWrapper
                      key={avatar.id}
                      {...avatar}
                      onCardButtonClick={() => router.push(`/avatar-pack/${avatar.id}`)}
                    />
                  );
                })}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </BoxWrapper>
  );
};

export default AvatarPackComponent;
