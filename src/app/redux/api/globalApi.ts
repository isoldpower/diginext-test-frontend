import {fetchBaseQuery} from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react";
import {EntityResponse} from "@/entities/entity";

const baseUrl = 'http://localhost:8000/api/v1/';

export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        fetchEntity: builder.query<EntityResponse, number>({
            query: (id) => `entities/entities/${id}/`
        })
    })
})

export default globalApi;
export const {useFetchEntityQuery} = globalApi
