import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../custom-hooks/useAxiosSecure";
import { UserAuth } from "../../auth-provider/AuthProvider";
import swal from "sweetalert";
import BorrowedCard from "./borrowed-books-component/BorrowedCard";


const BorrowedBooks = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(UserAuth);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axiosSecure.get(`/borrows?email=${user?.email}`)
            .then(res => {
                console.log(res?.data);
                setBooks(res?.data)
            })
            .catch(error => swal('Error', `${error.message}`, 'error'));
    }, [])


    // handle delete book/ this will be called from BorrowCard component
    const handleReturn = (name, author, category, _id) => {
        axiosSecure.delete(`/borrow?email=${user?.email}&name=${name}`)
            .then(res => {
                console.log(res);
                axiosSecure.put(`/books?name=${name}&author=${author}&category=${category}`, { })
                    .then(res => {
                        console.log(res);
                        const temp = books.filter(book => book._id !== _id);
                        setBooks(temp);
                        swal('Success', 'Congratulation! You have successfully returned the book', 'success')
                    })
                .catch(error => swal('Error', `${error.message}`, 'error'));
            })
            .catch(error => console.log(`${error.message}`));
    }
    return (
        <section className="mx-4 md:mx-12 lg:mx-24">
            <section className="flex justify-between items-center">
                <h1 className="my-24 border-b-4 border-cyan-500 text-lg md:text-3xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 p-4 w-fit">Borrowed Books</h1>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    books?.map(book => <BorrowedCard key={book._id} book={book} handleReturn={handleReturn}></BorrowedCard>)
                }
            </div>
        </section>
    );
};

export default BorrowedBooks;