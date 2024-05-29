
import Cart from "../screens/Cart";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Teamwork from "../screens/Teamwork";
import Soil from "../screens/Soil";
import { IRoute } from "./navigation.types";
import Product from "../screens/Product";
import Register from "../screens/Auth/Register";
import { Login, Onboarding, Welcome } from "../screens";

export const userRoutes: IRoute[] = [
      {
        name: "Login",
        component: Login
      },
      {
        name: "Welcome",
        component: Welcome
      }, 
      {
        name: "Onboarding",
        component: Onboarding
      }, 
      {
        name: "Register",
        component: Register,
      },
      {
        name: "Home",
        component: Home
      },
      {
        name: "Cart",
        component: Cart
      },
      {
        name: "Settings",
        component: Settings
      },
      {
        name: "Profile",
        component: Profile
      },
      {
        name: "TeamWork",
        component: Teamwork
      },
      {
        name: "Soil",
        component: Soil
      },
      {
        name: "Product",
        component: Product
      }
]

