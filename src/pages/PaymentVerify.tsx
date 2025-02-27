import {  useNavigate, useSearchParams} from "react-router-dom";
import { useVerifyPaymentQuery } from "../redux/api/orderApi";
import { useEffect } from "react";
// import { useEffect, useState } from "react";


const PaymentVerify = () => {
    // const [orderId, setOrderId] = useState<string | null>(null);
//   const { orderId} = useParams<{ orderId: string }>(); // Get order ID from URL
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");
  useEffect(() => {
    // const storedOrderId = localStorage.getItem("orderId");
    if (orderId) {
        // console.error("No order_id found in URL!");
        // navigate("/order-failed"); // Redirect if no order ID
        
        console.log("payment page", orderId)
      }
    
  }, [orderId, navigate]);

  // ✅ Fetch payment status using RTK Query
 // ✅ Only call the API if orderId exists
const { data } = useVerifyPaymentQuery(orderId!, {
  skip: !orderId, // Skip API call if orderId is null
});


//   if (isLoading) {
//     return <p className="text-center text-blue-500">Verifying Payment...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">Failed to verify payment.</p>;
//   }
// console.log(data)

  return (
    <div className="max-w-lg mx-auto  p-6 shadow-lg rounded-lg bg-white mt-24 mb-4 min-h-[600px]">
      <h1 className="text-2xl font-bold mb-4 text-center">Payment Status</h1>

      <div className="border p-4 rounded-md ">
        <p><strong>Order ID:</strong> {orderId}</p>
        <p><strong>Transaction Status:</strong> {data?.data[0]?.transaction_status || "Pending"}</p>
        <p><strong>Amount:</strong> {data?.data[0]?.amount} BDT</p>
        {/* <p><strong>Payment Method:</strong> {data?.method}</p> */}
        <p><strong>Bank Status:</strong> {data?.data[0]?.bank_status}</p>
        <p><strong>Message:</strong> {data?.data[0]?.sp_message}</p>
      </div>

    <div className="flex justify-between">

      <button 
        onClick={() => navigate("/")} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Home
      </button>
      <button 
        onClick={() => navigate("/dashboardCustomer")} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Dashboard
      </button>
    </div>
    </div>
  );
};

export default PaymentVerify;
