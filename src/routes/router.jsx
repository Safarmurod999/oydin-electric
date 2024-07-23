import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Layout, ProductInner } from "../pages/index";
import { Spinner } from "../components";
import { useFetchMultipleAPIs } from "../hooks/hooks";

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
    const urls = [
        "/categories",
        "/brands",
        "/product-list",
    ]
    const { data, loading, error } = useFetchMultipleAPIs(urls);

    if (loading) {
        return <Spinner position={"full"} />
    }
    if (error) {
        console.log(error);
    }
    return (
        <Routes>
            {
                routesArr.map((route, index) => {
                    const RouteComponent = route.element;

                    return (
                        <Route key={index} index={route.path == "/catalog" && true} path={route.path}
                            element={
                                <Layout data={data}>
                                    <RouteComponent data={data} />
                                </Layout>
                            } />
                    )
                })
            }
            <Route path='*' element={<Navigate to={'/catalog'} replace />} />
        </Routes>
    )
}

export default Router