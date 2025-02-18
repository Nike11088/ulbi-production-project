import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/lib/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<div>Loading123...</div>}>{element}</Suspense>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
