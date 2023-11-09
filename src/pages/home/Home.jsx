import Category from "./category/Category";
import HomeBanner from "./home-component/HomeBanner";
import About from "./home-component/about/About";
import FuturePlans from "./home-component/future-plans/FuturePlans";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <About></About>
            <Category></Category>
            <FuturePlans></FuturePlans>
        </div>
    );
};

export default Home;