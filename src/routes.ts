import { ShopList } from './pages/ShopList';
import { Checkout } from './pages/Checkout';

interface Route {
    getPath: string;
    key: string;
    exact: boolean;
    component: any;
}

export const routes: Route[] = [
    {
        getPath: '/',
        key: 'root',
        exact: true,
        component: ShopList,
    },
    {
        getPath: '/checkout',
        key: 'checkout',
        exact: true,
        component: Checkout,
    }
];