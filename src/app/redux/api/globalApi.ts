import {fetchBaseQuery} from "@reduxjs/toolkit/query"
import {createApi} from "@reduxjs/toolkit/query/react";
import {EntityLabel, EntityLabelData} from "@/entities/entity";

const baseUrl = 'http://localhost:8000/api/v1/';

export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        createLabel: builder.mutation<EntityLabel, EntityLabelData>({
            query: (data) => ({
                url: `entities/labels/`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        })
    })
})

export default globalApi;
export const {useCreateLabelMutation} = globalApi
