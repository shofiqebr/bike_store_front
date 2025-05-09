import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-[#f2f7ff] text-primary py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
          Ready to ride your dream bike?
        </h2>
        <Link
          to="/allProducts"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;
