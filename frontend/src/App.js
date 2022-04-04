import './App.css';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#083900',
    },
    secondary: {
      main: '#000000',
      contrastText: '#fafafb',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
