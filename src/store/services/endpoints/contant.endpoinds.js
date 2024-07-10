import { GetApp } from "@mui/icons-material";
import ApiService from "../api.services";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (arg) => ({
        url: "contact",
        method: "POST",
        body: arg,
      }),
      invalidatesTags:["contact"]
    }),

    getContact: builder.query({
      query: () => "contact",
      providesTags: ["contact"]
    }),

    deleteContact: builder.mutation({
      query: (arg) => ({
        url:  `contact/${arg}`,
        method: "DELETE"
      }),
      invalidatesTags: ["contact"]
    })
  }),
});

export const { useCreateContactMutation, useGetContactQuery, useDeleteContactMutation } = contactEndpoint;


// providesTags => query => Get
// invalidatesTags => mutation => POST,PUT,PATCH,DELETE
