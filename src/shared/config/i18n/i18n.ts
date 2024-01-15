import i18next from 'i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import I18nextHttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18next
    .use(I18nextHttpBackend)
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: !!__IS_DEV__,
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: '/locals/{{lng}}/{{ns}}.json'
        }
    })

export default i18next
