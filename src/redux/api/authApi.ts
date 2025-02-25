/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";



const authApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                body: userInfo,
            })
        }),
        register: builder.mutation({
            query: (userData) => ({
              url: "/auth/register",
              method: "POST",
              body: userData,
            }),
          }),
          getUsers: builder.query<any, void>({
            query: () => ({
                url: "/auth/getAllUsers",  
                method: "GET",
            }),
        }),
        updateUser: builder.mutation({
            query: ({ userId, updateData }) => ({
              url: `/auth/update/${userId}`,
              method: "PUT",
              body: updateData,
            }),
          }),
    })
})

export const {useLoginMutation, useRegisterMutation , useGetUsersQuery, useUpdateUserMutation  } = authApi