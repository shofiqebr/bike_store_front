import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
    }),

    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
    }),

    verifyPayment: builder.query({
      query: (orderId) => ({
        url: `/verify?order_id=${orderId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { 
  useGetUserOrdersQuery, 
  usePlaceOrderMutation, 
  useVerifyPaymentQuery 
} = orderApi;
