import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import Home from "./pages/Home.jsx";



const Contact = lazy(() => import("./pages/Contact.jsx"));
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"));
const CartItems = lazy(() => import("./pages/CartItems.jsx"));

//  Create Routing Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Home />  
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div className="p-5 text-xl">Loading Contact...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/product-details/:id",
        element: (
          <Suspense fallback={<div className="p-5 text-xl">Loading Product...</div>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div className="p-5 text-xl">Loading Cart...</div>}>
            <CartItems />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
