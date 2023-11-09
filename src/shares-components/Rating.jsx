import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
    let full = parseInt(rating);
    const half = parseFloat(rating) - full;
    let empty = half === 0.5 ? 5 - (full + 1) : 5 - full;
    const fullRating = []
    const halfRating = half === 0.5 ? true : false;
    const emptyRating = [];
    while (full--) {
        fullRating.push(1)
    }
    while (empty--) {
        emptyRating.push(1)
    }
    return (
        <div className='flex text-lg font-semibold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text flex-grow'>
            <section className='flex'>
                {
                    fullRating?.map((rate, i) => <AiFillStar key={i}></AiFillStar>)
                }
            </section>
            <section className='text-base'>
                {
                    halfRating && <BsStarHalf></BsStarHalf>
                }
            </section>
            <section className='flex'>
                {
                    emptyRating?.map((rate, i) => <AiOutlineStar key={i}></AiOutlineStar>)
                }
            </section>
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.string
}

export default Rating;