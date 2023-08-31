// FIXME: 같은 페이지 중복 호출 문제 고쳐야함
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import IssueListItem from '../IssueListItem/IssueListItem';
import { getIssueList } from '../../../apis/issues';
import { IssueType } from '../../../types/type';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';

import * as S from './IssueList.styled';

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
      setIssues((prevIssueList) => {
        const IssuesWithoutPullRequest = fetchedIssueList.filter(
          (issue) => issue.pull_request === undefined
        );

        return [...prevIssueList, ...IssuesWithoutPullRequest];
      });
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
    <S.IssueList>
      {issues.map((issue, index) => {
        const isMultipleOfFive = index % 5 === 4;
        const isLastIssue = index === issues.length - 1;
        return (
          <>
            <li key={issue.id} ref={isLastIssue ? lastElementRef : null}>
              <Link to={`/issue/${issue.number}`}>
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
                  <S.AdImage
                    src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
                    alt='광고: 원티드'
                  />
                </a>
              </li>
            )}
          </>
        );
      })}
      {isLoading && <div>Loading...</div>}
    </S.IssueList>
  );
};

export default IssueList;
