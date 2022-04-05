import './App.css';
import React from 'react'
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar'
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

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
    <BrowserRouter> 
      
      <NavBar />
      <Routes>
      

      <Route path="/" element={<Home/>}/>
      <Route path="/SignIn" element={<SignInPage/>}/>
      <Route path="/SignUp" element={<SignUpPage/>}/>

      <Route path="*" element={<Home/>}/>
      </Routes>
      <Footer />

      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
