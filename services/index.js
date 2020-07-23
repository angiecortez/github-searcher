import axios from 'axios';

export const getUserByName = async (name) => {
  let data;

  await axios
    .get(`https://api.github.com/search/users?q=${name}`)
    .then((response) => {
      data = response.data.items;
    })
    .catch((e) => console.log('error', e));
  return data;
};

export const getRepoByName = async (name) => {
  let data;

  await axios
    .get(`https://api.github.com/users/${name}/repos`)
    .then((response) => {
      data = response;
    });
  return data;
};

export const usersss = async (name) => {
  let data;
  await axios
    .get(`https://api.github.com/users/${name}`, {
      headers: {
        authorization: 'token 8d3ff393c5760e9c5a3591f76a87ec9042576502'
      }
    })
    .then((response) => {
      data = response.data;
    });

  return data;
};
