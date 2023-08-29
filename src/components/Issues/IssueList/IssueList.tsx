import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import IssueListItem from '../IssueListItem/IssueListItem';
import { getIssueList } from '../../../apis/issues';
import { IssueType } from '../../../types/type';

import wantedLogo from '../../../assets/images/wanted-logo.webp';

const IssueList = () => {
  const [Issues, setIssues] = useState<IssueType[]>([]);

  const fetchIssueList = async () => {
    const result = await getIssueList();
    setIssues(result);
  };

  useEffect(() => {
    fetchIssueList();
  }, []);

  return (
    <ul>
      {Issues.map((issue, index) => {
        const isMultipleOfFive = index % 5 === 4;
        return (
          <>
            <li key={issue.id}>
              <Link to={`/${issue.number}`}>
                <IssueListItem issue={issue} />
              </Link>
            </li>
            {isMultipleOfFive && <img src={wantedLogo} alt='광고: 원티드' />}
          </>
        );
      })}
    </ul>
  );
};

export default IssueList;
