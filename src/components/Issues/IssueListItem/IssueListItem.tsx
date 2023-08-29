import { IssueType } from '../../../types/type';

interface IssueListItemProps {
  issue: IssueType;
}

const IssueListItem = ({ issue }: IssueListItemProps) => {
  return (
    <div>
      <div>
        <span>{`#${issue.number}`}</span>
        <strong>{issue.title}</strong>
      </div>
      <div>
        <span>{`작성자: ${issue.user.login}`}</span>
        <span>{`작성일: ${issue.created_at}`}</span>
      </div>
      <div>{`${issue.comments}`}</div>
    </div>
  );
};

export default IssueListItem;
