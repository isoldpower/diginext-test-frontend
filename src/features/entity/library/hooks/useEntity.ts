import {EntityData, EntityLabel, EntityResponse} from "@/entities/entity";
import {useEffect, useMemo, useState} from "react";
import {Coordinates} from "@/shared/utilities";
import {ENTITIES_API_URL, selectStatus, updateEntityAsync, useAppDispatch, useTypedSelector} from "@/app/redux";

export type EntityPayload = {
    addLabel: (label: EntityLabel) => void,
    removeLabel: (label: EntityLabel) => void,
    updateName: (name: string) => void,
    updateCoordinates: (coordinates: Coordinates) => void,
    currentData: EntityData
}

export const useEntity = (data: EntityResponse): EntityPayload => {
    const [labels, setLabels] = useState<EntityLabel[]>(data?.labels);
    const [coordinates, setCoordinates] = useState({x: data?.x, y: data?.y});
    const [name, setName] = useState(data?.name);

    const dispatch = useAppDispatch();
    const status = useTypedSelector(selectStatus);

    const currentData = useMemo(() => {
        return {id: data?.id, labels, coordinates, name}
    }, [data, labels, coordinates, name]);

    const addLabel = (label: EntityLabel) => {
        dispatch(updateEntityAsync({
            ...currentData,
            labels: [...labels, label],
            x: coordinates.x,
            y: coordinates.y
        }));
    };

    const removeLabel = (label: EntityLabel) => {
        const newLabels = labels.filter(item => item.id !== label.id);
        dispatch(updateEntityAsync({
            ...currentData,
            labels: newLabels,
            x: coordinates.x,
            y: coordinates.y
        }));
    };

    const updateName = (name: string) => {
        dispatch(updateEntityAsync({
            ...currentData,
            name: name,
            x: coordinates.x,
            y: coordinates.y
        }));
    };

    const updateCoordinates = (coordinates: Coordinates) => {
        dispatch(updateEntityAsync({
            ...currentData,
            x: coordinates.x,
            y: coordinates.y
        }));
    };

    useEffect(() => {
        if (status === 'ready') {
            fetch(`${ENTITIES_API_URL}/entities/${currentData.id}/`)
                .then<EntityResponse>(response => response.json())
                .then(result => {
                    setLabels(result.labels);
                    setCoordinates({x: result.x, y: result.y});
                    setName(result.name);
                });
        }
    }, [status]);

    return {addLabel, removeLabel, updateName, updateCoordinates, currentData}
}