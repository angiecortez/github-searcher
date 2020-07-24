import React from 'react';
import styled, { keyframes } from 'styled-components';

const width = 80;
const margin = 90;
const numDots = 5;
const initialHeight = width;
const desiredHeight = 600;

const scale = keyframes`
 0% {}
  20% {
    height: ${desiredHeight}px;
    transform: translate(0, -60%);
    background-color: #fff;
  }
  70% {
    height:  ${initialHeight}px;
    
  }
`;

const template = (i, items, duration) => {
  if (i > 1)
    return `
      &:nth-child(${i + 1}) {
      animation-delay: ${`${0.2 * i}s`};
      left: ${`${(i - 1) * (width + margin)}px`};
    }
  `;
  else
    return `
        &:nth-child(${i + 1}) {
      animation-delay: ${`${0.2 * i}s`};
          left: ${`${(i - 1) * (width + margin)}px`};
}

      `;
};

const getAnimations = (items, duration) => {
  let str = '';
  for (let i = 0; i < items; i += 1) {
    str += template(i, items, duration);
  }
  return str;
};

const Container = styled.div`
  width: ${`${5 * (width + margin) - margin}`};
  height: 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.1);
`;

const Dot = styled.div`
  position: absolute;
  width: 80px;
  height: ${initialHeight}px;
  background: gray;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  animation: ${scale} 2s infinite;
  ${getAnimations(numDots, 9)}
`;

const SoundBarLoading = (props) => {
  return (
    <Container>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </Container>
  );
};

export default SoundBarLoading;
