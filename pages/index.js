import React, { useState, useEffect } from 'react';

import { getUserByName, usersss } from '../services/index';
import Layout from '../components/templates/Layout';
import Card from '../components/atoms/Card';
import Header from '../components/organisms/Header';
import Empty from '../components/atoms/Empty';
import SoundBarLoading from '../components/atoms/SoundBarLoading';

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

  if (loading) return <SoundBarLoading />;
  return (
    <Layout>
      <Header
        value={user}
        onChange={(e) => onChangeUser(e)}
        onKeyPress={(e) => handleInputKeyPress(e)}
      />

      {!results.length ? (
        <Empty>Busca a millones de usuarios</Empty>
      ) : (
        <div>
          {!loading && results.map((u, i) => <Card key={i} data={u} />)}
        </div>
      )}
    </Layout>
  );
};

export default index;
