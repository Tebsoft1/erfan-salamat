import App from '@/App'
import { lazy } from 'react'

// Lazy load all components
const Home = lazy(() => import('@/pages/Home'))

// Auth components
const OTP = lazy(() => import('@/pages/auth/OTP'))
const Login = lazy(() => import('@/pages/auth/Login'))
const Signup = lazy(() => import('@/pages/auth/Signup'))

// Services components
const Services = lazy(() => import('@/pages/Services/services'))
const ServicesHome = lazy(
  () => import('@/pages/Services/ServicesHome/ServicesHome')
)
const ServiceList = lazy(() => import('@/pages/Services/ServiceList'))
const Pharmacy = lazy(() => import('@/pages/Services/PharmacyForm'))
const ServiceForm = lazy(() => import('@/pages/Services/ServiceForm'))

// Profile components
const Profile = lazy(() => import('@/pages/Profile'))
const ProfileHome = lazy(() => import('@/pages/Profile/ProfileHome'))
const Identity = lazy(() => import('@/pages/Profile/Identity'))
const Notifications = lazy(() => import('@/pages/Profile/Notifications'))
const Orders = lazy(() => import('@/pages/Profile/Orders/Orders'))
const MedicalRecord = lazy(() => import('@/pages/Profile/MedicalRecord'))
const Addresses = lazy(() => import('@/pages/Profile/Addresses'))
const Checkout = lazy(() => import('@/pages/Profile/Checkout/Checkout'))
const Wallet = lazy(() => import('@/pages/Profile/Wallet/Wallet'))

// Other components
const Contact = lazy(() => import('@/pages/ContactUs/Contact'))

const UserRoutes = lazy(() => import('@/components/UserRoutes'))
const GuestRoutes = lazy(() => import('@/components/GuestRoutes'))
const UnderUpdatePage = lazy(
  () => import('@/pages/UnderUpdate/UnderUpdatePage')
)
const NotFound = lazy(() => import('@/pages/NotFound'))

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'auth',
        element: <GuestRoutes />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <Signup /> },
          { path: 'otp', element: <OTP /> },
        ],
      },

      {
        element: <UserRoutes />,
        children: [
          {
            path: 'services',
            element: <Services />,
            children: [
              { index: true, element: <ServicesHome /> },
              { path: 'serviceList', element: <ServiceList /> },
              { path: 'pharmacyForm', element: <Pharmacy /> },
              { path: 'serviceForm', element: <ServiceForm /> },
            ],
          },
          {
            path: 'profile',
            element: <Profile />,
            children: [
              { index: true, element: <ProfileHome /> },
              { path: 'identity', element: <Identity /> },
              { path: 'checkout', element: <Checkout /> },
              { path: 'wallet', element: <Wallet /> },
              { path: 'notifications', element: <Notifications /> },
              { path: 'orders', element: <Orders /> },
              { path: 'medical-record', element: <MedicalRecord /> },
              { path: 'addresses', element: <Addresses /> },
            ],
          },
        ],
      },

      { path: 'contact', element: <Contact /> },
      { path: 'underupdatepage', element: <UnderUpdatePage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
