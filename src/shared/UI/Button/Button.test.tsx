import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('ButtonComponent', () => {
    test('is rendered with text passed into children props', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
    test('is rendered with theme class passed to props', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
