import { useEffect } from "react";
// import { useGetAllProductsQuery } from "../redux/api/productApi";
 // Assuming you've already set this up

const ViewAllProducts = () => {
  // const { data: products, isLoading, isError, error } = useGetAllProductsQuery();

  useEffect(() => {
    // You can put any side effect here if needed
    // e.g., logging, analytics, etc.
  }, []);

  // if (isLoading) return <p>Loading products...</p>;
  // if (isError) return <p>Error loading products: {error?.message}</p>;
  // console.log(products)

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* {products?.map((product) => ( */}
          {/* <div key={product._id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">Brand: {product.brand}</p>
            <p className="text-lg font-bold text-gray-900">${product.price}</p>
            <p className="text-sm text-gray-600">Category: {product.category}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </button>
          </div> */}
        {/* ))} */}
      </div>
    </div>
  );
};

export default ViewAllProducts;
