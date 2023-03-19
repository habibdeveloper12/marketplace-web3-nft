import { Image, Avatar } from '@chakra-ui/react';
import React from 'react';
import { getFileUrl } from '../../../utils/getFileUrl';

interface Props {
  user?: any;
  height?: string;
  width?: string;
}

export const UserAvatar = ({ user, height = '48px', width = '48px' }: Props) => {
  return (
    <Avatar h={height} w={width} position="relative" src={user?.profilePicture}>
      {user?.isVerified && (
        <Image
          h="16px"
          w="16px"
          position="absolute"
          top="0px"
          right="-2px"
          src={getFileUrl('marketplace/marketplace/assets/ticker.png')}
        />
      )}
    </Avatar>
  );
};

