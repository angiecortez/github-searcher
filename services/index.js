import axios from 'axios';

axios.defaults.headers.get['Accept'] = 'application/json';

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
    .get(`https://api.github.com/users/${name}/repos`, {
      headers: {
        authorization: 'token afa72602fc93e5dad49c62b5a3d4c5b15b6f686e'
      }
    })
    .then((response) => {
      data = response;
    });
  return data;
};

export const getRepo = async (user, repo) => {
  let data;
  await axios
    .get(`https://api.github.com/repos/${user}/${repo}`, {
      headers: {
        authorization: 'token afa72602fc93e5dad49c62b5a3d4c5b15b6f686e'
      }
    })
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
        authorization: 'token afa72602fc93e5dad49c62b5a3d4c5b15b6f686e'
      }
    })
    .then((response) => {
      data = response;
    });

  return data;
};
