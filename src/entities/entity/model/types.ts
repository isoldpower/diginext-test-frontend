import {Coordinates} from "@/shared/utilities";

export type EntityLabelData = {
    id: number;
    title: string;
}

export type EntityData = {
    id: number;
    name: string;
    coordinates: Coordinates;
    labels?: EntityLabelData[];
}