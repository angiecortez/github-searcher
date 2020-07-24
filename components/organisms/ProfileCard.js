import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  border-radius: 50%;
  max-width: 90%;
`;

const Name = styled.div`
  font-size: 26px;
`;
const SubName = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #666;
`;
const ProfileCard = ({ data }) => (
  <Wrapper style={{ padding: '20px' }}>
    <Img src={data.avatar_url} alt="" />
    <Name>{data.name}</Name>
    <SubName>{data.login}</SubName>
    <p style={{ padding: '20px 0' }}>{data.bio}</p>
  </Wrapper>
);

ProfileCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProfileCard;
