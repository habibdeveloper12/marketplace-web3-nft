import React from 'react';
import { Box, Flex, Img, Text } from '@chakra-ui/react';
import { getFileUrl } from "../../../utils/getFileUrl";

const UserDashboard: React.FC = () => {
  return (
    <Box
      opacity={0.8}
      bg="#0A1F37"
      border="1px solid #667AE4"
      style={{
        backdropFilter: 'blur(10px) contrast(200%)'
      }}
      width={{ base: '100%', lg: '1220px' }}
      height={{ base: '100%', lg: '118px' }}
      borderRadius={{ base: '0', lg: '60px' }}
      position="absolute"
      display="flex"
      flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
      padding={{ base: '0px', lg: '10px' }}
      justifyContent={{ base: 'center', lg: 'space-between' }}
      bottom={{ base: '0', lg: '-7%' }}
      left={{ lg: '6%' }}>
      <Flex
        gap={{ base: '10px', lg: '35px' }}
        alignItems={{ base: 'center' }}
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}>
        <Img
          height={{ base: '70px', lg: 'auto' }}
          width={{ base: '70px', lg: 'auto' }}
          alt="img"
          src={getFileUrl('marketplace-assets/assets/images/Group.png')}
        />
        <Flex flexDirection={{ base: 'column', lg: 'column' }} gap="10px">
          <Text
            textTransform="uppercase"
            lineHeight={{ base: '23px', lg: '41px' }}
            color="#ffff"
            fontSize={{ base: '20px', lg: '32px' }}
            fontWeight="bold">
            @Natsuki satom
          </Text>
          <Flex
            gap="10px"
            textTransform="uppercase"
            fontWeight="700"
            fontSize="20px"
            lineHeight="26px">
            <Text color="white">Earned</Text>
            <Text color="#42CE1F">$558,554</Text>
          </Flex>
        </Flex>
      </Flex>

      <Box
        display={'flex'}
        mr={{ base: '8px', lg: '30px' }}
        justifyContent={{ base: 'end', lg: 'center' }}
        alignItems="center"
        gap={{ base: '12px', lg: '8px' }}>
        <Box
          w={{ base: '24px', lg: '32px' }}
          h={{ base: '24px', lg: '32px' }}
          display={'flex'}
          justifyContent="center"
          alignItems={'center'}
          bg="#25253A"
          border="1px solid #414165"
          borderRadius={'2px'}>
          <Img alt="sharer" src={getFileUrl("marketplace-assets/assets/images/sharer.svg")}></Img>
        </Box>
        <Box
          w={{ base: '40px', lg: '56px' }}
          h={{ base: '24px', lg: '32px' }}
          display={'flex'}
          justifyContent="center"
          alignItems={'center'}
          bg="#25253A"
          border="1px solid #414165"
          borderRadius={'2px'}>
          <Img alt="mendo" src={getFileUrl("marketplace-assets/assets/images/mendo.svg")} mr="7px"></Img>
          <Text as="span" color="white">
            92
          </Text>
        </Box>
        <Box
          w={{ base: '20px', lg: '32px' }}
          h={{ base: '20px', lg: '32px' }}
          display={'flex'}
          justifyContent="center"
          alignItems={'center'}
          bg="#25253A"
          border="1px solid #414165"
          borderRadius={'2px'}>
          <Img alt="dotting" src={getFileUrl("marketplace-assets/assets/images/dotting.svg")}></Img>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
