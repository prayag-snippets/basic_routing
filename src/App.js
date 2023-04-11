import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductPage from "./Pages/Products";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ProductDetailPage from "./Pages/ProductDetail";
function App () {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/products', element: <ProductPage /> },
        { path: '/products/:productID', element: <ProductDetailPage />} //: represents that productID is dynamic

      ],
    },
  ])
  return (
    <RouterProvider router={route} />
  )
}

export default App;
