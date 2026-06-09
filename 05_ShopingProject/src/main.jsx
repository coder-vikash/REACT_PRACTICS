import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./component/Home.jsx";
import { About } from "./component/About.jsx";
import { Contact } from "./component/Contact.jsx";
import { Help } from "./component/Help.jsx";
import { Product } from "./component/Product.jsx";
import { SingleProduct } from "./component/SingleProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/help", element: <Help /> },
      { path: "/product", element: <Product /> },
      { path: "/product/:id", element: <SingleProduct /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
