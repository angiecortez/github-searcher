import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import colorsJson from '../utils/colors.json';
import { getRepoByName, usersss, getRepo } from '../services';
import ProfileCard from '../components/organisms/ProfileCard';
import RepoCard from '../components/organisms/RepoCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  padding: 20px;
`;
const User = () => {
  const [repos, setRepos] = useState([]);
  const [colors, setColors] = useState(colorsJson);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const id = router.query.user;

  console.log('id', id);
  useEffect(() => {
    getReposFromUser(id);
  }, [id]);

  const getReposFromUser = async (userId) => {
    setLoading(true);
    try {
      const userData = await usersss(userId);
      const response = await getRepoByName(userId);
      const repos = response.data;

      if (userData.status === 200) {
        const items = [];
        for (const repo of repos) {
          try {
            const rep = await getRepo(userId, repo.name);
            items.push(rep.data);
            console.log('eee', rep.data);
          } catch (e) {
            console.log(e);
          }
        }
        setLoading(false);
        setRepos(items);
        setUser(userData.data);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  if (loading) return <div>cargando</div>;
  return (
    <Grid>
      <ProfileCard data={user} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridGap: '1rem'
        }}
      >
        {repos.map((repo, i) => (
          <RepoCard key={i} data={repo} colors={colors} />
        ))}
      </div>
    </Grid>
  );
};

export default User;
