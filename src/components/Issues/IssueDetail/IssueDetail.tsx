import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import IssueListItem from '../IssueListItem/IssueListItem';
import { getIssueDetail } from '../../../apis/issues';
import { IssueType } from '../../../types/type';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import * as S from './IssueDetail.styled';

const IssueDetail = () => {
  const { issueNumber } = useParams();
  const [issue, setIssue] = useState<IssueType | null>(null);
  const [isError, setIsError] = useState(false);

  const fetchIssueDetail = async () => {
    try {
      if (issueNumber) {
        const data = await getIssueDetail(issueNumber);
        setIssue(data);
      }
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    return null;
  };

  useEffect(() => {
    fetchIssueDetail();
  }, []);

  if (issue === null) {
    return <div>Loading...</div>;
  }

  if (isError) {
    <div>Error</div>;
  }

  return (
    <div>
      <S.UserWrapper>
        <img
          src={issue.user.avatar_url}
          alt={`${issue.user.login} 프로필 이미지`}
        />
        <IssueListItem issue={issue} />
      </S.UserWrapper>
      <S.ContentWrapper>
        <ReactMarkdown rehypePlugins={[rehypeRaw as any, remarkGfm]}>
          {issue.body}
        </ReactMarkdown>
      </S.ContentWrapper>
    </div>
  );
};

export default IssueDetail;
