import React, { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@chakra-ui/react';
const CustomWalletConnectButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    // custom wallet connect
  }, []);

  return (
    <>
      {isMounted && (
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus || authenticationStatus === 'authenticated');
            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }
                })}>
                {(() => {
                  if (!connected) {
                    return (
                      <Button
                        variant="menuButtonOutlined"
                        w="100%"
                        maxW="100%"
                        px="21px"
                        onClick={openConnectModal}>
                        Connect Wallet
                      </Button>
                    );
                  }
                  if (chain.unsupported) {
                    return (
                      <Button
                        variant="menuButtonOutlined"
                        w="100%"
                        maxW="100%"
                        px="21px"
                        onClick={openChainModal}>
                        Wrong network
                      </Button>
                    );
                  }
                  return (
                    <div style={{ display: 'flex', gap: 12 }}>
                      <Button
                        variant="menuButtonOutlined"
                        w="100%"
                        maxW="100%"
                        px="21px"
                        onClick={openAccountModal}>
                        {account.displayName}
                      </Button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      )}
    </>
  );
};

export default CustomWalletConnectButton;
