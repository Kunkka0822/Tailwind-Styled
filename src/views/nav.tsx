import { matchPath } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
// import ParcelDetail from "./pages/parcel/detail";
import Rooms from "./pages/Rooms";
// import PurchaseToken from "./pages/PurchaseToken";

export enum Guard {
    PUBLIC = 0,
    USER = 1,
};

export type NavItemData = {
    anchor: string;
    to: string;
    component: any;
    guard: Guard;
};

const NavData: Array<NavItemData> = [
    {
        anchor: 'Login',
        to: '/',
        component: Login,
        guard: Guard.PUBLIC,
    },
    {
        anchor: 'Rooms Page',
        to: '/rooms',
        component: Rooms,
        guard: Guard.PUBLIC,
    },
    // {
    //     anchor: 'HOME, List all parcels',
    //     to: '/',
    //     component: Home,
    //     guard: Guard.PUBLIC,
    // },
];

export default NavData;
export const publicPaths = NavData.filter(({ guard }) => guard === Guard.PUBLIC);

export const isPublicPath = (path: string) => {
    const navItem = getNavItemFromPath(path);
    if (!navItem) return false;
    return navItem.guard === Guard.PUBLIC;
    // publicPaths.findIndex(({ to }) => to === path) > -1;
}

export const getNavItemFromPath = (path: string): NavItemData | null => {
    for (let i = NavData.length - 1; i >= 0; i --) {
        if (matchPath(NavData[i].to, path)) return NavData[i];
    }
    return null;
}