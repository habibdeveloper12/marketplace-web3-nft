import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';

const AccordionWrapper = ({ label, children, isLastElement = false }: any) => {
  return (
    <>
      <Accordion allowMultiple border="none" position="relative">
        <AccordionItem
          color="white"
          border="none"
          borderBottom={isLastElement ? '' : '1px solid #4A607C'}>
          <AccordionButton py="20px" px="0">
            <Box
              flex="1"
              textAlign="left"
              color="#FFDF6C"
              fontSize={'14px'}
              fontWeight="500"
              lineHeight={'21px'}
              letterSpacing="0.1em"
              textTransform={'uppercase'}>
              {label}
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb="20px" px="0px" overflow="visible">
            {children}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionWrapper;
