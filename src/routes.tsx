import App from '@/App'

import Home from '@/pages/Home'

import Login from '@/pages/auth/Login'
import Signup from '@/pages/auth/Signup'

import Services from '@/pages/Services/services'
import Doctor from '@/pages/Services/doctor/Doctor'
import Pharmacy from '@/pages/Services/Pharmacy'
import Laboratory from '@/pages/Services/Laboratory'
import Physiotherapy from '@/pages/Services/Physiotherapy'
import Nurse from '@/pages/Services/Nurse'

import Profile from '@/pages/Profile'
import Identity from '@/pages/Profile/Identity'
import Notifications from '@/pages/Profile/Notifications'
import Orders from '@/pages/Profile/Orders'
import MedicalRecord from '@/pages/Profile/MedicalRecord'
import Addresses from '@/pages/Profile/Addresses'
import Checkout from '@/pages/Profile/Checkout/Checkout'

import Contact from '@/pages/Contact'
import FAQ from '@/pages/FAQ'

import UserRoutes from '@/components/UserRoutes'
import GuestRoutes from '@/components/GuestRoutes'
import ServicesHome from './pages/Services/ServicesHome/ServicesHome'
import ProfileHome from './pages/Profile/ProfileHome'

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      {
        element: <GuestRoutes />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <Signup /> },
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
              { path: 'doctor', element: <Doctor /> },
              { path: 'pharmacy', element: <Pharmacy /> },
              { path: 'laboratory', element: <Laboratory /> },
              { path: 'physiotherapy', element: <Physiotherapy /> },
              { path: 'nurse', element: <Nurse /> },
            ],
          },
          {
            path: 'profile',
            element: <Profile />,
            children: [
              { index: true, element: <ProfileHome /> },
              { path: 'identity', element: <Identity /> },
              { path: 'checkout', element: <Checkout /> },
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
