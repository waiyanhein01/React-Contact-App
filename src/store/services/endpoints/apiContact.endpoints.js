import ApiService from "../api.services";

const apiContactEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (arg) => ({
        url: "/login",
        method: "POST",
        body: arg,
      }),
    }),

    signUp: builder.mutation({
      query: (arg) => ({
        url: "register",
        method: "POST",
        body: arg,
      }),
    }),

    profile: builder.query({
      query: () => "user-profile"
    })
  }),
});

export const { useSignInMutation, useSignUpMutation, useProfileQuery } = apiContactEndpoints;
