import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {EntitiesState} from "@/app/redux";
import {updateEntityAsync} from "@/app/redux/features/entities/asyncEntities";

export const addUpdateEntityExtraReducers = (builder: ActionReducerMapBuilder<EntitiesState>) => {
    return builder
        .addCase(updateEntityAsync.pending, (state, action) => {
            state.status = 'fetching';
            state.error = null;
        })
        .addCase(updateEntityAsync.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        })
        .addCase(updateEntityAsync.fulfilled, (state, action) => {
            state.status = 'ready';
            state.entities.map(entity => {
                return entity.id === action.payload.id
                    ? action.payload
                    : entity;
            });
        });
}