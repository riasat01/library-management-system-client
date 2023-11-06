import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import LoginPage from '../pages/login-page/LoginPage';
import Login from '../pages/login-page/login-components/Login';
import Register from '../pages/login-page/login-components/Register';
import AddBook from '../pages/add-book/AddBook';

const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'books',
                element: <div className=""></div>
            },
            {
                path: '/add_books',
                element: <AddBook></AddBook>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>,
                children: [
                    {
                        path: '/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/login/register',
                        element: <Register></Register>
                    }
                ]
            }
        ]
    }
])

export default MainRoute;