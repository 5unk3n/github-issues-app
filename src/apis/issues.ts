import { instance } from '../libs/axios';
import { IssueType } from '../types/type';

interface GetIssueListParams {
  sort: 'created' | 'updated' | 'comments';
}

export const getIssueList = async (
  params: GetIssueListParams
): Promise<IssueType[]> => {
  const { data } = await instance.get('/repos/facebook/react/issues', {
    params,
  });
  return data;
};

export const getIssueDetail = async (
  issueNumber: string
): Promise<IssueType> => {
  const { data } = await instance.get(
    `/repos/facebook/react/issues/${issueNumber}`
  );
  return data;
};
