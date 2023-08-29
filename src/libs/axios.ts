import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = process.env.REACT_APP_GITHUB_API_TOKEN;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
