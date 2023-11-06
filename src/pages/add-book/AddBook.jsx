import login_img from '../../assets/login/login-bg.jpg'

const AddBook = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${login_img}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                backgroundBlendMode: 'overlay',
                backgroundSize: 'cover'
            }
        } className="h-screen w-screen">
            <section className="w-full md:w-1/2 lg:w-1/3 mx-auto h-screen flex justify-center items-center">
            <form className="space-y-6">
                <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="photo" placeholder="Photo URL" id="photo" />
                <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="name" placeholder="Name" id="name" />
                <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="number" name="quantity" placeholder="Quantity of the book" id="quantity" />
                <input className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="author" placeholder="Author Name" id="author" />
                <select className="w-full rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" name="category" placeholder="Category" id="category">
                    <option value="" disabled>Select a category</option>
                    <option value="">Novel</option>
                    <option value="">Thriller</option>
                    <option value="">History</option>
                    <option value="">Drama</option>
                    <option value="">Sci-Fi</option>
                </select>
                <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] " type="submit" value="Add" />
            </form>
        </section>
        </div>
    );
};

export default AddBook;