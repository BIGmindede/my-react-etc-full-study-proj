import { type StoryFn } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18nForStoryBook from 'shared/config/i18n/i18nForStoryBook'

export const TranslationDecorator = (StoryComponent: StoryFn) => (
    <I18nextProvider i18n={ i18nForStoryBook }>
        <StoryComponent />
    </I18nextProvider>
)
