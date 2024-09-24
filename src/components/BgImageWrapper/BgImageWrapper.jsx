import React from 'react';
import BgImage from '../../Assets/image/home/Rectangle 1x.png';
import DecorationTab from '../DecorationTab/DecorationTab';
import {
  ImageContainer,
  HomeBgImage,
  BackgroundImage,
  TabDecoration,
} from './BgImageWrapper.styled';

function BgImageWrapper() {
  return (
    <ImageContainer>
      <BackgroundImage>
        <HomeBgImage src={BgImage} alt="Backround" />
      </BackgroundImage>
      <TabDecoration>{<DecorationTab />}</TabDecoration>
    </ImageContainer>
  );
}

export default BgImageWrapper;
