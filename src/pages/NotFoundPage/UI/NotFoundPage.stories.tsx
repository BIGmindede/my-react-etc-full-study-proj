import type { Meta, StoryObj } from '@storybook/react'
import { Themes } from 'app/providers/themeProvider'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'
import { NotFoundPage } from './NotFoundPage'

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Themes.DARK)]
