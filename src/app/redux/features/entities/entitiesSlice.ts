import {createSlice} from "@reduxjs/toolkit/react";
import {EntitiesState} from "./types";
import {addUpdateEntityExtraReducers} from "./extraReducers/updateEntityExtraReducers";
import {addCreateEntityExtraReducers} from "./extraReducers/createEntityExtraReducers";
import {addFetchEntitiesExtraReducers} from "./extraReducers/fetchEntitiesExtraReducers";
import {addDeleteEntityExtraReducers} from "./extraReducers/deleteEntityExtraReducers";

const initialState: EntitiesState = {
    entities: [],
    status: null,
    error: null
}

const entitiesSlice = createSlice({
    name: 'entities',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) =>
        addUpdateEntityExtraReducers(
            addDeleteEntityExtraReducers(
                addFetchEntitiesExtraReducers(
                    addCreateEntityExtraReducers(builder)
                )
            )
        ),
    selectors: {
        selectEntities: (state: EntitiesState) => state.entities,
        selectStatus: (state: EntitiesState) => state.status
    }
});


export default entitiesSlice.reducer;
export const {selectEntities, selectStatus} = entitiesSlice.selectors;