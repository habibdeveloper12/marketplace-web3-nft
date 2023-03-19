import React, { useCallback, useRef, useState } from 'react';
import { Box, InputGroup, InputRightElement, Flex, Img, Text, useRadioGroup } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Dropdown } from './Dropdown';
import { InputWrapper } from './InputWrapper';
import { RadioCard } from "./";
import { categoryData, categoryOptions } from "../../../constants/category";
import '@fontsource/poppins';
import { getFileUrl } from '../../../utils/getFileUrl';

export const CategoryLeft = () => {
  const [sortingPrize, setSortingPrize] = useState<string>('');
  const radioRef = useRef();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'status',
    defaultValue: '',
    onChange: useCallback(
      (value) => {
        setSortingPrize(value);
      },
      [sortingPrize]
    )
  });

  return (
    <Box w={{ base: '100%', md: '100%', lg: '25%' }}>
      <Box p="24px" bg="colorPrimaryDark" mb="24px">
        <Text
          as="span"
          color="#9FFFF3"
          fontSize={'14px'}
          fontWeight="600"
          lineHeight={'21px'}
          letterSpacing="0.1em"
          textTransform={'uppercase'}>
          SEARCH
        </Text>
        <InputGroup bg="#192C45" mt="10px" color="white">
          <InputWrapper
            placeholder="Search collectibles here"
            color='#7B82A8'
            styles={{
              focusBorderColor:"none",
              borderRadius:'2px',
            }}
          />
          <InputRightElement>
          <SearchIcon color="#7B82A8" />
          </InputRightElement>  
        </InputGroup>
      </Box>
      <Box p="24px" bg="colorPrimaryDark">
        <Box borderBottom={'1px solid #4A607C'} mb="24px" pb="24px">
          <Text
            as="h4"
            color="#9FFFF3"
            mb="12px"
            fontSize={'14px'}
            fontWeight="600"
            lineHeight={'21px'}
            letterSpacing="0.1em"
            textTransform={'uppercase'}>
            CATEGORY
          </Text>
          <Dropdown placeholder={"Select category"} options={categoryOptions} />
        </Box>
        <Box>
          <Accordion allowMultiple border="none">
            <AccordionItem color="white" border="none" borderBottom={'1px solid #4A607C'}>
              <AccordionButton px="0px" pb="20px">
                <Box
                  flex="1"
                  textAlign="left"
                  color="#9FFFF3"
                  fontSize={'14px'}
                  fontWeight="600"
                  lineHeight={'21px'}
                  letterSpacing="0.1em"
                  textTransform={'uppercase'}>
                  COLLECTIONS
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel p="0px">
                <InputGroup bg="#192C45" mt="10px" color="white">
                <InputWrapper
                  placeholder="Search collections"
                  color='#7B82A8'
                  styles={{
                    focusBorderColor:"none",
                    borderRadius:'2px',
                  }}
                />
                  <InputRightElement>
                   <SearchIcon color="#7B82A8" />
                  </InputRightElement>
                </InputGroup>
                <Flex mt="12px" gap="7px" flexWrap={'wrap'} pb="24px">
                  {categoryData.collections.map((item,idx) => {
                    return <Box
                    key={idx}
                    bg="#192C45"
                    borderRadius={'40px'}
                    p="2px 10px 2px 2px"
                    display={'flex'}
                    alignItems="center">
                    <Img alt="img" mr="6px" src={getFileUrl(item.img)}></Img>
                    <Text
                      as="span"
                      color="#99BBE2"
                      fontFamily={'Poppins'}
                      fontSize="13px"
                      fontWeight={'500'}>
                      {item.collection}
                    </Text>
                  </Box> 
                  })}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple border="none">
            <AccordionItem color="white" border="none" borderBottom={'1px solid #4A607C'}>
              <AccordionButton p="20px 0px">
                <Box
                  flex="1"
                  textAlign="left"
                  color="#9FFFF3"
                  fontSize={'14px'}
                  fontWeight="600"
                  lineHeight={'21px'}
                  letterSpacing="0.1em"
                  textTransform={'uppercase'}>
                  STATUS
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel p="0px">
                <Flex gap="8px" flexWrap={'wrap'} pb="24px" mb="10px">
                {categoryData.status.map((value, idx) => {
                    const radio = getRadioProps({ value });
                    return (
                      <RadioCard ref={radioRef} key={idx} {...radio}>
                        {value}
                      </RadioCard>
                    );
                  })}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple border="none">
            <AccordionItem color="white" border="none" borderBottom={'1px solid #4A607C'}>
              <AccordionButton p="20px 0px">
                <Box
                  flex="1"
                  textAlign="left"
                  color="#9FFFF3"
                  fontSize={'14px'}
                  fontWeight="600"
                  lineHeight={'21px'}
                  letterSpacing="0.1em"
                  textTransform={'uppercase'}>
                  PRICE
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel p="0px">
                <Flex gap="8px" flexDirection={'column'} pb="24px" mb="10px">
                  {categoryData.price.map((item,idx) => {
                    const radio = getRadioProps({ item });
                    return (
                      <Box
                      key={idx}
                      bg="#192C45"
                      width="100%"
                      borderRadius={'2px'}
                      color="white"
                      p="8px 18px"
                      display={'flex'}
                      alignItems="center">
                      <Img alt="daba" mr="8px" src={getFileUrl("marketplace-assets/assets/images/daba.svg")}></Img>
                      <Text as="span" fontFamily="Poppins" fontSize={'16px'} fontWeight="600px">
                        {item}
                      </Text>
                    </Box>
                    );
                  })}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple border="none">
            <AccordionItem color="white" border="none">
              <AccordionButton p="20px 0px">
                <Box
                  flex="1"
                  textAlign="left"
                  color="#9FFFF3"
                  fontSize={'14px'}
                  fontWeight="600"
                  lineHeight={'21px'}
                  letterSpacing="0.1em"
                  textTransform={'uppercase'}>
                  BUY IN
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel p="0px">
                <Flex gap="8px" pb="24px" mb="10px" flexWrap={'wrap'}>
                  {categoryData.buyin.map((item,idx) => {
                    return (
                      <Box
                      key={idx}
                      bg="transparent"
                      borderRadius={'40px'}
                      border="1px solid #8787A5"
                      color="white"
                      p="6px 12px"
                      display={'flex'}
                      alignItems="center">
                      <Img alt="img" mr="8px" src={getFileUrl(item.img)}></Img>
  
                      <Text
                        as="span"
                        fontFamily="Poppins"
                        fontSize={'14px'}
                        fontWeight="600px"
                        lineHeight={'21px'}>
                        {item.currency}
                      </Text>
                    </Box>
                    );
                  })}
                </Flex>
                <Text as="p" color="#526F93" fontSize={'13px'} lineHeight="20px" fontWeight={'400'}>
                  You can buy the products with the above currencies
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};
