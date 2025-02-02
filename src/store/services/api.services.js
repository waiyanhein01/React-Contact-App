import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ApiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact.sankyitar.store/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${JSON.parse(token)}`);
      }
      return headers;
    },
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({}),
});

export default ApiService;
