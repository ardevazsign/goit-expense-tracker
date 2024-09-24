import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-color: #000;
  border-radius: 20px;
`;

export const HomeBgImage = styled.img`
  display: block;
  width: 611px;
  height: 568px;
  flex-shrink: 0;
  border-radius: 20px;
  background: lightgray -210.655px -9.352px / 144.403% 103.776% no-repeat;
`;
export const ImageContainer = styled.div`
  display: flex;
  position: relative;
`;

export const TabDecoration = styled.div`
 position: absolute;
  left: -50px;
  top: 315px;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-name: bounce;
  animation-timing-function: ease;
  animation-direction: reverse;
}


@keyframes bounce {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(400px);
  }

  100% {
    transform: translateX(0);
  }
 
`;
