import furure_img from '../../../../assets/home-banner/home-b-3.jpg'

const FuturePlans = () => {
    return (
        <section>
            <h1 className="mx-4 md:mx-12 lg:mx-24 my-12 md:my-24 border-b-4 border-cyan-500 text-5xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 p-4 w-fit">Fuutre Plans</h1>
            <div style={{
                backgroundImage: `url(${furure_img}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                backgroundBlendMode: 'overlay',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}
                className="h-[60vh] flex justify-center items-center pt-16">

                <p className='mx-4 md:mx-12 lg:mx-24 text-white text-lg font-semibold'>
                    At PapyrusPortal, we envision a future where the joy of reading knows no bounds. Our roadmap is fueled by the passion for creating an even richer literary experience for our users. In the coming months, expect curated book clubs, author interviews, and exclusive content to enhance your journey through the written word. We are committed to expanding our library across genres, collaborating with emerging authors, and incorporating cutting-edge features to make your reading adventure seamless and delightful. Stay tuned for personalized recommendations, community forums, and interactive storytelling experiences. PapyrusPortal is not just a platform; it is a growing literary ecosystem designed to evolve with your reading preferences. Join us as we embark on this exciting chapter, where the future of literature unfolds in the digital realm.
                </p>
            </div>
        </section>
    );
};

export default FuturePlans;