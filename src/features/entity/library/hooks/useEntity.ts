import {EntityData, EntityLabel} from "@/entities/entity";
import {useEffect, useState} from "react";
import {Coordinates} from "@/shared/utilities";
import {updateEntityAsync, useAppDispatch} from "@/app/redux";

export type EntityPayload = {
    addLabel: (label: EntityLabel) => void,
    removeLabel: (label: EntityLabel) => void,
    setName: (name: string) => void,
    setCoordinates: (coordinates: Coordinates) => void,
    currentData: EntityData
}

export const useEntity = (data: EntityData): EntityPayload => {
    const [labels, setLabels] = useState<EntityLabel[]>(data?.labels);
    const [coordinates, setCoordinates] = useState(data?.coordinates);
    const [name, setName] = useState(data?.name);

    const dispatch = useAppDispatch();

    const currentData = {
        id: data?.id, labels, coordinates, name
    }

    const addLabel = (label: EntityLabel) => {
        setLabels(current => [
            ...current, label
        ]);
    }

    const removeLabel = (label: EntityLabel) => {
        setLabels(current => current
            .filter(item => item.id !== label.id)
        );
    }

    useEffect(() => {
        dispatch(updateEntityAsync({...currentData,
            x: currentData.coordinates.x,
            y: currentData.coordinates.y
        }));
    }, [labels, coordinates, name]);

    return {addLabel, removeLabel, setName, setCoordinates, currentData}
}