import { Box, Container, Flex, Image, Img, Input, Text } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { SelectInputWrapper } from '../../core/CommonComponents';
import { PaginationBtn } from '../../core/Pagination/PaginationBtn';
import { Banner } from '../Category/Banner';
import CollectionCard from './CollectionCard';
import FilterDropdown from './FilterDropdown';
import SortingDropdown from './SortingDropdown';

const CollectionCardinfo = [
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/sanhokamps.webp',
    CardTag: 'Enoch Citizen',
    Value: '$517K'
  },

  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-2.webp',
    CardTag: 'HArmony',
    Value: '$517K'
  },
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-3.webp',
    CardTag: 'ENdurance',
    Value: '$517K'
  },
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-4.webp',
    CardTag: '2060',
    Value: '$517K'
  },
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-5.webp',
    CardTag: 'Hong kong ',
    Value: '$517K'
  },
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-6.webp',
    CardTag: 'Siberia',
    Value: '$517K'
  },
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-7.webp',
    CardTag: 'Purple',
    Value: '$517K'
  },
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-8.webp',
    CardTag: 'QuantumFLEET',
    Value: '$517K'
  },
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-9.webp',
    CardTag: 'Citadel',
    Value: '$517K'
  }
];
const CollectionLastinfo = [
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-10.webp',
    CardTag: 'DIstrict 89',
    Value: '$517K'
  },
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-11.webp',
    CardTag: 'Babylon',
    Value: '$517K'
  },
  {
    Hcount: '000',
    ViewCount: '00',
    TotalItems: 'TOTAL items -5600',
    CardImage: 'https://cdn.enochdev.com/marketplace/assets/coolection-12.webp',
    CardTag: 'Tokyo',
    Value: '$517K'
  }
];

const filterOptions = ['Cyber Punk', 'RPG', 'Anime', 'Sci-fi'];
const sortingOptions = [
  'Relevance (Default)',
  'Top Rated',
  'Latest',
  'Price low to high',
  'Price high to low',
  'Popular'
];

export const CollectionMainPage = () => {
  const [filterOption, setFilterOption] = useState('');
  const [sortingOption, setSortingOption] = useState(sortingOptions[0]);

  const handleFilter = useCallback(
    (obj: any) => {
      setFilterOption(obj?.value);
    },
    [filterOption]
  );

  const handleSorting = useCallback(
    (obj: any) => {
      setSortingOption(obj?.value);
    },
    [sortingOption]
  );

  return (
    <>
      <Container maxW={'1790px'} px="20px" position={'relative'} zIndex="999">
        <Banner image="https://cdn.enochdev.com/marketplace/assets/banproducts.webp" />
        <Box my="40px">
          <Box textAlign={'center'} mb="24px">
            <Text
              as="h1"
              fontSize={{ base: '14px', md: '18px' }}
              fontWeight={'300'}
              letterSpacing="0.3em"
              mb="7px"
              lineHeight="27px"
              color="#FFDF6C"
              textTransform={'uppercase'}>
              Follow the trend
            </Text>
            <Text
              as="h1"
              fontSize={{ base: '20px', md: '40px' }}
              fontWeight={'600'}
              letterSpacing="0.08em"
              lineHeight="60px"
              color="#F0FCFB"
              textTransform={'uppercase'}>
              Explore Collections{' '}
            </Text>
          </Box>
          <Box
            bg="#112334"
            borderRadius={'4px'}
            p="24px"
            display={'flex'}
            justifyContent="space-between"
            alignItems={'center'}
            flexDirection={{ base: 'column', md: 'row' }}>
            <Box mr="10px" bg="#112334" borderRadius={'2px'} p="10px 24px" maxW={'861px'} w="100%">
              <Flex flexDirection={{ base: 'column', md: 'row' }}>
                <SelectInputWrapper
                  {...{
                    placeholder: 'All fliters',
                    options: filterOptions,
                    onChange: handleFilter
                  }}
                />

                <Box
                  px="12px"
                  maxW={'647px'}
                  mt={{ base: '10px', md: '0px' }}
                  ml={{ base: '0px', md: '16px' }}
                  w="100%"
                  borderRadius={'6px'}
                  display={'flex'}
                  justifyContent="space-between"
                  border="1px solid #8F9099">
                  <Input
                    px="0px"
                    w="100%"
                    placeholder="Search  by collection name"
                    border="none"
                    outline={'none'}
                    color="#879FAF"
                  />
                  <Image src="https://cdn.enochdev.com/marketplace/assets/sargioramos.svg"></Image>
                </Box>
              </Flex>
            </Box>
            <SelectInputWrapper
              {...{ placeholder: sortingOption, options: sortingOptions, onChange: handleSorting }}
            />
          </Box>
        </Box>
        <Flex justifyContent={'space-between'} flexWrap="wrap">
          <CollectionCard Collect={CollectionCardinfo} />
        </Flex>
        <Box mb="28px">
          <Img
            src="https://cdn.enochdev.com/marketplace/assets/winprizecasha.webp"
            borderRadius={'4px'}
            w="100%"></Img>
        </Box>
        <Flex justifyContent={'space-between'} flexWrap="wrap">
          <CollectionCard Collect={CollectionLastinfo} />
        </Flex>
        <PaginationBtn />
      </Container>
    </>
  );
};

