import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../custom-hooks/useAxiosSecure";
import swal from "sweetalert";
import BorrowModal from "./book-details-components/BorrowModal";


const BookDetails = () => {
    const axiosSecure = useAxiosSecure();
    const params = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        axiosSecure.get(`/book/${params.id}`)
            .then(res => {
                // console.log(res);
                setBook(res?.data);
            })
            .catch(error => swal('Error', `${error.message}`, 'error'));
    }, [])
    const { image_url, name, quantity, author, category, description, rating } = book;
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl mx-4 md:mx-auto mt-28 w-full md:w-1/2">
                <figure><img className='h-64 w-full' src={image_url} alt={`image of ${name}`} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <section className='flex justify-between items-center'>
                        <p>Category: {category}</p>
                        <p>Author: {author}</p>
                    </section>
                    <section className='flex justify-between items-center'>
                        <p>Quantity: {quantity}</p>
                        <p>Rating: {rating}</p>
                    </section>
                    <div className="card-actions w-full">
                        <button className='w-full px-5 py-2 rounded-lg bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan]' onClick={() => document.getElementById('my_modal_3').showModal()}>Borrow</button>
                        <button className='w-full px-5 py-2 rounded-lg bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan]'>Read</button>
                    </div>
                </div>
            </div>

            {/* borrow modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
            <BorrowModal book={book}></BorrowModal>
        </>

    );
};

export default BookDetails;