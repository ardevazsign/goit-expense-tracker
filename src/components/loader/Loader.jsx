import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { StyledLoaderHolder } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderHolder>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </StyledLoaderHolder>
  );
};

export default Loader;
