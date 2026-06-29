export interface SubMenuItem {
    title: string;
    href: string;
}

export interface MenuItem {
    title: string;
    href: string;
    subItems?: SubMenuItem[];
    static?: boolean;
}

import { navigationItems } from "./profileData";

const menuData: MenuItem[] = navigationItems;

export default menuData;
