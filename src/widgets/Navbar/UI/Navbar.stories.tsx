import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { RouterDecorator } from 'shared/config/storyBook/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'
import { Themes } from 'app/providers/themeProvider'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
Light.decorators = [RouterDecorator, ThemeDecorator(Themes.LIGHT)]

export const Dark: Story = {}
Dark.decorators = [RouterDecorator, ThemeDecorator(Themes.DARK)]
