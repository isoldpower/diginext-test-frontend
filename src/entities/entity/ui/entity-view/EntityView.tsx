import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './EntityView.module.scss';
import {EntityData} from "@/entities/entity";

type EntityViewProps = {
    data?: EntityData;
    children: ReactNode;
}

export const EntityView: FC<EntityViewProps> = ({data, children}: EntityViewProps) => {
    return data ? (
        <article className={`${classes.entityView__wrapper} app-py-2 app-px-4`}>
            <div className={`${classes.entityView__title}`}>
                {data.name}
            </div>
            <div className={`${classes.entityView__coordinates} app-flex app-gap-2`}>
                <div className={`${classes.entityView__coordinatesVertex}`}>x: {data.coordinates.x}</div>
                <div className={`${classes.entityView__coordinatesVertex}`}>y: {data.coordinates.y}</div>
            </div>
            {children}
        </article>
    ) : undefined;
};