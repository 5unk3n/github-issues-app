import { styled } from 'styled-components';

export const IssueList = styled.ul`
  padding: 16px;

  & > li {
    width: 100%;

    &:hover {
      background-color: #eee;
    }
  }
`;

export const AdImage = styled.img`
  display: block;
  margin: 0 auto;
  padding: 4px;
  height: 72px;
`;
