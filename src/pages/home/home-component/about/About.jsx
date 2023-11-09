import about_bg from '../../../../assets/home-banner/home-b-1.jpg'

const About = () => {
    return (
        <section>
            <h1 className="mx-4 md:mx-12 lg:mx-24 my-12 md:my-24 border-b-4 border-cyan-500 text-5xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 p-4 w-fit">About</h1>
            <div style={{
                backgroundImage: `url(${about_bg}), linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))`,
                backgroundBlendMode: 'overlay',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}
                className="h-[60vh] flex justify-center items-center pt-16">

                <p className='mx-4 md:mx-12 lg:mx-24 text-white text-lg font-semibold'>
                    Welcome to PapyrusPortal, where the love for literature meets the digital age. Immerse yourself in a vast collection of novels, thrillers, historical epics, dramatic sagas, and mind-bending sci-fi adventures. Our platform is more than just a library; it is a gateway to diverse worlds crafted by the finest authors. Whether you crave the suspense of a gripping thriller or the intellectual stimulation of historical narratives, PapyrusPortal invites you on a journey through the pages of countless stories. Discover, explore, and indulge your literary senses in an online sanctuary dedicated to the magic of words. Join our community of book enthusiasts and let PapyrusPortal be your virtual haven for literary exploration and discovery.
                </p>
            </div>
        </section>
    );
};

export default About;