import * as React from 'react';
import { Button, ButtonSize, ButtonVariant } from '../components/button/button';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Main from '../components/main/main';
import SideNavList from '../components/sidenav/sidenav-list/sidenav-list';
import Content from '../components/content/content';
import { SidenavItems } from '../constants';

const HomePage: React.FC<any> = () => {
    return (
        <>
            <Header>
                <div>Header</div>
            </Header>
            <Main>
                <SideNavList navItems={SidenavItems} />
                <Content>
                    {' '}
                    <Button size={ButtonSize.md}>Some button</Button>
                </Content>
            </Main>
            <Footer>Footer</Footer>
        </>
    );
};

export default HomePage;
