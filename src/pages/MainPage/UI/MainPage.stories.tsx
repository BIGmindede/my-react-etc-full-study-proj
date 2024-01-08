import type { Meta, StoryObj } from '@storybook/react'
import { Themes } from 'app/providers/themeProvider'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'
import MainPage from './MainPage'

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Themes.DARK)]
