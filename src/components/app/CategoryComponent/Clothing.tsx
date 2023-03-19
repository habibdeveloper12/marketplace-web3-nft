import { Box, Flex, Image, Text, useRadioGroup } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import SingleSelectionCheckbox from '../../core/CommonComponents/SingleSelectionCheckbox';

const clothings = [
  {
    id: 1,
    label: 'Outfit'
  },
  {
    id: 2,
    label: 'Top'
  },
  {
    id: 3,
    label: 'Bottoms'
  },
  {
    id: 4,
    label: 'Dresses'
  },
  {
    id: 5,
    label: 'Outerwear'
  }
];

const Clothing = ({ categoryQuery, setCategoryQuery }: any) => {
  //   const [selectedStatus, setSelectedStatus] = useState<string>('');

  const handleSelect = useCallback((value: string) => {
    setCategoryQuery(value);
  }, []);

  const { getRadioProps } = useRadioGroup({
    onChange: handleSelect
  });

  return (
    <Flex mt="16px" pb="24px" flexWrap={'wrap'} w="100%">
      {clothings.map((clothing) => {
        const value = clothing.label;
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
              bg={categoryQuery === clothing.label ? 'blue.100' : '#192C45'}
              borderRadius={'40px'}
              p="2px 10px 2px 2px"
              display={'flex'}
              alignItems="center">
              <Image mr="6px" src="https://cdn.enochdev.com/marketplace/assets/blackimage.svg" />
              <Text
                as="span"
                color={categoryQuery === clothing.label ? '#fff' : '#99BBE2'}
                fontFamily={'Poppins'}
                fontSize="13px"
                fontWeight={'500'}>
                {clothing?.label}
              </Text>
            </Box>
          </SingleSelectionCheckbox>
        );
      })}
    </Flex>
  );
};

export default Clothing;
