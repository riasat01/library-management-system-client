import PropTypes from 'prop-types';

const BannerCard = ({ banner }) => {
    const { name, image_url } = banner;
    return (
        <div style={{
            backgroundImage: `url(${image_url}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover'
        }}
            className="h-[80vh] flex justify-center items-center pt-16">
            <h1 className="md:w-2/3 text-2xl ml-8 md:mx-0 md:text-5xl lg:text-7xl font-extrabold text-transparent font-indie-flower bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text border-l-8 border-cyan-500">{name}</h1>
        </div>
    );
};

BannerCard.propTypes = {
    banner: PropTypes.object
}

export default BannerCard;