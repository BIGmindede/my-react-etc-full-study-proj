import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Button } from 'shared/UI/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher/UI/LangSwitcher'
import { BugButton } from 'app/providers/ErrorBoundary'

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true)

    const handleSidebarToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                onClick={handleSidebarToggle}
                data-testid='sidebar-toggler'
            // eslint-disable-next-line i18next/no-literal-string
            >
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
                <BugButton/>
            </div>
        </div>
    )
}
