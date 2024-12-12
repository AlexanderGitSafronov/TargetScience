import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminPanel } from '../page/adminPanel/AdminPanel';
import { Login } from '../page/Login/Login';
import { Thank } from '../page/Thank/Thank';
import MainPage from '../page/MainPage/MainPage';


const NavRoutes = () => {

    return <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/admin' element={<AdminPanel/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/thank' element={<Thank/>} />
        <Route path='*' element={<p>NOT FOUND</p>} />
    </Routes>
}

export default NavRoutes;

