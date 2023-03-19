import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import WidgetWrapper from '../../core/CommonComponents/Widgets/WidgetWrapper';
import GlobalSearchResults from './GlobalSearchResults';
import MainTabs from './tabs';
import MarketplaceSearchResults from './MarketplaceSearchResults';
import PeopleSearchResults from './PeopleSearchResults';
import ShopSearchResults from './ShopSearchResults';
import MarketplaceTabs from './tabs/MarketplaceTabs';
import PeopleTabs from './tabs/PeopleTabs';
import ShopTabs from './tabs/ShopTabs';
import { UserTypes, quickLinks, suggestedUsers } from '../../../constants/widgets';
import { getFileUrl } from '../../../utils/getFileUrl';
import { BoxWrapper, UserAvatar } from '../../core/CommonComponents';

enum TabTypes {
  GLOBAL = 'Global',
  PEOPLE = 'People',
  MARKETPLACE = 'Marketplace',
  SHOP = 'Shop'
}

const Components = {
  [TabTypes.GLOBAL]: GlobalSearchResults,
  [TabTypes.PEOPLE]: PeopleSearchResults,
  [TabTypes.MARKETPLACE]: MarketplaceSearchResults,
  [TabTypes.SHOP]: ShopSearchResults
};

const Tabs = {
  [TabTypes.GLOBAL]: MainTabs,
  [TabTypes.PEOPLE]: PeopleTabs,
  [TabTypes.MARKETPLACE]: MarketplaceTabs,
  [TabTypes.SHOP]: ShopTabs
};

const SearchComponent = () => {
  const [activeComponent, setActiveComponent] = useState<string>(TabTypes.GLOBAL);
  const [activeTab, setActiveTab] = useState<string>(TabTypes.GLOBAL);

  const ActiveComponent = useMemo(() => Components[activeComponent], [activeComponent]);
  const ActiveTab = useMemo(() => Tabs[activeTab], [activeTab]);

  const handleActiveTab = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      setActiveComponent(tab);
    },
    [activeTab]
  );

  return (
    <BoxWrapper styles={{marginTop:"20px"}}>
      <Box
        display="flex"
        flexDirection={{base:"column-reverse",lg:"row"}}
        justifyContent="space-between"
        w={{ sm: '90%' }}
        m="0 auto">
        <Box bg="#091320" w={{base:"100%",lg:"67%"}}>
          <ActiveTab {...{ handleActiveTab }} />
          <ActiveComponent/>
        </Box>
        <Box w={{base:"100%",lg:"30%"}}>
          <WidgetWrapper title="What’s happening">
            <Box py="20px" fontFamily="body" borderBottom="1px solid #4A607C">
              <Flex>
                <Box mr="10px" fontWeight="500" fontSize="16px" lineHeight="22px" color="#F2F2F2">
                  <Text mb="5px">News . 2 minutes ago</Text>
                  <Text>
                    Looking at the claim that discourse around ‘White Previlege’ can hamper white
                    working class students.
                  </Text>
                </Box>
                <Box w="64px" h="64px" borderRadius="10px" display={"flex"} flexShrink="0">
                  <Image
                    w="64px"
                    h="64px"
                    overflow="hidden"
                    src="https://images.unsplash.com/photo-1667115308154-35b1b615f5f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                  />
                </Box>
              </Flex>
              <Text mt="20px" fontWeight="500" fontSize="16px" lineHeight="18px" color="#F2F2F2">
                Treanding with{' '}
                <Text as="span" color="#FF9900">
                  #WhitePrevilege
                </Text>
              </Text>
            </Box>
            <Box pb="20px" my="20px" position="relative" borderBottom="1px solid #4A607C">
              <Image
                pos="absolute"
                top="0"
                right="0"
                src={getFileUrl('marketplace-assets/assets/images/ThreeDots.png')}
              />
              <Box>
                <Text fontWeight="500">Trending in United Kingdom</Text>
                <Text color="#FF9900" my="10px">
                  #CryptoCash
                </Text>
                <Text>17.1K Pinned</Text>
              </Box>
            </Box>
            <Box my="20px" position="relative">
              <Image
                pos="absolute"
                top="0"
                right="0"
                src={getFileUrl('marketplace-assets/assets/images/ThreeDots.png')}
              />
              <Box>
                <Text fontWeight="500">Trending in United Kingdom</Text>
                <Text color="#FF9900" my="10px">
                  #CryptoCash
                </Text>
                <Text>17.1K Pinned</Text>
              </Box>
            </Box>
            <Flex alignItems="center" cursor="pointer">
              <Text color="#1DB4F4" fontSize="14px" fontWeight="500" lineHeight="21px" mr="10px">
                See More
              </Text>
              <ChevronDownIcon color="#8A9099" />
            </Flex>
          </WidgetWrapper>
          <WidgetWrapper title="You might like">
            <Box my="10px">
              {suggestedUsers.map((user: UserTypes) => (
                <Flex my="20px" justifyContent="space-between" alignItems="center">
                  <Box display="flex" alignItems="center" justifyContent="flex-start">
                    <UserAvatar {...{ user }} />
                    <Box ml="10px">
                      <Text color="#F0FCFB" fontSize="14px" fontWeight="600">
                        {user.username}
                      </Text>
                      {user.isPromoted && (
                        <Flex>
                          <Image
                            cursor="pointer"
                            src={getFileUrl('marketplace-assets/assets/images/Color.svg')}
                            mr="8px"
                          />
                          <Text color="#C6C9CC" fontSize="12px" fontWeight="500">
                            Promoted
                          </Text>
                        </Flex>
                      )}
                    </Box>
                  </Box>
                  <Button
                    py="8px"
                    px="20px"
                    bg="transparent"
                    borderRadius="50px"
                    border="1px solid #1DB4F4"
                    color="#1DB4F4"
                    fontSize="15px">
                    Follow
                  </Button>
                </Flex>
              ))}
              <Flex alignItems="center" cursor="pointer">
                <Text color="#1DB4F4" fontSize="14px" fontWeight="500" lineHeight="21px" mr="10px">
                  See More
                </Text>
                <ChevronDownIcon color="#8A9099" />
              </Flex>
            </Box>
          </WidgetWrapper>
          <WidgetWrapper title="Quick links">
            <Flex flexDirection="column">
              {quickLinks.map((link: { id: number; text: string; route: string }) => (
                <Box
                  _last={{
                    border: 'none'
                  }}
                  key={link.id}
                  py="16px"
                  color="#F9FAFC"
                  borderBottom="1px solid #4A607C"
                  cursor="pointer">
                  {link.text}
                </Box>
              ))}
            </Flex>
          </WidgetWrapper>
        </Box>
      </Box>
    </BoxWrapper>
  );
};

export default SearchComponent;