export default CollectionMainPage;

// import React from 'react';
// import { Box, Container, Flex, Img, Input, Text, Image, Heading } from '@chakra-ui/react';
// import { useRouter } from 'next/router';
// import {
//   Banner,
//   BoxWrapper,
//   NftCardWrapper,
//   Dropdown,
//   Pagination
// } from '../../core/CommonComponents';
// import { collectionData, collectionLatestData } from '../../../constants/nft';
// import { getFileUrl } from '../../../utils/getFileUrl';

// const CollectionComponent = () => {
//   const router = useRouter();

//   return (
//     <BoxWrapper>
//       <Container color={'primaryWhite'} variant={'mainContainer'} px="20px">
//         <Banner image={("marketplace-assets/assets/images/banpistol.png")} Tag="COLLECTION" />
//         <Box my="40px">
//           <Box textAlign={'center'} mb="24px">
//             <Text variant="textPrimary">Follow the trend</Text>
//             <Heading variant="headingPrimary">Collections</Heading>
//           </Box>
//           <Box
//             bg="colorPrimaryDark"
//             borderRadius={'4px'}
//             p="24px"
//             display={'flex'}
//             justifyContent="space-between"
//             alignItems={'center'}
//             gap="10px"
//             flexDirection={{ base: 'column', md: 'row' }}>
//             <Box bg="#192C45" borderRadius={'2px'} p="10px 24px" maxW={'861px'} w="100%">
//               <Flex>
//                 <Dropdown
//                   style={{ width: '150px' }}
//                   placeholder="All Filters"
//                   options={Array(6).fill('.......')}
//                 />
//                 <Box w="100%" display={'flex'} justifyContent="space-between">
//                   <Input
//                     w="100%"
//                     placeholder="Search by collection name"
//                     border="none"
//                     outline={'none'}
//                     _focus={{ ouline: 'none' }}
//                     color="#879FAF"
//                     _focusVisible={{ outline: 'none' }}></Input>
//                   <Image alt="img" src={getFileUrl("marketplace-assets/assets/images/searchicons.svg")}></Image>
//                 </Box>
//               </Flex>
//             </Box>
//             <Dropdown
//               style={{ width: '150px' }}
//               placeholder="Latest"
//               options={collectionLatestData}
//             />
//           </Box>
//         </Box>
//         <Flex justifyContent={'space-between'} flexWrap="wrap">
//           {collectionData.map((collection) => {
//             return (
//               <NftCardWrapper
//                 key={collection._id}
//                 {...collection}
//                 onCardButtonClick={() => router.push(`/collection/${collection.CardTag}`)}
//               />
//             );
//           })}
//         </Flex>
//         <Box mb="28px">
//           <Img src={getFileUrl("marketplace-assets/assets/images/outcaste.png")} borderRadius={'4px'} w="100%"></Img>
//         </Box>
//         <Pagination />
//       </Container>
//     </BoxWrapper>
//   );
// };

// export default CollectionComponent;
