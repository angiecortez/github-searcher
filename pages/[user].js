import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import colorsJson from '../utils/colors.json';
import { getRepoByName, usersss, getRepo } from '../services';
import ProfileCard from '../components/organisms/ProfileCard';
import RepoCard from '../components/organisms/RepoCard';
import { Grid, GridUser } from '../components/atoms/Grid';
import DefaultError from 'next/error';
import Header from '../components/organisms/Header';
import SoundBarLoading from '../components/atoms/SoundBarLoading';

const User = () => {
  const [repos, setRepos] = useState([]);
  const [colors, setColors] = useState(colorsJson);
  const [userDa, setUserDa] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();
  const id = router.query.user;

  useEffect(() => {
    if (id !== undefined) {
      getReposFromUser(id);
    }
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
          } catch (e) {
            console.log(e);
          }
        }
        setLoading(false);
        setRepos(items);
        setUserDa(userData.data);
      }
    } catch (e) {
      setError(true);
      console.warn(e);
    }
  };

  if (error) return <DefaultError statusCode={404} />;
  else if (loading) return <SoundBarLoading />;
  return (
    <>
      <Header input={true} />
      <Grid>
        <ProfileCard data={userDa} />
        <GridUser>
          {repos.map((repo, i) => (
            <RepoCard key={i} data={repo} colors={colors} />
          ))}
        </GridUser>
      </Grid>
    </>
  );
};

export default User;
