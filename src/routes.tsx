import App from '@/App'

import Home from '@/pages/Home'

import OTP from '@/pages/auth/OTP'
import Login from '@/pages/auth/Login'
import Signup from '@/pages/auth/Signup'

import Services from '@/pages/Services/services'
import PharmacyForm from '@/pages/Services/PharmacyForm'

import Profile from '@/pages/Profile'
import Identity from '@/pages/Profile/Identity'
import Notifications from '@/pages/Profile/Notifications'
import Orders from '@/pages/Profile/Orders'
import MedicalRecord from '@/pages/Profile/MedicalRecord'
import Addresses from '@/pages/Profile/Addresses'
import Checkout from '@/pages/Profile/Checkout/Checkout'
import Wallet from '@/pages/Profile/Wallet/Wallet'

import Contact from '@/pages/ContactUs/Contact'
import FAQ from '@/pages/FAQ'

import UserRoutes from '@/components/UserRoutes'
import GuestRoutes from '@/components/GuestRoutes'
import ServicesHome from './pages/Services/ServicesHome/ServicesHome'
import ProfileHome from './pages/Profile/ProfileHome'
import ServiceList from './pages/Services/ServiceList'
import ServiceForm from './pages/Services/ServiceForm'

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
              { path: 'pharmacyForm', element: <PharmacyForm /> },
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
      { path: 'faq', element: <FAQ /> },
    ],
  },
]
