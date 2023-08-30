import { styled } from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px;

  & > * {
    flex-grow: 1;
  }

  img {
    flex-grow: 0;
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

export const ContentWrapper = styled.div`
  padding: 16px;

  & > * {
    all: revert;
  }

  pre {
    background-color: lightgray;
    padding: 16px;
  }
`;
