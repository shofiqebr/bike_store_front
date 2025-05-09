import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Mountain Bikes",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/mountain_bike.jpg",
    slug: "mountain-bikes",
  },
  {
    id: 2,
    name: "Road Bikes",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/road_bike.jpg",
    slug: "road-bikes",
  },
  {
    id: 3,
    name: "Electric Bikes",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/electric_bike.jpg",
    slug: "electric-bikes",
  },
  {
    id: 4,
    name: "Kids Bikes",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/kids_bike.jpg",
    slug: "kids-bikes",
  },
  {
    id: 5,
    name: "Hybrid Bikes",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/hybrid_bike.jpg",
    slug: "hybrid-bikes",
  },
  {
    id: 6,
    name: "Folding Bikes",
    image: "https://res.cloudinary.com/demo/image/upload/v1715000001/folding_bike.jpg",
    slug: "folding-bikes",
  },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-20 pt-28">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Browse Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            to={`/category/${category.slug}`}
            key={category.id}
            className="border border-primary rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-primary">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
