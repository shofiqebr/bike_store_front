import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";




export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:5000/api',
        baseUrl: 'https://bike-store-blush.vercel.app/api',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token; // Get token from Redux store
            if (token) {
              headers.set("Authorization", `${token}`);
            }
            return headers;
          },
        }),
    
    endpoints: () => ({}),
})
