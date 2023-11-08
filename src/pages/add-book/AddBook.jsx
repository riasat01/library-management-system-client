import swal from 'sweetalert';
import login_img from '../../assets/login/login-bg.jpg'
import useAxiosSecure from "../../custom-hooks/useAxiosSecure";

const AddBook = () => {
    const axiosSecure = useAxiosSecure();

    const handleAddBook = e => {
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
        axiosSecure.post('/books', book)
        .then(res => {
            console.log(res);
            swal('Success', 'Congratulations! book added successfully', 'success');
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
                    <form onSubmit={handleAddBook} className="space-y-6">
                        <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="photo" placeholder="Photo URL" id="photo" />
                        <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="name" placeholder="Name" id="name" />
                        <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="number" name="quantity" placeholder="Quantity of the book" id="quantity" />
                        <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="author" placeholder="Author Name" id="author" />
                        <select className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" name="category" placeholder="Category" id="category">
                            <option value="Select a" >Select a category</option>
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                        </select>
                        <textarea className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" placeholder='Description' name='description'></textarea>
                        <select className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" name="rating" placeholder="Rating" id="rating">
                            <option value="Ratings" >Ratings</option>
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
                        <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] " type="submit" value="Add" />
                    </form>
                </section>

            </section>
        </div>
    );
};

export default AddBook;