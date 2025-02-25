import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (formData) => ({
        url: "/products",
        method: "POST",
        body: formData,
      }),
    }),
    getAllProducts: builder.query({
        query: () => ({
          url: `/products`,
          method: "GET",
        }),
      //   providesTags: ["Orders"],
      }),
  }),
  
});

export const { useCreateProductMutation, useGetAllProductsQuery } = productApi;
