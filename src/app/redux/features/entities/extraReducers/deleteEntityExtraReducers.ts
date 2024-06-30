import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {EntitiesState, fetchEntities} from "@/app/redux";
import {deleteEntityAsync} from "@/app/redux/features/entities/asyncEntities";

export const addDeleteEntityExtraReducers = (builder: ActionReducerMapBuilder<EntitiesState>) => {
    return builder
        .addCase(deleteEntityAsync.pending, (state, action) => {
            state.status = 'fetching';
            state.error = null;
        })
        .addCase(deleteEntityAsync.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        })
        .addCase(deleteEntityAsync.fulfilled, (state, action) => {
            state.status = 'ready';
            state.entities = state.entities.filter(entity => entity.id !== action.payload);
        });
}