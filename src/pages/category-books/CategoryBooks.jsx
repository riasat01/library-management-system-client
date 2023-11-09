import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "../../auth-provider/AuthProvider";
import { useState } from "react";
import useAxiosSecure from "../../custom-hooks/useAxiosSecure";
import { useEffect } from "react";
import swal from "sweetalert";
import BookCard from "../books/books-component/BookCard";


const CategoryBooks = () => {
const { user } = useContext(UserAuth);
const [books, setBooks] = useState([]);
const { name } = useParams()

// response through axios interceptor
const axiosSecure = useAxiosSecure();
useEffect(() => {
    axiosSecure.get(`/books?category=${name}&email=${user?.email}`)
        .then(res => {
            // console.log(res);
            setBooks(res?.data);
        })
        .catch(error => swal('Error', `${error.message}`, 'error'));
}, [])
return (
    <section className="mx-4 md:mx-12 lg:mx-24">
        <section className="flex justify-between items-center">
            <h1 className="my-24 border-b-4 border-cyan-500 text-lg md:text-3xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 p-4 w-fit">Book Category: {name}</h1>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                books?.map(book => <BookCard key={book._id} book={book}></BookCard>)
            }
        </div>
    </section>
);
};

export default CategoryBooks;