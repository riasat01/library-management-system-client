import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
    const {name, image_url} = category;
    return (
        <div style={{
            backgroundImage: `url(${image_url}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover'
        }}
            className="h-[50vh] flex flex-col justify-center items-center bg-slate-800 duration-1000 bg-opacity-0 hover:bg-opacity-100 rounded-lg shadow-xl">
            <h1 className="w-fit h-1/3 text-2xl ml-8 md:mx-0 md:text-5xl font-extrabold text-transparent font-indie-flower bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text">{name}</h1>
            <Link to={`/books/${name}`}><button className="px-5 py-2 rounded-lg bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_1px_1rem_0px_cyan]">Go to page</button></Link>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
}

export default CategoryCard;