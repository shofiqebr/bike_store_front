import { Link } from "react-router-dom";

const offers = [
  {
    id: 1,
    title: "20% Off Mountain Bikes",
    description: "Conquer any terrain with our high-quality mountain bikes. Limited-time offer!",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/offer_mountain_bike.jpg",
    link: "/category/mountain-bikes",
    badge: "Hot Deal",
  },
  {
    id: 2,
    title: "Free Helmet with Road Bikes",
    description: "Stay safe and stylish. Get a free helmet with every road bike purchase.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/offer_road_bike.jpg",
    link: "/category/road-bikes",
    badge: "Bonus Offer",
  },
  {
    id: 3,
    title: "Up to 30% Off Electric Bikes",
    description: "Ride farther and faster with our best-selling electric bikes.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/offer_electric_bike.jpg",
    link: "/category/electric-bikes",
    badge: "Limited Time",
  },
  {
    id: 4,
    title: "Buy 1 Get 1 on Kids Bikes",
    description: "Double the fun! Buy one kids bike and get another absolutely free.",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/offer_kids_bike.jpg",
    link: "/category/kids-bikes",
    badge: "BOGO",
  },
];

const Offers = () => {
  return (
    <section className="bg-neutral py-16 pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Special Offers</h2>
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white border border-primary rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-sm text-white bg-secondary px-3 py-1 rounded-full inline-block mb-2">
                  {offer.badge}
                </span>
                <h3 className="text-xl font-semibold text-primary mb-2">{offer.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{offer.description}</p>
                <Link
                  to={offer.link}
                  className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
