import React, {ReactNode, FC, useMemo, useState, PropsWithChildren } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT

interface Props {
  children: ReactNode;
}

const ThemeProvider: React.FC<PropsWithChildren<Props>> = ({children}) => {
    
    const [appTheme, setAppTheme] = useState<Themes>(defaultTheme)

    const defaultProps = useMemo(() => ({
        appTheme: appTheme,
        setAppTheme: setAppTheme
    }), [appTheme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider