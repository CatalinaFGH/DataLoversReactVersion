import React from 'react';

import logo from '../images/logo3.png';
import image from '../images/series.png';
import { FirstPageContainer, LogoImageContainer, LogoImage, EnterButtonContainer, EnterButton, MainImageContainer, MainImage } from './FirstPage-styles';

const FirstPage = () => {
  return (
    <FirstPageContainer>
      <LogoImageContainer>
        <LogoImage src={logo} alt='RM-logo' />
        <EnterButtonContainer>
          <EnterButton>ENTER</EnterButton>
        </EnterButtonContainer>
      </LogoImageContainer>
      <MainImageContainer>
        <MainImage src={image} alt='RM-image' />
      </MainImageContainer>
    </FirstPageContainer>
  )
}

export default FirstPage;