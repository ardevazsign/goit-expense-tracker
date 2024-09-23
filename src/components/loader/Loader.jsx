import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </StyledLoaderWrapper>
  );
};

export default Loader;
