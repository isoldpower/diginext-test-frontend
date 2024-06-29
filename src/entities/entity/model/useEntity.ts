import {EntityData, EntityLabelData} from "./types";
import {useState} from "react";
import {Coordinates} from "@/shared/utilities";

export type EntityPayload = {
    addLabel: (title: string) => void,
    removeLabel: (label: EntityLabelData) => void,
    setName: (name: string) => void,
    setCoordinates: (coordinates: Coordinates) => void,
    currentData: EntityData
}

export const useEntity = (data: EntityData) => {
    const [labels, setLabels] = useState<EntityLabelData[]>(data?.labels);
    const [coordinates, setCoordinates] = useState(data?.coordinates);
    const [name, setName] = useState(data?.name);

    const currentData = {
        id: data?.id, labels, coordinates, name
    }

    const addLabel = (title: string) => {
        setLabels(current => [
            ...current,
            {id: labels[labels.length - 1].id + 1, title}
        ]);
    }

    const removeLabel = (label: EntityLabelData) => {
        setLabels(current => {
            return current.filter(item => item.id !== label.id)
        });
    }

    return {addLabel, removeLabel, setName, setCoordinates, currentData}
}