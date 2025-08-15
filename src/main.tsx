import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
