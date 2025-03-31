import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import personal from '../data/personal';

export const personalApi = createApi({
  reducerPath: 'personalApi',
  endpoints: (builder) => ({
    getPersonal: builder.query({
      async queryFn() {
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          return { data: personal };
        } catch (error) {
          return { error };
        }
      }
    })
  })
});

export const { useGetPersonalQuery } = personalApi;
