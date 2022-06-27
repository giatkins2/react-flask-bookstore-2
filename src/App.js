import './App.css';
import {Routes, Route} from 'react-router-dom';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import BookBrowser from './views/BookBrowser';
import ReadingList from './views/ReadingList';
import Login from './views/Login';
import Logout from './views/Logout';
import Home from './views/Home';
import RegisterUser from './views/RegisterUser';
import EditUser from './views/EditUser';


function App() {
  return (
    <>
    <NavBar/>
      <Box sx={{minHeight:'90vh'}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/edit_user" element={<EditUser/>}/>
          <Route path="/register" element={<RegisterUser/>}/>
          <Route path="/books" element={<BookBrowser/>}/>
          <Route path="/reading_list" element={<ReadingList/>}/>
        </Routes> 
      </Box>
    </>  
  );
}

export default App;
