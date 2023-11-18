import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/UI/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

interface NavbarProps { 
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    const {t, i18n} = useTranslation("navbar")
    
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"}>{t("main_navbar_link")}</AppLink>
                <AppLink to={"/about"}>{t("about_navbar_link")}</AppLink>        
            </div>
            
        </div>
    )
}