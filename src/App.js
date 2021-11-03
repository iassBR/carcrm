import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import './global.css';

import { Loading, Notify, Alert, } from './view/components';

const theme = createTheme({
  palette: {
  },
  components: {
    MuiTextField: {

      defaultProps: {
        variant: 'outlined',
        fullWidth: true
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true
      }
    }
  }
});


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      
        <Alert />
        <Notify />
        <Loading />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}


export default App;

