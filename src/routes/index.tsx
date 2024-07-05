import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/home"
import Detail from "../pages/detail"

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/detail/:id",
            element: <Detail/>
        }
    ])
    return (
        <RouterProvider router={ routes} />
    );
}
 
export default Routes;