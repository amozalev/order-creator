import * as React from 'react';
import { hot } from 'react-hot-loader';
import GlobalStyles from './styles/global';
import { Routing } from './routes';
import ThemeProvider from './contexts/theme-context';

const App = () => {
    return (
        <ThemeProvider>
            <Routing />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default hot(module)(App);
