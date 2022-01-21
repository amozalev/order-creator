import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import OrdersList from './components/orders/orders-list/orders-list';
import UserList from './components/users/user-list/user-list';
import NewOrder from './components/orders/new-order/new-order';
import Content from './components/content/content';

export const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route path="orders" element={<Content />}>
                    <Route path="" element={<OrdersList />} />
                    <Route path="new" element={<NewOrder />} />
                </Route>
                <Route path="users" element={<Content />}>
                    <Route path="" element={<UserList />} />
                    <Route path="new" element={<NewOrder />} />
                </Route>
            </Route>
        </Routes>
    </Router>
);
