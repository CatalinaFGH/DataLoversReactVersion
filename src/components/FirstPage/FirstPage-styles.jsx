import styled from 'styled-components';

export const FirstPageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export const LogoImage = styled.img`
  height: 35vh;
`;

export const EnterButtonContainer = styled.div`
`;

export const EnterButton = styled.button`
padding: 4vh 3vw;
font-size: 33px;
font-weight: bold;
letter-spacing: 1vh;
font-family: "orbitron", "sans-serif";
border-radius: 9vh;
color:#13ACC9;
background-color: #D2DA4C;
box-shadow: 0 0 50px #13ACC9;
text-shadow: 2px 2px 3px #000000;
cursor: pointer;
outline: none;
  -webkit-text-stroke-color: #000;
  -webkit-text-stroke-width: 0.1px;

  &:hover {
  background-color: #13ACC9;
  box-shadow: 0 0 50px #D2DA4C;
  color: #D2DA4C;
  transition: 0.5s;
}
`;

export const MainImageContainer = styled.div`
  display: flex;
`;

export const MainImage = styled.img`
`;