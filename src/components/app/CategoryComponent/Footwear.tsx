import { Box, Flex, Image, Text, useRadioGroup } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import SingleSelectionCheckbox from '../../core/CommonComponents/SingleSelectionCheckbox';

const footwears = [
  {
    id: 1,
    label: 'Vehicle'
  },
  {
    id: 2,
    label: 'Weapon'
  },
  {
    id: 3,
    label: 'Armour'
  },
  {
    id: 4,
    label: 'Body Attachments'
  }
];

const Footwear = ({ categoryQuery, setCategoryQuery }: any) => {
  const handleSelect = useCallback((value: string) => {
    setCategoryQuery(value);
  }, []);

  const { getRadioProps } = useRadioGroup({
    onChange: handleSelect
  });

  return (
    <Flex mt="16px" pb="24px" flexWrap={'wrap'} w="100%">
      {footwears.map((footwear) => {
        const value = footwear.label;
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
              bg={categoryQuery === footwear.label ? 'blue.100' : '#192C45'}
              borderRadius={'40px'}
              p="2px 10px 2px 2px"
              display={'flex'}
              alignItems="center">
              <Image mr="6px" src="https://cdn.enochdev.com/marketplace/assets/blackimage.svg" />
              <Text
                as="span"
                color={categoryQuery === footwear.label ? '#fff' : '#99BBE2'}
                fontFamily={'Poppins'}
                fontSize="13px"
                fontWeight={'500'}>
                {footwear?.label}
              </Text>
            </Box>
          </SingleSelectionCheckbox>
        );
      })}
    </Flex>
  );
};

export default Footwear;
