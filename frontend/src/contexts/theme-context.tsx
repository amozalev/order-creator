import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';

export const ThemeContext = React.createContext({
    isLightTheme: false,
    switchTheme: () => {}
});

const ThemeProvider = ({ children }: any) => {
    const [light, setTheme] = useState<boolean>(false);
    const switchTheme = () => setTheme(!light);

    return (
        <ThemeContext.Provider value={{ isLightTheme: light, switchTheme }}>
            <StyledThemeProvider theme={light ? darkTheme : lightTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
