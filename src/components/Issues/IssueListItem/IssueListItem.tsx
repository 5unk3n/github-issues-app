import { IssueType } from '../../../types/type';

import * as S from './IssueListItem.styled';

interface IssueListItemProps {
  issue: IssueType;
}

const IssueListItem = ({ issue }: IssueListItemProps) => {
  const formattedDate = new Date(issue.created_at).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <S.IssueItemWrapper>
      <div>
        <S.TitleWrapper>
          <span>{`#${issue.number}`}</span>
          <S.Title>{issue.title}</S.Title>
        </S.TitleWrapper>
        <S.UserWrapper>
          <span>{`작성자: ${issue.user.login}`}</span>
          <span>{`, 작성일: ${formattedDate}`}</span>
        </S.UserWrapper>
      </div>
      <S.Comment>{`코멘트: ${issue.comments}`}</S.Comment>
    </S.IssueItemWrapper>
  );
};

export default IssueListItem;
