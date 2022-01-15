import * as React from 'react';
import { hot } from 'react-hot-loader';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { baseTheme, darkTheme, lightTheme } from './styles/theme';
import { Routing } from './routes';

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Routing />
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default hot(module)(App);
