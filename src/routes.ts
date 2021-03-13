import { ShopList } from './pages/ShopList';

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
    }
];