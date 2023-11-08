

const BookDetails = () => {
    const { image_url, name, quantity, author, category, description, rating } = book;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
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
                <div className="card-actions justify-end">
                    <button className='px-5 py-2 rounded-lg bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] '>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;