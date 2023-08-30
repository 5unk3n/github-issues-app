import Header from '../Header/Header';

import * as S from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
    </>
  );
};

export default Layout;
