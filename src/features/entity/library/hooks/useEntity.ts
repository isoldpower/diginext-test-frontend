import {EntityData, EntityResponse} from "@/entities/entity";
import {useEffect, useMemo, useState} from "react";
import {Coordinates} from "@/shared/utilities";
import {selectStatus, updateEntityAsync, useAppDispatch, useTypedSelector} from "@/app/redux";
import {EntityLabelType} from "@/entities/label";
import {appRoutes} from "@/app/config/api/apiRoutes";

export type EntityPayload = {
    addLabel: (label: EntityLabelType) => void,
    removeLabel: (label: EntityLabelType) => void,
    updateName: (name: string) => void,
    updateCoordinates: (coordinates: Coordinates) => void,
    currentData: EntityData
}

export const useEntity = (data: EntityResponse): EntityPayload => {
    const [labels, setLabels] = useState<EntityLabelType[]>(data?.labels);
    const [coordinates, setCoordinates] = useState({x: data?.x, y: data?.y});
    const [name, setName] = useState(data?.name);

    const dispatch = useAppDispatch();
    const status = useTypedSelector(selectStatus);

    const currentData = useMemo(() => {
        return {id: data?.id, labels, coordinates, name}
    }, [data, labels, coordinates, name]);

    const addLabel = (label: EntityLabelType) => {
        dispatch(updateEntityAsync({
            ...currentData,
            labels: [...labels, label],
            x: coordinates.x,
            y: coordinates.y
        }));
    };

    const removeLabel = (label: EntityLabelType) => {
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
            fetch(`${appRoutes.entities}/entities/${currentData.id}/`)
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