import {Coordinates} from "@/shared/utilities";
import {EntityLabel} from "@/entities/label";

export type EntityData = {
    id: number;
    name: string;
    coordinates: Coordinates;
    labels?: EntityLabel[];
}

export type EntityRequest = {
    labels: EntityLabel[];
    x: number;
    y: number;
    name: string;
}

export type EntityResponse = {
    id: number;
    labels?: EntityLabel[];
    x: number;
    y: number;
    name: string;
}