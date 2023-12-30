import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('SidebarComponent', () => {
    test('is rendered correctly on the page', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getAllByTestId('sidebar'))
    })
    test('is toggled correctly', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggler')
        expect(screen.getAllByTestId('sidebar'))
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
