import { useState } from 'react';
import { Box, Button, Flex, Img, Text, Textarea } from '@chakra-ui/react';
import { getFileUrl } from '../../../utils/getFileUrl';

const BlankPage = () => {
  return (
    <Box p="40px" w={{ base: '100%', md: '100%', lg: '60%' }}>
      <Text
        as="h4"
        mb="20px"
        color="primaryWhite"
        fontWeight={'500'}
        fontSize="24px"
        lineHeight={'36px'}>
        Write a review for us
      </Text>
      <Img alt="img" src={getFileUrl('marketplace-assets/assets/images/starreview.png')}></Img>
      <Text as="h4" color="primaryWhite" fontWeight={'500'} fontSize="28px" lineHeight={'51px'}>
        Thank you for submitting your valuable review.
      </Text>
      <Button
        border="1px solid rgba(255, 255, 255, 0.5)"
        mt="24px"
        p="12px 48px"
        fontWeight={'600'}
        color="rgba(255, 255, 255, 0.3)"
        fontSize="15px"
        lineHeight={'22px'}
        borderRadius={'2px'}
        bg="transparent"
        colorScheme={'transparent'}>
        SUBMIT
      </Button>
    </Box>
  );
};
function SignUpform({ setisformsubmited }) {
  return (
    <>
      <Box p="40px" w={{ base: '100%', md: '100%', lg: '60%' }}>
        <Text
          as="h4"
          mb="20px"
          color="primaryWhite"
          fontWeight={'500'}
          fontSize="24px"
          lineHeight={'36px'}>
          Write a review for us
        </Text>
        <Textarea
          bg="#192C45"
          border="none"
          outline={'none'}
          resize="none"
          borderRadius={'2px'}
          maxW="720px"
          w="100%"
          color="white"
          h="140px"
          size="lg"
        />
        <Button
          border="1px solid #FFFFFF"
          onClick={() => {
            setisformsubmited(true);
          }}
          mt="24px"
          p="12px 48px"
          fontWeight={'600'}
          fontSize="15px"
          color="white"
          lineHeight={'22px'}
          borderRadius={'2px'}
          bg="transparent"
          colorScheme={'transparent'}>
          SUBMIT
        </Button>
      </Box>
    </>
  );
}

const ReviewSection = () => {
  const [isformsubmited, setisformsubmited] = useState(false);
  return (
    <Box border="1px solid #667AE4" bg="colorPrimaryDark" mt="60px" backdropBlur={'27px'}>
      <Flex
        justifyContent={'space-between'}
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
        {isformsubmited ? <BlankPage /> : <SignUpform setisformsubmited={setisformsubmited} />}

        <Box>
          <Img
            alt="img"
            w="100%"
            src={getFileUrl('marketplace-assets/assets/images/handcover.png')}></Img>
        </Box>
      </Flex>
    </Box>
  );
};

export default ReviewSection;
