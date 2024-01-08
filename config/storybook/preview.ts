import type { Preview } from '@storybook/react'
import { Themes } from 'app/providers/themeProvider'
import { StyleDecorator } from 'shared/config/storyBook/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'
import { TranslationDecorator } from 'shared/config/storyBook/TranslationDecorator'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators:
        [
            TranslationDecorator,
            StyleDecorator,
            ThemeDecorator(Themes.LIGHT)
        ]
}

export default preview
