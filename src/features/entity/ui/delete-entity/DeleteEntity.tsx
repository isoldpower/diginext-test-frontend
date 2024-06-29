import {FC, ReactNode, useCallback} from "react";
import '@/app/scss/main.scss';
import {EntityPayload} from "@/entities/entity";

type DeleteEntityProps = {
    children: ReactNode;
    entity: EntityPayload;
}


export const DeleteEntity: FC<DeleteEntityProps> = ({children, entity}: DeleteEntityProps) => {
    const handleClick = useCallback(() => {
        console.log(entity.currentData.name, 'deleted');
    }, [entity]);

    return (
        <button onClick={handleClick}>{children}</button>
    );
};