import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Product from "./Components/Product/Product";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Singleproduct from "./Components/SingleProduct/Singleproduct";
import Menpage from "./Components/Menpage/menpage";
import Womenpage from "./Components/Womenpage/womenpage";
import Kidspage from "./Components/Kidspage/kidspage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/men" element={<Menpage />} />
      <Route path="/women" element={<Womenpage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/kids" element={<Kidspage />} />

      <Route path="/men/:productid" element={<Singleproduct />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
