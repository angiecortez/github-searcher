import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { getUserByName, getRepoByName, usersss } from '../services/index';
import useDebounce from '../hocs/debounce';
import Layout from '../components/templates/Layout';
import Input from '../components/atoms/Input';

const A = styled.a`
  color: #0366d6;
  text-decoration: none;
`;
const index = () => {
  const [user, setUser] = useState('angiecortez');
  const [users, setUsers] = useState([]);
  const [ar, setAr] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(user, 1000);

  const onChangeUser = (e) => setUser(e.target.value);

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     handleInputKeyPress();
  //   }
  // }, [debouncedSearchTerm]);

  const getUsers = async (user) => {
    setLoading(true);

    try {
      const userGit = await getUserByName(debouncedSearchTerm);
      setUsers([...userGit]);
      // const angie = await getRepoByName('angiecortez');

      userGit.map(async (user) => {
        const t = await usersss(user.login);
        console.log('t', t);
        ar.push(t);
        setAr([...ar]);
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && user !== '') {
      setUsers([]);
      getUsers(user);
    }
  };

  return (
    <Layout>
      <Input
        value={user}
        onChange={(e) => onChangeUser(e)}
        onKeyPress={(e) => handleInputKeyPress(e)}
      />

      {!users.length ? (
        <div>no hay usuarios</div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridGap: '1rem'
          }}
        >
          {!loading &&
            ar.map((user, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  padding: '24px 0',
                  borderTop: '1px solid #e1e4e8'
                }}
              >
                <img
                  src={user.avatar_url}
                  alt=""
                  width={30}
                  height={30}
                  style={{ borderRadius: '50%', margin: '0 8px' }}
                />
                <div style={{ flex: 'auto' }}>
                  <div style={{ display: 'flex' }}>
                    <A href={''}>{user.login}</A>
                    <div style={{ margin: '0 8px' }}>{user.bio}</div>
                  </div>
                  <p>Front-End Developer</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </Layout>
  );
};

export default index;
