import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import LoginPage from '../pages/login-page/LoginPage';
import Login from '../pages/login-page/login-components/Login';
import Register from '../pages/login-page/login-components/Register';
import AddBook from '../pages/add-book/AddBook';
import BorrowedBooks from '../pages/borrowed-books/BorrowedBooks';
import Books from '../pages/books/Books';
import BookDetails from '../pages/book-details/BookDetails';
import PrivateRoute from './PrivateRoute';
import UpdateBook from '../pages/update-book/UpdateBook';
import CategoryBooks from '../pages/category-books/CategoryBooks';
import Read from '../pages/read/Read';
import AdminRoute from './AdminRoute';

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
                path: '/books',
                element: <PrivateRoute><Books></Books></PrivateRoute>
            },
            {
                path: '/books/:name',
                element: <PrivateRoute><CategoryBooks></CategoryBooks></PrivateRoute>
            },
            {
                path: '/read/:id',
                element: <PrivateRoute><Read></Read></PrivateRoute>
            },
            {
                path: '/book/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>
            },
            {
                path: '/add_books',
                element: <AdminRoute><AddBook></AddBook></AdminRoute>
            },
            {
                path: '/update/:id',
                element: <AdminRoute><UpdateBook></UpdateBook></AdminRoute>
            },
            {
                path: '/borrowed',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
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