import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { Button, ButtonTheme } from 'shared/UI/Button/Button'
import { useTranslation } from "react-i18next"

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    
    const { t, i18n } = useTranslation()

    const handleTranslation = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button 
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.langswitcher, {}, [className])}
            onClick={handleTranslation}
        >
            {t("translate_btn")}
        </Button>
    )
}