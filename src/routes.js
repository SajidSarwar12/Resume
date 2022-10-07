import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './container/home/home';


const RoutesPage = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}

export default RoutesPage;

