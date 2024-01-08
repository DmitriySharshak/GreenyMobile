
import Auth from "../screens/Auth/Auth";
import Cart from "../screens/Cart/Cart";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Settings from "../screens/Settings/Settings";
import { IRoute } from "./navigation.types";

export const userRoutes: IRoute[] = [
      {
        name: "Auth",
        component: Auth
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
      }
]