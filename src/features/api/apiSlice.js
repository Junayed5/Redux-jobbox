import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl : process.env.REACT_APP_SERVER_URL
  }),
  tagTypes : ["Jobs", "Query"],
  endpoints: (builder) => ({}),
});

export default apiSlice;
