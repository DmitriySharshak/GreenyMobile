import Admin from "../screens/Admin/Admin";
import { IRoute } from "./navigation.types";

export const adminRoutes: IRoute[] = [
    {
        name: 'Admin',
        component:Admin,
        isAdmin: true
    }
]