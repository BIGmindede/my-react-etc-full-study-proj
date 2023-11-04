import { Routes, Route} from "react-router-dom"
import { Link } from "react-router-dom"
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy"
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy"
import { Suspense, useContext } from 'react'
import './styles/index.scss'
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"



export const App = () => {

    const {theme, handleThemeBtn} = useTheme()

    return (
        <div className={classNames('app',{}, [theme])}>
            <button onClick={handleThemeBtn}>{theme}</button>
            <Link to={"/"}>Main Page</Link>
            <Link to={"/about"}>About page</Link>
            <Suspense fallback= {<div>Loading...</div>}>
                <Routes>
                        <Route path="/about" element={<AboutPageLazy/>}/>
                        <Route path="/" element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}