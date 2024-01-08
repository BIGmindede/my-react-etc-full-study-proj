import type { Meta, StoryObj } from '@storybook/react'
import { Themes } from 'app/providers/themeProvider'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Themes.DARK)]
