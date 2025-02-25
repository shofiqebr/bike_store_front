import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
    //   providesTags: ["Orders"],
    }),
  }),
});

export const { useGetUserOrdersQuery } = orderApi;
