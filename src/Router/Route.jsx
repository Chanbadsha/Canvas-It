import { createBrowserRouter } from "react-router"
import MainLayout from "../Layout/MainLayout"
import ErrorPage from "../Page/ErrorPage/ErrorPage"

const Route = createBrowserRouter([
{
    path:'/',
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {

        }
    ]
}
])

export default Route