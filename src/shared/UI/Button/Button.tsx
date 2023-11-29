import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import type { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: string
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...otherProps }: ButtonProps) => {
    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
