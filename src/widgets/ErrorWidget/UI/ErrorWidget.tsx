import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorWidget.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/UI/Button/Button'

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
            <h1>{ t('error-message') }</h1>
            <Button onClick={ reloadPage }>{ t('Page-update-btn') }</Button>
        </div>
    )
}
