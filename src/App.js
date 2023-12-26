import "./App.css";
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
import Homepage from "./Components/HomePage/Homepage";
import LoginLayout from "./Layouts/LoginLayout/LoginLayout";
import EntireLayout from "./Layouts/EntireLayout/EntireLayout";
import Loginpage from "./Components/Logins/Loginpage/Loginpage";
import LoginOtp from "./Components/Logins/LoginOTP/Loginotp";
import LoginWPass from "./Components/Logins/LoginWPass/LoginWPass";
import Bag from "./Components/Bag/Bag";
import Test from "./Components/reduxtest/test";
import { AuthProvider } from "react-auth-kit";
import Error404 from "./Components/Error404/Error404";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<EntireLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/men" element={<Menpage />} />
        <Route path="/shop/women" element={<Womenpage />} />
        <Route path="/shop/kids" element={<Kidspage />} />
        <Route path="/shop/product/:productid" element={<Singleproduct />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="/" element={<LoginLayout />}>
        <Route path="/auth/login" element={<Loginpage />} />
        <Route path="/auth/login-verif" element={<LoginOtp />} />
        <Route path="/auth/loginwpass" element={<LoginWPass />} />
      </Route>
      <Route path="/bag" element={<Bag />} />
      <Route path="/test" element={<Test />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
