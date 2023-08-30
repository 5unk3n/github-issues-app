import { styled } from 'styled-components';

export const IssueItemWrapper = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h2`
  font-size: inherit;
`;

export const UserWrapper = styled.div`
  margin-top: 8px;
`;
