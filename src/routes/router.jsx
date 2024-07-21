import { Route, Routes } from "react-router-dom";
import { Home, Layout, ProductInner } from "../pages/index";

export const routesArr = [
    {
        id: 0,
        path: "/catalog",
        element: Home,
    },
    {
        id: 1,
        path: '/catalog/:id',
        element: ProductInner
    }
];
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {
                    routesArr.map((route, index) => {
                        const RouteComponent = route.element;
                        return (
                            <Route key={index} index={!route.path && true} path={route.path}
                                element={
                                    <RouteComponent />
                                } />
                        )
                    })
                }
            </Route>
        </Routes>
    )
}

export default Router