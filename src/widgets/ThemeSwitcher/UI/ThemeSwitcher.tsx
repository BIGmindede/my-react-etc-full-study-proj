import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Themes, useTheme } from 'app/providers/themeProvider'
import LightIcon from 'shared/assets/light.svg'
import DarkIcon from 'shared/assets/dark.svg'
import { Button, ButtonTheme } from 'shared/UI/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, handleThemeBtn } = useTheme()
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.themeswitcher, {}, [className])}
            onClick={handleThemeBtn}
        >
            {theme === Themes.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
}