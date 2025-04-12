import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Users } from './Components/Users';
import { UserList } from './Components/UserList';
import { User } from './Components/User';
import { EditUser } from './Components/EditUser';

function App() {
  return (
    <div>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route index element={<Users />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/user/edit/:id" element={<EditUser />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
