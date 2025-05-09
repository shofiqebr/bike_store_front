import Banner from "../components/Banner";
import CTA from "../components/CTA";
import CustomerTestimonial from "../components/CustomerTestimonial ";
import FAQ from "../components/FAQ";
import FeaturedProducts from "../components/FeaturedProducts";
import HowItWorks from "../components/HowItWorks";
import Newsletter from "../components/Newsletter";



const Home = () => {
    return (
        <div className="pt-20 max-w-screen-2xl mx-auto">
            <Banner/>
            <FeaturedProducts/>
            <HowItWorks/>
            <CustomerTestimonial/>
            <CTA/>
            <FAQ/>
            <Newsletter/>
        </div>
    );
};

export default Home;