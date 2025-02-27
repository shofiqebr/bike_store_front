// pages/ProductDetails.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/productApi";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Fetch the product data using RTK Query
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

//   console.log(product)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details.</p>;

  const handleBuyNow = () => {
    navigate(`/checkout/${product?.result._id}`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto mt-36">
      {product && (
        <>
          <img
            src={product?.result?.image}
            alt={product?.result?.name}
            className="w-full h-80 object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{product?.result?.name}</h1>
          <h1 className="text-xl font-bold mt-4">{product?.result?.brand}</h1>
          <h1 className="text-xl font-bold mt-4">{product?.result?.category}</h1>
          <h1 className="text-xl  mt-4">{product?.result?.stock}</h1>
          <p className="text-gray-700 my-2">{product?.result?.description}</p>
          <p className="text-lg font-semibold">${product?.result?.price}</p>
          <button
            onClick={handleBuyNow}
            className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4"
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
