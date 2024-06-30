import {FC, ReactNode, useCallback} from "react";
import '@/app/scss/main.scss';
import {EntityPayload} from "@/entities/entity";
import {deleteEntityAsync, useAppDispatch} from "@/app/redux";

type DeleteEntityProps = {
    children: ReactNode;
    entity: EntityPayload;
}


export const DeleteEntity: FC<DeleteEntityProps> = ({children, entity}: DeleteEntityProps) => {
    const dispatch = useAppDispatch();

    const handleClick = useCallback(() => {
        dispatch(deleteEntityAsync(entity.currentData.id));
    }, [entity]);

    return (
        <button onClick={handleClick}>{children}</button>
    );
};