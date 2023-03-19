import { Box, Flex, Image, Text, useRadioGroup } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import SingleSelectionCheckbox from '../../core/CommonComponents/SingleSelectionCheckbox';

const AccessoriesArr = [
  {
    id: 1,
    label: 'Headwear'
  },
  {
    id: 2,
    label: 'Eyewear'
  },
  {
    id: 3,
    label: 'Tattoos'
  },
  {
    id: 4,
    label: 'Jewellery'
  },
  {
    id: 5,
    label: 'Mask'
  },
  {
    id: 6,
    label: 'Bags'
  },
  {
    id: 7,
    label: 'Hair'
  },
  {
    id: 8,
    label: 'Facial Hair'
  }
];

const Accessories = ({ categoryQuery, setCategoryQuery }: any) => {
  const handleSelect = useCallback((value: string) => {
    setCategoryQuery(value);
  }, []);

  const { getRadioProps } = useRadioGroup({
    onChange: handleSelect
  });

  return (
    <Flex mt="16px" pb="24px" flexWrap={'wrap'} w="100%">
      {AccessoriesArr.map((accessory) => {
        const value = accessory.label;
        const radio = getRadioProps({ value });
        return (
          <SingleSelectionCheckbox key={value} {...radio}>
            <Box
              //   onClick={() => handleCollectionSuggestions(collection.label)}
              mr="8px"
              my="4px"
              w="auto"
              cursor="pointer"
              //   mb="8px"
              bg={categoryQuery === accessory.label ? 'blue.100' : '#192C45'}
              borderRadius={'40px'}
              p="2px 10px 2px 2px"
              display={'flex'}
              alignItems="center">
              <Image mr="6px" src="https://cdn.enochdev.com/marketplace/assets/blackimage.svg" />
              <Text
                as="span"
                color={categoryQuery === accessory.label ? '#fff' : '#99BBE2'}
                fontFamily={'Poppins'}
                fontSize="13px"
                fontWeight={'500'}>
                {accessory?.label}
              </Text>
            </Box>
          </SingleSelectionCheckbox>
        );
      })}
    </Flex>
  );
};

export default Accessories;
