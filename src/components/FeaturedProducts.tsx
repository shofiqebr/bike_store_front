import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/api/productApi";

interface StarRatingProps {
  initialRating?: number;
  maxStars?: number;
  onChange?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  maxStars = 5,
  onChange,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handleClick = (rating: number) => {
    setCurrentRating(rating);
    if (onChange) onChange(rating);
  };

  const handleMouseEnter = (rating: number) => {
    setHovered(rating);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const renderStar = (index: number) => {
    const isFilled = (hovered ?? currentRating) >= index + 1;
    return (
      <svg
        key={index}
        onClick={() => handleClick(index + 1)}
        onMouseEnter={() => handleMouseEnter(index + 1)}
        onMouseLeave={handleMouseLeave}
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 cursor-pointer transition-colors ${
          isFilled ? "text-yellow-500" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.431L24 9.753l-6 5.848L19.335 24 12 20.201 4.665 24 6 15.601 0 9.753l8.332-1.735z" />
      </svg>
    );
  };

  return (
    <div className="flex space-x-1">
      {[...Array(maxStars)].map((_, i) => renderStar(i))}
    </div>
  );
};

// Blog Interface
interface Blog {
  id: number;
  title: string;
  excerpt: string;
  fullDescription: string;
  image: string;
}

// Sample Blogs
const blogs: Blog[] = [
  {
    id: 1,
    title: "5 Tips for Choosing the Right Bike",
    excerpt: "Learn how to pick the best bike for your needs.",
    fullDescription:
      "Choosing the right bike depends on your riding style, terrain, and budget. Consider factors such as frame material, wheel size, and brake type. A mountain bike is great for off-road trails, while a road bike is perfect for long-distance rides on pavement.",
    image:
      "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178574/195e0ddc-b9ab-4138-80f5-457cc05c5f6f-removebg-preview_yexua4.png",
  },
  {
    id: 2,
    title: "Why Electric Bikes Are the Future",
    excerpt: "Discover the benefits of electric bikes.",
    fullDescription:
      "Electric bikes offer an eco-friendly, cost-effective, and fun way to commute. With improved battery life and motor efficiency, e-bikes are becoming a practical alternative to traditional transportation.",
    image:
      "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178624/e00ecf9b-794a-4983-a1d7-5909c0cac0cf-removebg-preview_znabxj.png",
  },
  {
    id: 3,
    title: "5 Tips for Choosing the Right Bike",
    excerpt: "Learn how to pick the best bike for your needs.",
    fullDescription:
      "Choosing the right bike depends on your riding style, terrain, and budget. Consider factors such as frame material, wheel size, and brake type. A mountain bike is great for off-road trails, while a road bike is perfect for long-distance rides on pavement.",
    image:
      "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178574/195e0ddc-b9ab-4138-80f5-457cc05c5f6f-removebg-preview_yexua4.png",
  },
  {
    id: 4,
    title: "Why Electric Bikes Are the Future",
    excerpt: "Discover the benefits of electric bikes.",
    fullDescription:
      "Electric bikes offer an eco-friendly, cost-effective, and fun way to commute. With improved battery life and motor efficiency, e-bikes are becoming a practical alternative to traditional transportation.",
    image:
      "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178624/e00ecf9b-794a-4983-a1d7-5909c0cac0cf-removebg-preview_znabxj.png",
  },
];

const FeaturedProducts = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  const [, setWishlist] = useState<number[]>([]);

  const handleAddToWishlist = (productId: number) => {
    setWishlist((prev) => [...prev, productId]);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Products */}
        <h2 className="text-3xl font-bold text-primary text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {products?.result?.length > 0 ? (
    products.result
      .slice(-8)
      .reverse()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((product: any) => (
        <div
          key={product.id}
          className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl p-5 transition-all duration-300"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-contain rounded-lg"
          />

          <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-1">
            {product.brand} • {product.category}
          </p>

          {/* Rating */}
          <div className="my-2">
            <StarRating
              initialRating={product.rating || 3.5}
              onChange={(newRating) =>
                console.log("New rating:", newRating)
              }
            />
          </div>

          <p className="text-gray-700 mt-2 text-sm line-clamp-2">
            {product.description}
          </p>

          <p className="font-bold text-primary text-xl mt-3">
            ${product.price}
          </p>

          <div className="flex items-center justify-between mt-5 space-x-2">
            <Link to={`/product/${product._id}`} className="flex-1">
              <button className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary/90 transition shadow-sm">
                View Details
              </button>
            </Link>

            <button
              onClick={() => handleAddToWishlist(product.id)}
              className="flex-1 bg-gray-100 text-primary py-2 px-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition shadow-sm"
            >
              Wishlist
            </button>
          </div>
        </div>
      ))
  ) : (
    <p className="text-center text-gray-500 col-span-full">
      No products found.
    </p>
  )}
</div>


        {/* View All Button */}
        <div className="flex justify-center mt-10">
  <Link
    to="/allProducts"
    className="inline-block px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
  >
    View All Products
  </Link>
</div>


        {/* Blog Section */}
        <h2 className="text-3xl font-bold text-center text-primary mt-20 mb-10">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.slice(0, 4).map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md text-center rounded-xl p-5 transition duration-300 hover:shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-44 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{blog.excerpt}</p>

              <Link
                to={`/blog/${blog.id}`}
                className="inline-block mt-3 text-blue-600 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="flex justify-center mt-8">
  <Link
    to="/blog"
    className="inline-block px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
  >
    View All Blogs
  </Link>
</div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
