import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Router from './routes/Router';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Router />
    </ErrorBoundary>
  );
}

export default App;
