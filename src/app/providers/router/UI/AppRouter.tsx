import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Skeleton } from 'shared/UI/Skeleton/Skeleton'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
    return (
        <Routes>
            {
                routeConfig.map(({ path, element }) => (
                    <Route key={path} path={path} element={
                        <Suspense fallback={ <Skeleton /> }>
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        </Suspense>
                    }/>
                ))
            }
        </Routes>
    )
}

export default AppRouter
