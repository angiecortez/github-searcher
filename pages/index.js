import React, { useState, useEffect } from 'react';

import { getUserByName, usersss } from '../services/index';
import Layout from '../components/templates/Layout';
import Input from '../components/atoms/Input';
import Card from '../components/atoms/Card';

const index = () => {
  const [user, setUser] = useState('angiecortez');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChangeUser = (e) => setUser(e.target.value);

  const getUsers = async () => {
    try {
      const userGit = await getUserByName(user);

      const items = [];
      for (const usr of userGit) {
        try {
          const item = await usersss(usr.login);
          items.push(item.data);
        } catch (e) {
          console.warn(e);
        }
      }

      setResults(items);
      setLoading(false);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {}, [results]);

  const handleInputKeyPress = async (e) => {
    if (e.key === 'Enter' && user !== '') {
      setResults([]);
      setLoading(true);
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
          {!loading && results.map((u, i) => <Card key={i} data={u} />)}
        </div>
      )}
    </Layout>
  );
};

export default index;
