import * as React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Main from '../components/main/main';
import SideNavList from '../components/sidenav/sidenav-list/sidenav-list';
import { SIDENAVITEMS } from '../constants';
import Content from "../components/content/content";

const HomePage: React.FC<any> = () => {
    return (
        <>
            <Header title={'Order creator'} />
            <Main>
                <SideNavList navItems={SIDENAVITEMS} />
                <Content />
            </Main>
            <Footer>Footer</Footer>
        </>
    );
};

export default HomePage;
