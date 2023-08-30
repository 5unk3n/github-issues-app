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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const lastElementRef = useRef(null);

  const fetchIssueList = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const fetchedIssueList = await getIssueList({
        sort: 'comments',
        page: issuesPage,
      });
      setIssues((prevIssueList) => [...prevIssueList, ...fetchedIssueList]);
      setIssuesPage(issuesPage + 1);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchIssueList();
  }, []);

  useInfiniteScroll(lastElementRef, fetchIssueList);

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <ul>
      {issues.map((issue, index) => {
        const isMultipleOfFive = index % 5 === 4;
        const isLastIssue = index === issues.length - 1;
        return (
          <>
            <li key={issue.id} ref={isLastIssue ? lastElementRef : null}>
              <Link to={`/${issue.number}`}>
                <IssueListItem issue={issue} />
              </Link>
            </li>
            {isMultipleOfFive && (
              <li>
                <a
                  href='https://www.wanted.co.kr/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={wantedLogo} alt='광고: 원티드' />
                </a>
              </li>
            )}
          </>
        );
      })}
      {isLoading && <div>Loading...</div>}
    </ul>
  );
};

export default IssueList;
