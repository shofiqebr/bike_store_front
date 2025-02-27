/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/api/productApi";


// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
// }

// const products: Product[] = [
//   { id: 1, name: "Mountain Bike", price: "$599", image: "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178636/7bcfff7a-f659-4c2e-b82a-64fb81951f15-removebg-preview_qhvxoh.png" },
//   { id: 2, name: "Road Bike", price: "$799", image: "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178624/e00ecf9b-794a-4983-a1d7-5909c0cac0cf-removebg-preview_znabxj.png" },
//   { id: 3, name: "Hybrid Bike", price: "$499", image: "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178574/195e0ddc-b9ab-4138-80f5-457cc05c5f6f-removebg-preview_yexua4.png" },
//   { id: 4, name: "Electric Bike", price: "$999", image: "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178636/7bcfff7a-f659-4c2e-b82a-64fb81951f15-removebg-preview_qhvxoh.png" },
//   { id: 5, name: "BMX Bike", price: "$399", image: "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178624/e00ecf9b-794a-4983-a1d7-5909c0cac0cf-removebg-preview_znabxj.png" },
//   { id: 6, name: "Folding Bike", price: "$699", image: "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178574/195e0ddc-b9ab-4138-80f5-457cc05c5f6f-removebg-preview_yexua4.png" },
// ];


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
        "Choosing the right bike depends on your riding style, terrain, and budget. Consider factors such as frame material, wheel size, and brake type. A mountain bike is great for off-road trails, while a road bike is perfect for long-distance rides on pavement. Test ride different models before making a final decision.",
      image: "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178574/195e0ddc-b9ab-4138-80f5-457cc05c5f6f-removebg-preview_yexua4.png",
    },
    {
      id: 2,
      title: "Why Electric Bikes Are the Future",
      excerpt: "Discover the benefits of electric bikes.",
      fullDescription:
        "Electric bikes offer an eco-friendly, cost-effective, and fun way to commute. They help reduce carbon emissions and make cycling more accessible for people of all ages. With improved battery life and motor efficiency, e-bikes are becoming a practical alternative to traditional transportation.",
      image: "https://res.cloudinary.com/dal1rjdwl/image/upload/v1740178624/e00ecf9b-794a-4983-a1d7-5909c0cac0cf-removebg-preview_znabxj.png",
    },
  ];


const FeaturedProducts = () => {

    const [expandedBlog, setExpandedBlog] = useState<number | null>(null);

    const toggleBlog = (id: number) => {
      setExpandedBlog(expandedBlog === id ? null : id);
    };

    
const { data: products} = useGetAllProductsQuery(undefined);

// console.log(products)

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.result?.length > 0 ? (
          products?.result?.slice(-6).reverse().map((product: { id: Key | null | undefined; image: string | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; brand: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; category: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; _id: any; }) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image} className="w-full h-40 rounded-md" />
              <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">
                {product.brand} - {product.category}
              </p>
              <p className="font-bold">${product.price}</p>
              <Link to={`/product/${product._id}`}>
              <button className="bg-primary text-white px-4 py-2 rounded-md mt-2">
                View Details
              </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found.</p>
        )}
      </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/allProducts"
            className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            View All
          </Link>
        </div>
      </div>

        {/* Extra Section - Blogs (Toggleable) */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-16 mb-8">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
              onClick={() => toggleBlog(blog.id)}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-4">{blog.title}</h3>
              <p className="text-gray-600">{blog.excerpt}</p>

              {/* Toggleable Full Description */}
              {expandedBlog === blog.id && (
                <p className="text-gray-700 mt-2">{blog.fullDescription}</p>
              )}

              <button
                className="mt-4 text-blue-600 font-semibold"
                onClick={() => toggleBlog(blog.id)}
              >
                {expandedBlog === blog.id ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
    </section>
  );
};

export default FeaturedProducts;
