import { Main, NotFound } from 'pages';
import { QueryClientProvider } from 'react-query';
import {
  Route,
  BrowserRouter as Router,
  useHistory,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, queryClient } from 'utils';

const App = () => {
  const history = useHistory();

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
