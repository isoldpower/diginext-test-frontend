import {configureStore} from "@reduxjs/toolkit/react";
import globalApi from "../api/globalApi";
import entitiesReducer from "../features/entities/entitiesSlice";

export const store = configureStore({
    reducer: {
        [globalApi.reducerPath]: globalApi.reducer,
        entities: entitiesReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(globalApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;