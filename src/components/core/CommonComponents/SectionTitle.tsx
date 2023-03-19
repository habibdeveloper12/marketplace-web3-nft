import { Box, Text, Heading } from "@chakra-ui/react";
import React from 'react'

export const SectionTitle = () => {
  return (
    <>
      <Box>
        <Text
          variant="textPrimary"
          mb="7px"
        >
          Browse by enoch’s recommendation
        </Text>
        <Heading
         variant="headingPrimary"
        >
          Recommended Collectibles for You
        </Heading>
      </Box>
    </>
  )
}

