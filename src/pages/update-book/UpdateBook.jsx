import { useParams } from 'react-router-dom';
import login_img from '../../assets/login/login-bg.jpg';
import useAxiosSecure from '../../custom-hooks/useAxiosSecure';
import { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../auth-provider/AuthProvider';
import swal from 'sweetalert';

const UpdateBook = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(UserAuth);
    const [ book, setBook ] = useState({});
    const { _id, image_url, name, quantity, author, category, description, rating } = book;

    // loadinng the previous data
    useEffect(() => {
    axiosSecure.get(`/book/${id}?email=${user?.email}`)
            .then(res => {
                // console.log(res);
                setBook(res?.data);
            })
            .catch(error => swal('Error', `${error.message}`, 'error'));
    }, [])

    // update data
    const handleUpdateBook = e => {
        e?.preventDefault();
        const form = e?.target;
        // const { image_url, name, quantity, author, category, description, rating } = book;
        const image_url = form?.photo?.value;
        const name = form?.name?.value;
        const quantity = form?.quantity?.value;
        const author = form?.author?.value;
        const category = form?.category?.value;
        const description = form?.description?.value;
        const rating = form?.rating?.value;

        if (category === 'Select a') {
            swal('Error', 'Please select a valid category', 'error')
            return;
        }

        if (!parseFloat(rating)) {
            swal('Error', 'Please select a valid rating', 'error')
            return;
        }

        const book = { image_url, name, quantity, author, category, description, rating };
        // console.log(book);
        axiosSecure.put(`/update/${_id}`, book)
        .then(res => {
            console.log(res);
            swal('Success', 'Congratulations! book updated successfully', 'success');
        })
        .catch(error => swal('Error', `${error.message}`, 'error'));
    }

    return (
        <div style={
            {
                backgroundImage: `url(${login_img}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                backgroundBlendMode: 'overlay',
                backgroundSize: 'cover'
            }
        } className="h-screen w-screen text-white pt-24">

            <section className="w-full md:w-1/2 lg:w-1/3 mx-auto h-screen">
                <h1 className="mb-12 border-b-4 border-cyan-500 text-lg md:text-3xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 py-4 w-fit">Add Book</h1>
                <section className='flex justify-center items-center'>
                    <form onSubmit={handleUpdateBook} className="space-y-6">
                        <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="photo" defaultValue={image_url} id="photo" />
                        <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="name" defaultValue={name} id="name" />
                        <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="number" name="quantity" defaultValue={quantity} id="quantity" />
                        <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="author" defaultValue={author} id="author" />
                        <select className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" name="category" defaultValue={category} id="category">
                            <option value={category} >{category}</option>
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                        </select>
                        <textarea className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" defaultValue={description} name='description'></textarea>
                        <select className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" name="rating" defaultValue={rating} id="rating">
                            <option value={rating} >{rating}</option>
                            <option value="0.5">0.5</option>
                            <option value="1.0">1.0</option>
                            <option value="1.5">1.5</option>
                            <option value="2.0">2.0</option>
                            <option value="2.5">2.5</option>
                            <option value="3.0">3.0</option>
                            <option value="3.5">3.5</option>
                            <option value="4.0">4.0</option>
                            <option value="4.5">4.5</option>
                            <option value="5.0">5.0</option>
                        </select>
                        <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] " type="submit" value="Update" />
                    </form>
                </section>

            </section>
        </div>
    );
};

export default UpdateBook;