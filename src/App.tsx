import {ThemeProvider} from 'styled-components';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import NewPage from './pages/New';

function App() {

  const theme = {
    primary: '#322153',
    secondary: '#6c63ff',
    background: '#f0f0f5',
    text: '#6c6c80',
    white: '#fff'
  }

  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/"><Home /></Route>
                  <Route path="/new"><NewPage /></Route>
              </Switch>
              <ToastContainer autoClose={3000} />
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
