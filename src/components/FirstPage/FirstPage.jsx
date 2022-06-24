import React from 'react';
import { Link } from "react-router-dom";
// *Images
import logo from '../../images/logo3.png';
import image from '../../images/series.png';
// *Styles
import { FirstPageContainer, LogoImageContainer, LogoImage, EnterButtonContainer, EnterButton, MainImageContainer, MainImage } from './FirstPage-styles';

const FirstPage = () => {
  return (
    <FirstPageContainer>
      <LogoImageContainer>
        <LogoImage src={logo} alt='RM-logo' />
        <EnterButtonContainer>
          <Link to="/data-page">
           <EnterButton>ENTER</EnterButton>
          </Link>
        </EnterButtonContainer>
      </LogoImageContainer>
      <MainImageContainer>
        <MainImage src={image} alt='RM-image' />
      </MainImageContainer>
    </FirstPageContainer>
  )
}

export default FirstPage;