import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storyBook/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator'
import { Themes } from 'app/providers/themeProvider'
import { LangSwitcher } from './LangSwitcher'

const meta = {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
Light.decorators = [RouterDecorator, ThemeDecorator(Themes.LIGHT)]

export const Dark: Story = {}
Dark.decorators = [RouterDecorator, ThemeDecorator(Themes.DARK)]
