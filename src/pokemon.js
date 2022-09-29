import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://jsonplaceholder.typicode.com",
  // }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://official-joke-api.appspot.com/jokes/",
  // }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://authentic-portfolio.herokuapp.com/user",
  }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://blockchain.info/",
  // }),

  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `photos/${name}`,
    }),
    getPhotos: builder.query({
      query: () => "photos",
    }),
    getPhotoById: builder.query({
      query: (photoId) => `photos/${photoId}`,
    }),
    getJokeByType: builder.mutation({
      query: (type) => `${type}/random`,
    }),

    getData: builder.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }),
    getDataTicker: builder.mutation({
      query: (payload) => ({
        url: `ticker`,
        method: "POST",
        body: payload,
      }),
    }),

    editData: builder.mutation({
      query: ({ formData }) => ({
        url: `ticker`,
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useGetPhotosQuery,
  useGetPhotoByIdQuery,
  useGetJokeByTypeMutation,
  useGetDataMutation,
  useGetDataTickerMutation,
  useEditDataMutation,
} = pokemonApi;
