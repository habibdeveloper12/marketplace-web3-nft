import React, { useState, useEffect } from 'react';
import { Button, Flex, Menu, MenuButton, MenuList, MenuItem, Image, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useAccount, useSwitchNetwork, useNetwork } from 'wagmi';

import { BoxWrapper } from '../CommonComponents';
import { getFileUrl } from '../../../utils/getFileUrl';
import CustomWalletConnectButton from './CustomWalletConnectButton';

const WalletComponent = ({ chains, setDefaultChain, initialChain }: any) => {
  const [displayChain, setDisplayChain] = useState(initialChain);
  const { chain: selectedChain } = useNetwork();
  useEffect(() => {
    if (selectedChain) {
      setDisplayChain(selectedChain);
    } else {
      setDisplayChain(displayChain);
    }
  }, [selectedChain, displayChain]);

  const { isConnected } = useAccount({});

  const { switchNetwork } = useSwitchNetwork({
    throwForSwitchChainNotSupported: true,
    onSuccess(data) {
      setDisplayChain(data);
    }
  });

  const handleSelectNetwork = async (e: any, chain: any) => {
    e.preventDefault();
    if (!isConnected) {
      setDefaultChain(chain);
      setDisplayChain(chain);
    } else {
      switchNetwork?.(chain?.id);
    }
  };
  // handleOpen();

  return (
    <BoxWrapper styles={{ zIndex: '5' }}>
      <Flex gap="20px" alignItems="center" flexDirection={{ base: 'column', lg: 'row' }}>
        <Menu>
          <MenuButton
            variant="menuButtonOutlined"
            as={Button}
            leftIcon={
              <Image boxSize="30px" objectFit="cover" src={displayChain?.iconUrl} alt="icon" />
            }
            rightIcon={<ChevronDownIcon />}>
            <Text>{displayChain?.name}</Text>
          </MenuButton>
          <MenuList bg="#2C3444">
            {chains?.map((chain, index) => (
              <MenuItem onClick={(e) => handleSelectNetwork(e, chain)} key={index}>
                {chain?.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <CustomWalletConnectButton />
      </Flex>
    </BoxWrapper>
  );
};

export default WalletComponent;
