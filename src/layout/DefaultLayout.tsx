import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { SubNavBar } from '../components/SubNavBar'

export const DefaultLayout = () => {
  return (
    <>
      <NavBar />
      <SubNavBar />
      <Outlet />
    </>
  )
}
