import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {EntityData} from "@/entities/entity";

type ViewEntityProps = {
    entity: EntityData;
    children: ReactNode;
}

//TODO: Refactor (separate label from entity, better code)
//TODO: Entity view on canvas

export const ViewEntity: FC<ViewEntityProps> = ({entity, children}: ViewEntityProps) => {
    return (
        <a href={`/entity/${entity.id}`} type='button'>{children}</a>
    );
};