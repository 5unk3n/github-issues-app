import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import IssueListItem from '../IssueListItem/IssueListItem';
import { getIssueList } from '../../../apis/issues';
import { IssueType } from '../../../types/type';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';

import wantedLogo from '../../../assets/images/wanted-logo.webp';

const IssueList = () => {
  const [issues, setIssues] = useState<IssueType[]>([]);
  const [issuesPage, setIssuesPage] = useState(1);
  const lastElementRef = useRef(null);

  const fetchIssueList = async () => {
      const fetchedIssueList = await getIssueList({
        sort: 'comments',
        page: issuesPage,
      });
      setIssues((prevIssueList) => [...prevIssueList, ...fetchedIssueList]);
      setIssuesPage(issuesPage + 1);
  };

  useEffect(() => {
    fetchIssueList();
  }, []);

  useInfiniteScroll(lastElementRef, fetchIssueList);

  return (
    <ul>
      {Issues.map((issue, index) => {
        const isMultipleOfFive = index % 5 === 4;
        return (
          <>
            <li key={issue.id} ref={isLastIssue ? lastElementRef : null}>
              <Link to={`/${issue.number}`}>
                <IssueListItem issue={issue} />
              </Link>
            </li>
            {isMultipleOfFive && (
              <li>
                <img src={wantedLogo} alt='광고: 원티드' />
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default IssueList;
