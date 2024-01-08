import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'notfound'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig = [
    {
        path: RoutePath.main,
        element: <MainPage/>
    },
    {
        path: RoutePath.notfound,
        element: <NotFoundPage/>
    }
]
