import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductLists from './pages/ProductLists'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'
import Profile from './pages/Profile'

const isAuthenticated = true

function ProtectedRoutes() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  return isAuthenticated ? <Navigate to='/' /> : <Outlet />
}

export default function useRouteElements() {
  const routeElement = useRoutes([
    {
      path: '',
      element: <ProtectedRoutes />,
      children: [
        {
          path: '/profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        },
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ProductLists />
        </MainLayout>
      )
    }
  ])
  return routeElement
}
