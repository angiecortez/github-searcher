import React from 'react';
import styled from 'styled-components';
import Github from '../icons/github';
import Input from '../atoms/Input';
import { useRouter } from 'next/router';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background: #24292e;
  padding: 15px;
`;

const Header = (props) => {
  const router = useRouter();
  return (
    <Wrapper>
      <div
        onClick={() => router.push('/')}
        style={{ display: 'flex', color: '#ffffff', whiteSpace: 'nowrap' }}
      >
        <Github />
      </div>
      {!props.input && <Input {...props} />}
    </Wrapper>
  );
};

export default Header;
