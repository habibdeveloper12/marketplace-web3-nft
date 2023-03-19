import React from 'react';
import { Button, Image } from '@chakra-ui/react'
import { getFileUrl } from '../../../utils/getFileUrl';

type RightArrowButtonPropsType = {
    children: string;
    justifyContent?:{base:string,sm: string, md: string,lg?:string} | string;
    onClick?:React.MouseEventHandler<HTMLButtonElement>;
}

export const RightArrowButton = ({children, justifyContent = "flex-end",onClick}:RightArrowButtonPropsType) => {
  return (
    <Button
    fontSize={"15px"}
    lineHeight={"25px"}
    fontWeight={"600"}
    color={"blue-50"}
    letterSpacing={"0.02em"}
    textTransform={"uppercase"}
    display={"flex"}
    alignItems={"center"}
    justifyContent={justifyContent}
    _hover={{ textDecoration: "none", opacity: "0.8" }}
    onClick={onClick}
  >
     {children}
    <Image src={getFileUrl("marketplace-assets/assets/images/arrow-forward.svg")} alt="icon" ml={"12px"} />
  </Button>
  )
}

