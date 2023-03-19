import {
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Flex,
  Img,
  Text,
  Checkbox,
  useRadioGroup
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import '@fontsource/poppins';
import React, { useCallback, useMemo, useState } from 'react';
import { Dropdown } from './Dropdown';
import SelectInputWrapper from './SelectInputWrapper';
import StatusCard from './StatusCard';
import SingleSelectionCheckbox from '../../core/CommonComponents/SingleSelectionCheckbox';
import AccordionWrapper from './AccordionWrapper';
import Footwear from './Footwear';
import Equipments from './Equipments';
import Accessories from './Accessories';
import Clothing from './Clothing';
import Sleeves from './Sleeves';
import {
  allStatus,
  collectionsArray,
  currencies,
  prices
} from '../../../constants/marketplaceData';

const None = () => <></>;

const Components = {
  ['NONE']: None,
  ['ACCESSORIES']: Accessories,
  ['CLOTHING']: Clothing,
  ['FOOTWEAR']: Footwear,
  ['EQUIPMENTS']: Equipments,
  ['SLEEVES']: Sleeves
};

const SearchPanel = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [collections, setCollections] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('NONE');
  const [category, setCategory] = useState<string>('Select category');
  const [categoryQuery, setCategoryQuery] = useState<string>('');

  const handleSelect = useCallback((value: string) => {
    setSelectedStatus(value);
  }, []);

  const { getRadioProps } = useRadioGroup({
    onChange: handleSelect
  });
  const handleSearchTerm = useCallback((e:any) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleCollections = useCallback((event:any) => {
    setCollections(event.target.value);
  }, []);

  const handleCollectionSuggestions = useCallback((collection:any) => {
    setCollections(collection);
  }, []);

  const handleActiveCategory = useCallback((category:any, label:any) => {
    setActiveCategory(category);
    setCategory(label);
  }, []);

  const ActiveCategoryComponent = useMemo(() => Components[activeCategory], [activeCategory]);

  return (
    <Box w={{ base: '100%', md: '100%', lg: '25%' }}>
      <Box p="24px" bg="#0B1926" mb="24px" borderRadius={'4px'}>
        <Text
          as="span"
          color="#FFDF6C"
          fontSize={'14px'}
          fontWeight="500"
          lineHeight={'21px'}
          letterSpacing="0.1em"
          textTransform={'uppercase'}>
          SEARCH
        </Text>
        <InputGroup bg="#14283D" mt="10px" color="white" h="54px" alignItems={'center'}>
          <Input
            onChange={(e) => handleSearchTerm(e)}
            placeholder="Search collectibles here"
            color="white"
            border={'none'}
            outline="none"
            focusBorderColor="none"
            borderRadius={'2px'}
            _placeholder={{ color: '#CFCFE7' }}
          />
          <InputRightElement top="8px" children={<SearchIcon color="rgba(29, 180, 244, 1)" />} />
        </InputGroup>
      </Box>
      <Box px="18px" bg="#0B1926 " borderRadius={'4px'}>
        <AccordionWrapper label="Category">
          <Dropdown {...{ handleActiveCategory, category }} />
          <ActiveCategoryComponent {...{ categoryQuery, setCategoryQuery }} />

          {/* <SelectInputWrapper {...{ options: ['hello', 'hi'], placeholder: 'Select category' }} /> */}
        </AccordionWrapper>
        <AccordionWrapper label="Collections">
          <>
            <InputGroup bg="#14283D" mt="5px" color="white" h="54px" alignItems={'center'}>
              <Input
                value={collections}
                onChange={(e) => handleCollections(e)}
                placeholder="Search collections"
                color="white"
                border={'none'}
                outline="none"
                focusBorderColor="none"
                borderRadius={'2px'}
                _placeholder={{ color: '#CFCFE7' }}
              />
              <InputRightElement
                top="8px"
                children={<SearchIcon color="rgba(29, 180, 244, 1)" />}
              />
            </InputGroup>

            <Flex mt="16px" pb="24px" flexWrap={'wrap'} w="100%">
              {collectionsArray.map((collection) => (
                <Box
                  onClick={() => handleCollectionSuggestions(collection.label)}
                  mr="8px"
                  w="auto"
                  mb="8px"
                  bg="#192C45"
                  borderRadius={'40px'}
                  p="2px 10px 2px 2px"
                  display={'flex'}
                  alignItems="center">
                  <Img mr="6px" src={collection?.imageUrl}></Img>
                  <Text
                    as="span"
                    color="#99BBE2"
                    fontFamily={'Poppins'}
                    fontSize="13px"
                    fontWeight={'500'}>
                    {collection?.label}
                  </Text>
                </Box>
              ))}
            </Flex>
          </>
        </AccordionWrapper>
        <AccordionWrapper label="Status">
          <Flex flexWrap={'wrap'} pb="14px" mb="10px">
            {allStatus.map((status) => {
              const value = status;
              const radio = getRadioProps({ value });
              return (
                <SingleSelectionCheckbox key={value} {...radio}>
                  <StatusCard {...{ data: status, selectedStatus }} />
                </SingleSelectionCheckbox>
              );
            })}
          </Flex>
        </AccordionWrapper>
        <AccordionWrapper label="Price">
          <Flex flexDirection={'column'} pb="20px">
            {prices.map((lin) => (
              <Box
                mb="12px"
                bg="#14283D"
                width="100%"
                borderRadius={'2px'}
                color="white"
                p="13px 18px"
                display={'flex'}
                alignItems="center">
                <Checkbox
                  value={lin.Price}
                  onChange={(e) => console.log(e.target.value)}
                  color="white"
                  outline={'none'}
                  borderRadius={'4px'}
                  size="lg"
                  h="24px"
                  w="24px"
                  borderColor={'#5C789A '}
                  bg="transparent"
                  _checked={{
                    border: '2px solid #A5F3FC',
                    bg: '#1673FF',
                    h: '24px',
                    w: '24px'
                  }}>
                  <Text
                    as="span"
                    fontFamily="dinFonts"
                    fontSize={'16px'}
                    fontWeight="700px"
                    display="flex"
                    lineHeight={'28px'}
                    width="max-content">
                    {lin.Price}
                  </Text>
                </Checkbox>
              </Box>
            ))}
          </Flex>
        </AccordionWrapper>

        <AccordionWrapper label="Supported currencies" isLastElement={true}>
          <>
            <Flex mb="16px" flexWrap={'wrap'}>
              {currencies.map((currency) => (
                <Box
                  mr="16px"
                  bg="transparent"
                  borderRadius={'40px'}
                  mb="12px"
                  color="white"
                  display={'flex'}
                  alignItems="center">
                  <Img mr="4px" src={currency.icon}></Img>

                  <Text
                    as="span"
                    fontFamily="Poppins"
                    fontSize={'14px'}
                    fontWeight="600px"
                    lineHeight={'21px'}>
                    {currency.label}
                  </Text>
                </Box>
              ))}
            </Flex>
            <Text as="p" color="#526F93" fontSize={'13px'} lineHeight="20px" fontWeight={'400'}>
              You can buy the products with the above currencies
            </Text>
          </>
        </AccordionWrapper>
      </Box>
    </Box>
  );
};

export default SearchPanel;
