import { type StoryFn } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '../i18n/i18nForStoryBook'

export const TranslationDecorator = (StoryComponent: StoryFn) => {
    return (
        <I18nextProvider i18n={i18nForTests}>
            <StoryComponent/>
        </I18nextProvider>
    )
}
