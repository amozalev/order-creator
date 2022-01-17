import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import OrdersList from './components/orders/orders-list/orders-list';
import UserList from './components/users/user-list/user-list';

export const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="/orders" element={<OrdersList />} />
                <Route path="/users" element={<UserList />} />
            </Route>
        </Routes>
    </Router>
);
