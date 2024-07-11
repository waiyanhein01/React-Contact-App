import ApiService from "../api.services";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (arg) => ({
        url: "contact",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["contact"],
    }),

    getContact: builder.query({
      query: () => "contact",
      providesTags: ["contact"],
    }),

    deleteContact: builder.mutation({
      query: (arg) => ({
        url: `contact/${arg}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),

    updateContact: builder.mutation({
      query: (arg) => ({
        url: `contact/${arg.id}`,
        method: "PUT",
        body: arg,
      }),
      invalidatesTags: ["contact"]
    }),

  }),
});

export const {
  useCreateContactMutation,
  useGetContactQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactEndpoint;

// providesTags => query => Get
// invalidatesTags => mutation => POST,PUT,PATCH,DELETE
