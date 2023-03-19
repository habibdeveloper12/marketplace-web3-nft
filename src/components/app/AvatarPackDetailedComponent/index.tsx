import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { BoxWrapper, ProductPropertyTab, SuggestionSection } from '../../core/CommonComponents';
import AvatarPackBanner from './AvatarPackBanner';
import { avatarPackTabsData, avatarpackTabData } from '../../../constants/productDetailed';

const AvatarPackDetailedComponent = () => {
  return (
    <BoxWrapper>
      <Container maxW={'1360px'} px="20px">
        <AvatarPackBanner />
        <ProductPropertyTab tabsData={avatarPackTabsData} avatarpackTabData={avatarpackTabData} />
        <Box mt="40px">
          <SuggestionSection />
        </Box>
      </Container>
    </BoxWrapper>
  );
};

export default AvatarPackDetailedComponent;
