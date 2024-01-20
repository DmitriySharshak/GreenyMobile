
import Auth from "../screens/AuthScreen";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Teamwork from "../screens/TeamworkScreen";
import SoilScreen from "../screens/SoilScreen";
import { IRoute } from "./navigation.types";
import ProductScreen from "../screens/ProductScreen";

export const userRoutes: IRoute[] = [
      {
        name: "Auth",
        component: Auth
      },
      {
        name: "Home",
        component: HomeScreen
      },
      {
        name: "Cart",
        component: CartScreen
      },
      {
        name: "Settings",
        component: SettingsScreen
      },
      {
        name: "Profile",
        component: ProfileScreen
      },
      {
        name: "TeamWork",
        component: Teamwork
      },
      {
        name: "Soil",
        component: SoilScreen
      },
      {
        name: "ProductScreen",
        component: ProductScreen
      }
]