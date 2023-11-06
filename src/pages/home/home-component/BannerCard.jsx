

const BannerCard = ({ img }) => {
    return (
        <div style={{
            backgroundImage: `url(${img}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover'
        }}
            className="h-[80vh] flex justify-center items-center pt-16">
            <h1 className="md:w-2/3 text-2xl ml-8 md:mx-0 md:text-5xl lg:text-7xl font-extrabold text-transparent font-indie-flower bg-gradient-to-br from-orange-300 to-red-700 bg-clip-text">demo text</h1>
        </div>
    );
};

export default BannerCard;