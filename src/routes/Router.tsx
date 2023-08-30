import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import IssuesPage from '../pages/IssuesPage/IssuesPage';
import IssueDetailPage from '../pages/IssueDetailPage/IssueDetailPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IssuesPage />} />
          <Route path='/issue/:issueNumber' element={<IssueDetailPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
