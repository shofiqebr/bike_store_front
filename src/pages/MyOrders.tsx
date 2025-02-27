/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useGetUserOrdersQuery } from "../redux/api/orderApi";
import { useAppSelector } from "../redux/features/hooks";


const MyOrders = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { data: orders, error, isLoading } = useGetUserOrdersQuery(user?._id);

  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error fetching orders.</p>;

  return (
    <div className="mt-6 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">My Orders</h2>
      {orders?.data?.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.map((order: { _id: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; createdAt: string | number | Date; totalPrice: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; status: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <tr  className="text-center">
                <td className="border border-gray-300 px-4 py-2">{order._id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">${order.totalPrice}</td>
                <td className="border border-gray-300 px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default MyOrders;
