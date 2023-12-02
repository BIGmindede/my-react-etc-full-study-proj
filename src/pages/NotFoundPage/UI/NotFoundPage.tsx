import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t, i18n } = useTranslation('notfoundpage')

    return (
        <div className={classNames(cls.notfoundpage, {}, [className])}>
            <h1>{ t('not_found_page_header') }</h1>
            <p>{ t('not_found_page_content') }</p>
        </div>
    )
}
