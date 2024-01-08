import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorWidget.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/UI/Button/Button'

interface ErrorWidgetProps {
    className?: string
}
export const ErrorWidget = ({ className }: ErrorWidgetProps) => {
    const { t } = useTranslation('error')

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={ classNames(cls.errorwidget, {}, [className]) }>
            <div className={cls.message}>
                <h2>{ t('error-message') }</h2>
                <Button theme={ButtonTheme.RED} onClick={ reloadPage }>{ t('page-update-btn') }</Button>
            </div>
        </div>
    )
}
