import {Coordinates} from "@/shared/utilities";
import {EntityLabelType} from "@/entities/label";

export type EntityData = {
    id: number;
    name: string;
    coordinates: Coordinates;
    labels?: EntityLabelType[];
}

export type EntityRequest = {
    labels: EntityLabelType[];
    x: number;
    y: number;
    name: string;
}

export type EntityResponse = {
    id: number;
    labels?: EntityLabelType[];
    x: number;
    y: number;
    name: string;
}