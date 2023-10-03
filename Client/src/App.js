import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css';

//components
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/account/Login';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to='/account' />
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Simulate loading delay (you can replace this with actual authentication logic)
  useEffect(() => {
    setTimeout(() => {
      const token = sessionStorage.getItem('accessToken');
      setIsAuthenticated(!!token);
      setIsLoading(false);
    }, 3000); // Simulate a 3-second loading delay
  }, []);

  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 0 }}>
          {isLoading ? (
            <div className="spinner-container">
            <div className="loader"></div>
            </div>
          ) : (
            <Routes>
              <Route path='/account' element={<Login isUserAuthenticated={setIsAuthenticated} />} />
            
              <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreatePost />} />
                <Route path='/details/:id' element={<DetailView />} />
                <Route path='/update/:id' element={<Update />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </Route>
            </Routes>
          )}
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;