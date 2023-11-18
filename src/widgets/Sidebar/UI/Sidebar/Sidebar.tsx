import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { Button, ButtonTheme } from 'shared/UI/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher/UI/LangSwitcher'

interface SidebarProps {
    className?: string
}
export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(true)

    const handleSidebarToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                onClick={handleSidebarToggle}
            >
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}