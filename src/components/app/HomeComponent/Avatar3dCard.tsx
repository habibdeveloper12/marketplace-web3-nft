import React, { useState, useEffect } from 'react';
import { Box, Img } from '@chakra-ui/react';
import Camila from './models/Camila';
import Lenox from './models/Lenox';
import Karen from './models/Karen';
import Alexander from './models/Alexander';
import Cristina from './models/Cristina2';
import Jodie from './models/Jodie';
import Bendt from './models/bendt';
import { getFileUrl } from '../../../utils/getFileUrl';

const Avater3dCard = ({ character, imagePath, isSliderChanged }) => {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    isSliderChanged && setShowModel(false);
  }, [isSliderChanged]);

  const getAvatarComponent = {
    alaxander: <Alexander />,
    bendt: <Bendt />,
    camila: <Camila />,
    cristina: <Cristina />,
    jodie: <Jodie />,
    karen: <Karen />,
    lenox: <Lenox />
  };

  return (
    <Box
      className="slider-hot-collections-img"
      position={'relative'}
      onMouseOut={() => setShowModel(false)}
      onMouseMove={() => setShowModel(true)}>
      <Box className="slider-model-box">
        {!showModel ? (
          <Img
            src={getFileUrl(imagePath)}
            position={'absolute'}
            objectFit="cover"
            height="100% !important"
            alt="avatar-3d-image"
          />
        ) : (
          getAvatarComponent[character]
        )}
      </Box>
      <Img
        src={getFileUrl('marketplace-assets/assets/images/360view.svg')}
        alt="360-icon"
        position={'absolute'}
        width={'12% !important'}
        top="20px"
        right="27px"
      />
    </Box>
  );
};

export default Avater3dCard;
