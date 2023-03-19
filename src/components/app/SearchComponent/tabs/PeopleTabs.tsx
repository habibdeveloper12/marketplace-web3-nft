import React from 'react';
import { Box, Divider } from '@chakra-ui/react';
import { SelectInputWrapper } from '../../../core/CommonComponents';

const PeopleTabs = (props) => {
  const { handleActiveTab } = props;

  const customStyles = () => ({
    minWidth:"201px",
    backgroundColor: 'transparent',
    display: 'flex',
    flexShrink: '0',
    color: '#99BBE2',
    border: '1px solid #99BBE2',
    borderRadius: '50px',
    flexWrap: 'wrap',
    padding:{base:"3px"},
    paddingLeft: {
      exS: '0px',
      sm: '0px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '12px'
    },
    fontSize: {
      exS: '14px',
      sm: '10px',
      md: '16px',
      lg: '17px',
      xl: '18px',
      '2xl': '18px'
    },
    height: {
      base: '40px',
      md: '36px',
      lg: '40px',
      xl: '46px',
      '2xl': '50px'
    },
    fontFamily: 'poppins'
  });
  return (
    <Box display="flex" p="20px" alignItems="center">
      <Box
        border="1px solid #1DB4F4"
        p="10px"
        px="20px"
        borderRadius="50px"
        color="#1DB4F4"
        bg="transparent"
        fontWeight="600"
        fontSize="16px"
        cursor={'pointer'}
        onClick={() => handleActiveTab('Global')}>
        People
      </Box>
      <Divider h="45px" mx="20px" bg="99BBE2" orientation="vertical" />
      <Box display={"flex"} flexDirection={{base:"column",lg:"row"}} gap={{base:"5px",lg:"0px"}} >
        <SelectInputWrapper placeholder="Locations" styles={customStyles} />
        <Box mr="20px" />
        <SelectInputWrapper placeholder="Interrests" styles={customStyles} />
    </Box>
    </Box>
  );
};

export default PeopleTabs;
