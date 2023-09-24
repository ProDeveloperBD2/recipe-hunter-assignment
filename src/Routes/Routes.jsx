import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ChefLoadMap from "../components/ChefLoadMap/ChefLoadMap";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navigate to="/chef"></Navigate>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/chef",
                element: <ChefLoadMap></ChefLoadMap>,
                loader: () => fetch('https://recipe-hunter-assignment-server-qf4uy7k44-prodeveloperbd2.vercel.app/chef')
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://recipe-hunter-assignment-server-qf4uy7k44-prodeveloperbd2.vercel.app/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;