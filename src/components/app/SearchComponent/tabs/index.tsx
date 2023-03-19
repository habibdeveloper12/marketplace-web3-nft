import { Box } from '@chakra-ui/react';
import { tabTypes } from "../../../../constants/search";

interface Props {
  handleActiveTab(tab: string): void;
}

const MainTabs = ({ handleActiveTab }: Props) => {
  return (
    <Box display="flex" p="20px" flexWrap="wrap" gap={{base:"10px",lg:"0px"}}>
      {tabTypes.map((tab) => (
        <Box
          border="1px solid #fff"
          p={{base:"4px",lg:"10px"}}
          px={{base:"8px",lg:"20px"}}
          borderRadius="50px"
          color="#fff"
          bg="transparent"
          mr="10px"
          fontSize="18px"
          cursor={"pointer"}
          key={tab}
          onClick={() => handleActiveTab(tab)}>
          {tab}
        </Box>
      ))}
    </Box>
  );
};

export default MainTabs;
