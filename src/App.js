import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Homepage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetail.js";
import RootLayout from "./pages/Root.js";
import ErrorPage from "./pages/Error.js";

// Old way
// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />}></Route>
//   </Route>
// );
// const router = createBrowserRouter(routerDefinitions);

// New way
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
