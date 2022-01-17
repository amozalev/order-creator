import * as React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Main from '../components/main/main';
import SideNavList from '../components/sidenav/sidenav-list/sidenav-list';
import Content from '../components/content/content';
import { SIDENAVITEMS } from '../constants';
import { Outlet } from 'react-router-dom';

const HomePage: React.FC<any> = () => {
    return (
        <>
            <Header>
                <div>Header</div>
                <div>Switch theme</div>
            </Header>
            <Main>
                <SideNavList navItems={SIDENAVITEMS} />
                <Content>
                    <Outlet />
                </Content>
            </Main>
            <Footer>Footer</Footer>
        </>
    );
};

export default HomePage;
