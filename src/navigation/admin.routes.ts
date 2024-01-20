import AdminScreen from "../screens/AdminScreen";
import { IRoute } from "./navigation.types";

export const adminRoutes: IRoute[] = [
    {
        name: 'Admin',
        component:AdminScreen,
        isAdmin: true
    }
]