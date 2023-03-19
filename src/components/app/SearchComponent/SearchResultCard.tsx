import { Box, Flex, Text, Image, Button, Center, Avatar, AvatarBadge } from '@chakra-ui/react';
import { getFileUrl } from '../../../utils/getFileUrl';
import { UserAvatar } from '../../core/CommonComponents';

const user = {
  username: '@helloworld',
  mutualFriends: 7,
  profilePicture: '',
  shortDescription:
    'Entrepreneur always eager to learn more and contribute as much as possible into making a better world. #crypto beginner & #nft creator #startup enthusiast'
};

interface Props {
  cardType?: string;
  user: any;
}

const SearchResultCard = ({ cardType, user }: Props) => {
  return (
    <Box p="24px" bg="#192D46" borderRadius="4px" mb="10px">
      <Flex >
        <UserAvatar {...{ user }} />

        <Flex alignItems={{base:"end",lg:"center"}} color="#fff" ml="10px" gap={{base:"10px"}} flexDirection={{base:"column",lg:"row"}}>
          <Box>
            <Flex alignItems="center" >
              <Image
                w="18px"
                h="12px"
                mr="8px"
                src={getFileUrl('marketplace/marketplace/assets/Vectorr.png')}
              />
              <Text color="#81F7FF" fontSize="12px">
                8 Mutual friends
              </Text>
            </Flex>
            <Flex my="5px">
              <Text color="#99BBE2" lineHeight="21px" fontWeight="600" fontSize="14px">
                @helloworld
              </Text>
              <Center
                ml="8px"
                borderRadius="4px"
                bg="#1A4869"
                fontSize="11px"
                color="#1DB4F4"
                px="10px">
                Follows You
              </Center>
            </Flex>
            <Text fontSize="13px" lineHeight="20px" fontWeight="400">
              Entrepreneur always eager to learn more and contribute as much as possible into making
              a better world. #crypto beginner & #nft creator #startup enthusiast
            </Text>
          </Box>
          <Flex ml={{base:"0px",lg:"20px"}}>
            <Button
              py="10px"
              px="20px"
              bg="transparent"
              borderRadius="50px"
              border="1px solid #1DB4F4"
              color="#1DB4F4"
              mr="10px">
              Follow
            </Button>
            {cardType === 'shop' && (
              <Button
                py="10px"
                px="30px"
                bg="transparent"
                borderRadius="50px"
                border="1px solid #42CE1F"
                color="#42CE1F"
                textTransform="uppercase">
                Visit Shop
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SearchResultCard;
