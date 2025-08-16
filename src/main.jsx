import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Error from './components/Error.jsx'
import ProductDetails from './components/ProductDetails.jsx'

      // Create Routing Configuration
    const appRouter = createBrowserRouter([
      {
        path:"/",
        element: < App />,
        children:[
          {
          path:"/",
          element: < Home />,
          },
          {
          path:"/about",
          element: < About />,
          },
          {
          path:"/contact",
          element: < Contact />,
          },
          {
          path:"/product-details/:id",
          element: < ProductDetails />,
          },

        
      ],
        errorElement: <Error />
      },
      
    ])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    < RouterProvider router ={appRouter} />

    
  </StrictMode>,
)
