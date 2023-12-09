
import { createBrowserRouter } from 'react-router-dom';
import Root from './../Layouts/Root';
import Home from '../Pages/Home/Home';
import Addproducts from '../Pages/AddProducts/Addproducts';
import Branddetails from '../Pages/BrandDetails/Branddetails';
import MyCart from '../Pages/MyCart/MyCart';
import Updateproduct from '../Pages/UpdateProducts/Updateproduct';
import BrandProducts from '../Pages/BrandProducts/BrandProducts';
import ProductDetails from '../Pages/ProductDetails/ProductDetails';
import SignUp from '../Pages/Auth/SignUp/SignUp';
import LogIn from '../Pages/Auth/LogIn/Login';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';
import UpdateProduct from '../Pages/UpdateProduct/UpdateProduct';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';

const Routes = createBrowserRouter ([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('/brand.json'),
                // loader: () =>fetch('https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app//product')
            },
            {
                path: '/addproducts',
                element:<PrivateRoute><Addproducts></Addproducts></PrivateRoute>,
            },
            {
               path:"/branddetails",
               element:<Branddetails></Branddetails>,
               loader: () => fetch('/brand.json')
            },
            {
               path:"/updateProduct",
               element: <PrivateRoute><Updateproduct></Updateproduct></PrivateRoute>,
               loader: () =>fetch('https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app/product')
            },

            {
                path:"/mycart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: "/brandProducts/:id",
                element: <BrandProducts></BrandProducts>
            },
            
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: '/updateProducts/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
            }
            
            
        ]

    }
])

export default Routes;