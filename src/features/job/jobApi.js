import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),
    apply: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "PATCH",
        body: data,
      }),
    }),
    question: builder.mutation({
      query: (data) => ({
        url: "/query",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Query"]
    }),
    reply: builder.mutation({
      query: (data) => ({
        url: "/reply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Query"]
    }),
    getJob: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["Jobs"],
    }),
    getAppliedJob: builder.query({
      query: (email) => ({
        url: `/applied-jobs/${email}`,
      }),
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
      providesTags: ["Query"]
    }),
  }),
});

export const {
  usePostJobMutation,
  useGetJobByIdQuery,
  useGetJobQuery,
  useApplyMutation,
  useGetAppliedJobQuery,
  useQuestionMutation,
  useReplyMutation
} = jobApi;
