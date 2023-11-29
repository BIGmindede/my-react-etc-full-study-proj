import { useTranslation } from 'react-i18next'

export default () => {
    const { t, i18n } = useTranslation('aboutpage')
    return (
        <div>
            <h1>{t('about_p_header')}</h1>
        </div>
    )
}
