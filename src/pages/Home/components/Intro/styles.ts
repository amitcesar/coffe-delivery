import styled from "styled-components";
import introBackgroundImg from '../../../../assets/intro-background.png'
import { TitleText } from "../../../../components/Header/Typography";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${introBackgroundImg}) no-repeat center`};
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`

  margin-bottom: 1rem;
  border: solid 1px;
  border-color: red;

`;

