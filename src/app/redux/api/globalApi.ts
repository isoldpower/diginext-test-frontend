import {fetchBaseQuery} from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react";
import {EntityResponse} from "@/entities/entity";
import {apiRoute} from "@/app/config/api/apiRoutes";

export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({baseUrl: apiRoute}),
    endpoints: (builder) => ({
        fetchEntity: builder.query<EntityResponse, number>({
            query: (id) => `entities/entities/${id}/`
        })
    })
})

export default globalApi;
export const {useFetchEntityQuery} = globalApi
