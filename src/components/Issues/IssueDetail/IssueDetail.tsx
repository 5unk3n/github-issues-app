import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import IssueListItem from '../IssueListItem/IssueListItem';
import { getIssueDetail } from '../../../apis/issues';
import { IssueType } from '../../../types/type';

const IssueDetail = () => {
  const { issueNumber } = useParams();
  const [issue, setIssue] = useState<IssueType>();

  const fetchIssueDetail = async () => {
    if (issueNumber) {
      const data = await getIssueDetail(issueNumber);
      setIssue(data);
    }
    return null;
  };

  useEffect(() => {
    fetchIssueDetail();
  }, []);

  if (issue === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <img
          src={issue.user.avatar_url}
          alt={`${issue.user.login} 프로필 이미지`}
        />
        <IssueListItem issue={issue} />
      </div>
      <div>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default IssueDetail;
