/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/api/productApi";
import { usePlaceOrderMutation } from "../redux/api/orderApi";
import { useAppSelector } from "../redux/features/hooks";
import { useGetUsersQuery } from "../redux/api/authApi";

const Checkout = () => {
  const { id } = useParams<{ id: string }>();
  // const navigate = useNavigate();
  const { data: product, isLoading } = useGetProductByIdQuery(id);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("SurjoPay");
  const [placeOrder] = usePlaceOrderMutation();

  const userInLocal = useAppSelector((state) => state.auth.user);
  const { data } = useGetUsersQuery();
  const user = data?.data?.find((item: { email: string | undefined; }) => item.email === userInLocal?.email);

  if (isLoading) {
    return <p className="text-center text-lg font-semibold mt-10">Loading...</p>;
  }

  const handleOrder = async () => {
    if (!product) return;

    if (quantity > product.result.stock) {
      alert("Not enough stock available!");
      return;
    }

    try {
      const response = await placeOrder({
        user: user?._id,
        products: [
          {
            product: id,
            quantity,
          },
        ],
      }).unwrap();
      console.log(response)
      const orderId = response?.data?.order._id
      const paymentUrl = response?.data?.payment?.checkout_url;
      console.log('orderId',orderId)

    if (orderId && paymentUrl) {
      localStorage.setItem("orderId", orderId);
      window.location.href = paymentUrl
    }
    } catch (error) {
      alert("Order failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h1>

        {product && (
          <>
            <div className="flex items-center space-x-4 border-b pb-4 mb-4">
              <img
                src={product.result.image}
                alt={product.result.name}
                className="w-24 h-24 rounded-md object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{product.result.name}</h2>
                <p className="text-gray-600">Stock: {product.result.stock} available</p>
                <p className="text-lg font-bold text-green-600">${product.result.price}</p>
              </div>
            </div>

            <label className="block text-gray-700 font-medium">Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              max={product.result.stock}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded-lg p-2 w-full mt-1 mb-4 focus:ring focus:ring-blue-200"
            />

            <label className="block text-gray-700 font-medium">Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="border rounded-lg p-2 w-full mt-1 mb-4 focus:ring focus:ring-blue-200"
            >
              <option value="SurjoPay">SurjoPay</option>
            </select>

            <p className="text-lg font-semibold text-gray-800">
              Total: <span className="text-green-600">${(product.result.price * quantity).toFixed(2)}</span>
            </p>

            <button
              onClick={handleOrder}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 px-6 rounded-lg w-full mt-6 shadow-md transition-all"
            >
              Order Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
