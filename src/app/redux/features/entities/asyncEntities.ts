import {createAsyncThunk} from "@reduxjs/toolkit/react";
import {EntityRequest, EntityResponse} from "@/entities/entity";

export const ENTITIES_API_URL = 'http://localhost:8000/api/v1/entities';

export const fetchEntities = createAsyncThunk<EntityResponse[], void>('entities/fetchEntities', async () => {
    const response = await fetch(`${ENTITIES_API_URL}/entities/`);
    return await response.json();
});

export const updateEntityAsync = createAsyncThunk<EntityResponse, EntityResponse>('entities/updateEntityAsync', async (entity: EntityResponse): Promise<EntityResponse> => {
    const response = await fetch(`${ENTITIES_API_URL}/entities/${entity.id}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entity)
    });

    return await response.json();
});

export const deleteEntityAsync = createAsyncThunk<number, number>('entities/deleteEntityAsync', async (entity: number) => {
    const response = await fetch(`${ENTITIES_API_URL}/entities/${entity}/`, {
        method: 'DELETE',
    });

    return await response.json();
});

export const createEntityAsync = createAsyncThunk<EntityResponse, EntityRequest>('entities/createEntityAsync', async (entity: EntityRequest) => {
    const response = await fetch(`${ENTITIES_API_URL}/entities/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entity)
    });

    return await response.json();
});