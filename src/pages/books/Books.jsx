import { useEffect, useState } from "react";
import useAxiosSecure from "../../custom-hooks/useAxiosSecure";
import swal from 'sweetalert';
import BookCard from "./books-component/BookCard";

const Books = () => {

    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState('All');

    // response through axios interceptor
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/books?category=${category}`)
            .then(res => {
                // console.log(res);
                setBooks(res?.data);
            })
            .catch(error => swal('Error', `${error.message}`, 'error'));
    }, [category])
    return (
        <section className="mx-4 md:mx-12 lg:mx-24">
            <section className="flex justify-between items-center">
                <h1 className="my-24 border-b-4 border-cyan-500 text-lg md:text-3xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 p-4 w-fit">Book Category: {category}</h1>
                    <select onChange={(e) => setCategory(e.target.value)} className="w-fit rounded-2xl py-2 px-4 bg-slate-700 bg-opacity-70 text-white" name="category" placeholder="Category" id="category">
                        <option value="All" >All</option>
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>
                        <option value="History">History</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    books?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
        </section>
    );
};

export default Books;