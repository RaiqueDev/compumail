import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { DefaultLayout } from './layout/DefaultLayout'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
