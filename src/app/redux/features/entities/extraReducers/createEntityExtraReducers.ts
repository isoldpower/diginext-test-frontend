import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {EntitiesState} from "@/app/redux";
import {createEntityAsync} from "@/app/redux/features/entities/asyncEntities";

export const addCreateEntityExtraReducers = (builder: ActionReducerMapBuilder<EntitiesState>) => {
    return builder
        .addCase(createEntityAsync.pending, (state, action) => {
            state.status = 'fetching';
            state.error = null;
        })
        .addCase(createEntityAsync.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        })
        .addCase(createEntityAsync.fulfilled, (state, action) => {
            state.status = 'ready';
            state.entities = [
                ...state.entities, {
                    ...action.payload,
                    coordinates: {
                        x: action.payload.x,
                        y: action.payload.y
                    }
                }
            ]
        });
}