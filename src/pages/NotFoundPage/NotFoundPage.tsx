import { Link } from 'react-router-dom';

import * as S from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <S.Wrapper>
      <h2>404 Not Found</h2>
      <Link to='/'>목록으로 이동</Link>
    </S.Wrapper>
  );
};

export default NotFoundPage;
