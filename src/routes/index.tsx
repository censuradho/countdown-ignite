import { Routes, Route } from 'react-router-dom'
import { paths } from '@/src/constants/routes'
import { History, Home, Timer } from '@/src/pages'
import { MainLayout } from '../layouts'

export function RootRoutes () {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path={paths.home}
          element={<Home />}
        />
        <Route
          path={paths.history}
          element={<History />}
        />
        <Route
          path={paths.timer}
          element={<Timer />}
        />
      </Route>
    </Routes>
  )
}
