import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {EntitiesState} from "@/app/redux";
import {fetchEntities} from "@/app/redux/features/entities/asyncEntities";

export const addFetchEntitiesExtraReducers = (builder: ActionReducerMapBuilder<EntitiesState>) => {
    return builder
        .addCase(fetchEntities.pending, (state, action) => {
            state.status = 'fetching';
            state.error = null;
        })
        .addCase(fetchEntities.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        })
        .addCase(fetchEntities.fulfilled, (state, action) => {
            state.status = 'ready';
            console.log(action.payload);
            state.entities = action.payload.map(entity => ({
                ...entity,
                coordinates: {
                    x: entity.x,
                    y: entity.y
                }
            }));
        })
}