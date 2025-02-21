import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";



const Home = () => {
    return (
        <div className="pt-20 max-w-screen-2xl mx-auto">
            <Banner/>
            <FeaturedProducts/>
        </div>
    );
};

export default Home;