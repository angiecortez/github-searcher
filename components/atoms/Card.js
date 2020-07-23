import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px 0px RGBA(86, 96, 128, 0.3);
  padding: 20px;
  display: flex;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 8px;
`;

const Flex = styled.div`
  display: flex;
`;

const A = styled.a`
  color: #0366d6;
  text-decoration: none;
`;
const Card = ({ data }) => {
  return (
    <Wrapper>
      <Img src={data.avatar_url} />
      <div style={{ flex: 'auto' }}>
        <Flex>
          <A href={''}>{data.name}</A>
          <div style={{ margin: '0 8px' }}>{data.login}</div>
        </Flex>
      </div>
    </Wrapper>
  );
};

Card.propTypes = {};

export default Card;
