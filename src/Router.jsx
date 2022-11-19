import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Home from './components/Home';
import Users from './components/Users';
import NewScheduler from "./components/NewScheduler";


const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/schedule' element={<NewScheduler />} />
            <Route path='*' element={<Error title='404' text='Pagina non trovata.' />} />
        </Routes>
    );
};

export default Router;