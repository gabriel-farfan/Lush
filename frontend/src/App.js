import './App.css';
import React, { useEffect } from 'react'
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar'
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Details from './pages/Details';
import Admin from './pages/Admin';
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { connect, useDispatch } from 'react-redux'
import userActions from './redux/actions/userActions'
import cartActions from './redux/actions/cartActions'
import Blog from './pages/Blog';


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


function App(props) {

  const dispatch = useDispatch()


  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token')
      props.verifyToken(token)
    }
    if (localStorage.getItem('cart') !== null) {
      dispatch(cartActions.checkLocalStorage())
    }
  }, [])



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>

          <NavBar />
          <Routes>


            <Route path="/" element={<Home />} />
            <Route path="/Details/:id" element={<Details />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Blog" element={<Blog />} />

            {!props.user && <Route path="/SignIn" element={<SignInPage />} />}
            {!props.user && <Route path="/SignUp" element={<SignUpPage />} />}



            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />

        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
  verifyToken: userActions.verifyToken
}
const mapStateToProps = (state) => {
  return {
    message: state.userReducer.message,
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
