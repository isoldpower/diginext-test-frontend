import {EntityData} from "@/entities/entity";

export interface EntitiesState {
    entities: EntityData[];
    status: 'fetching' | 'ready' | 'error' | null;
    error: string | null;
}
