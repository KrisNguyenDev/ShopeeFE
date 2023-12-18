import { useRoutes } from 'react-router-dom'
import ProductLists from './pages/ProductLists'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <ProductLists />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/main',
      element: (
        <MainLayout>
          <ProductLists />
        </MainLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElement
}
