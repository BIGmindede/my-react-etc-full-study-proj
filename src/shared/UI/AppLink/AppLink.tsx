import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.css'
import { FC } from 'react'
import { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = ({ to, className, children, theme = AppLinkTheme.PRIMARY}: AppLinkProps) => {
    return (
        <Link to={to} className={classNames(cls.applink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
}