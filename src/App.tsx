import Layout from './components/Layout/Layout';
import Router from './routes/Router';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
