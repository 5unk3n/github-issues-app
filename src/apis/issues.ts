import { instance } from '../libs/axios';
import { IssueType } from '../types/type';

export const getIssueList = async (): Promise<IssueType[]> => {
  const { data } = await instance.get('/repos/facebook/react/issues');
  return data;
};
