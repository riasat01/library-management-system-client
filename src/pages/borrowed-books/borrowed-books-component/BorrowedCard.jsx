import PropTypes from 'prop-types';
import Rating from '../../../shares-components/Rating';

const BorrowedCard = ({ book, handleReturn }) => {
    const { _id, image_url, name, borrowDate, author, category, returnDate, rating } = book;


    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-64 w-full' src={image_url} alt={`image of ${name}`} /></figure>
            <div className="card-body flex flex-col">
                <h2 className="card-title">{name}</h2>
                <section className='flex justify-between items-center'>
                    <p>Category: {category}</p>
                    <p>Author: {author}</p>
                </section>
                <section className='flex justify-between items-center flex-grow'>
                    {/* <p>Quantity: {quantity}</p> */}
                    <div className='flex justify-center items-center gap-2'>
                        <p>Rating: </p>
                        <Rating rating={rating}></Rating>
                    </div>
                </section>
                <p>Borrowed Date: {borrowDate}</p>
                <p>Returned Date: {returnDate}</p>
                <div className="card-actions w-full">
                    <button onClick={() => handleReturn(name, author, category, _id)} className='w-full px-5 py-2 rounded-lg bg-slate-300 hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] '>Return</button>
                </div>
            </div>
        </div>
    );
};

BorrowedCard.propTypes = {
    book: PropTypes.object,
    handleReturn: PropTypes.func
}



export default BorrowedCard;