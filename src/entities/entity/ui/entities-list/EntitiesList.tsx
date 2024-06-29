import {BaseHTMLAttributes, cloneElement, FC, ReactElement} from "react";
import '@/app/scss/main.scss';
import {EntityData} from "@/entities/entity";
import classes from './EntitiesList.module.scss';

type EntitiesListProps = {
    data: EntityData[];
    children: ReactElement;
};

export const EntitiesList: FC<EntitiesListProps> = ({data, children}: EntitiesListProps) => {
    return data ? (
        <div className={`${classes.editableEntitiesList__entitiesList} app-grid`}>
            {data.map(entity => cloneElement(children, {
                ...children.props,
                data: entity,
                key: entity.id
            }))}
        </div>
    ) : undefined;
};