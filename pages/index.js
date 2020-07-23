import React, { useState, useEffect } from 'react';

import { getUserByName, getRepoByName, usersss } from '../services/index';
import useDebounce from '../hocs/debounce';
import Layout from '../components/templates/Layout';
import Input from '../components/atoms/Input';
import Card from '../components/atoms/Card';

const index = () => {
  const [user, setUser] = useState('angiecortez');
  const [ar, setAr] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(user, 1000);
  // const angie = await getRepoByName('angiecortez');

  // useEffect(() => {
  //   const results = ar.filter((person) => person.toLowerCase().includes(user));
  //   setAr(results);
  // }, [user]);

  const onChangeUser = (e) => setUser(e.target.value);

  const getUsers = async () => {
    setLoading(true);
    try {
      const userGit = await getUserByName(debouncedSearchTerm);
      userGit.map(async (u) => {
        const t = await usersss(u.login);
        ar.push(t);
        setAr([...ar]);
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputKeyPress = async (e) => {
    if (e.key === 'Enter' && user !== '') {
      setAr([]);
      await getUsers();
    }
  };

  return (
    <Layout>
      <Input
        value={user}
        onChange={(e) => onChangeUser(e)}
        onKeyPress={(e) => handleInputKeyPress(e)}
      />

      {loading ? (
        <div>no hay usuarios</div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridGap: '1rem'
          }}
        >
          {!loading && ar.map((user, i) => <Card key={i} data={user} />)}
        </div>
      )}
    </Layout>
  );
};

export default index;
