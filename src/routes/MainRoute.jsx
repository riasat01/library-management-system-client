import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import LoginPage from '../pages/login-page/LoginPage';
import Login from '../pages/login-page/login-components/Login';
import Register from '../pages/login-page/login-components/Register';
import AddBook from '../pages/add-book/AddBook';
import BorrowedBooks from '../pages/borrowed-books/BorrowedBooks';
import Books from '../pages/books/Books';

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
                element: <Books></Books>
            },
            {
                path: '/add_books',
                element: <AddBook></AddBook>
            },
            {
                path: 'borrowed',
                element: <BorrowedBooks></BorrowedBooks>
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