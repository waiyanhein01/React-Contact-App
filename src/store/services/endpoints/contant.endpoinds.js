import ApiService from "../api.services";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (arg) => ({
        url: "contact",
        method: "POST",
        body: arg,
      }),
    }),

    getContact: builder.query({
      query: () => "contact",
    }),
  }),
});

export const { useCreateContactMutation, useGetContactQuery } = contactEndpoint;
