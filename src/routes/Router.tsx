import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IssuesPage from '../pages/IssuesPage/IssuesPage';
import IssueDetailPage from '../pages/IssueDetailPage/IssueDetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IssuesPage />} />
        <Route path='/:issueNumber' element={<IssueDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
