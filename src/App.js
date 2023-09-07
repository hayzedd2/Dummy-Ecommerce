import Fetchdata from "./components/Fetchdata";
import Navbar from "./components/Navbar";
import Comments from "./components/Comments";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./components/Categories";
import UserSearch from "./components/UserSearch";
import Todos from "./components/Todos";
import SingleProduct, { LoadSingleProduct } from "./components/singleProduct";
import SingleCategory, { LoadCategory } from "./views/SingleCategory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
          index: true,
          element: <Fetchdata/>
        },
        {
          path: "products/:id",
          element:<SingleProduct/>,
          loader : LoadSingleProduct
        },
        {
          path: "categories",
          element:<Categories/>,
         
        },
        {
          path: "categories/:cat",
          element:<SingleCategory/>,
          loader : LoadCategory
         
        },
      
        {
          path: "userssearch",
          element:<UserSearch/>
        },
        {
          path: "todos",
          element:<Todos/>
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
