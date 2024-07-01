import {FC, ReactElement, useCallback} from "react";
import '@/app/scss/main.scss';
import classes from './DeleteEntityOnClick.module.scss';
import {EntityLabel} from "@/entities/entity";

type DeleteEntityOnClickProps = {
    children: ReactElement;
    deleteLabel: (label: EntityLabel) => void;
    data?: EntityLabel;
}

export const DeleteLabelOnClick: FC<DeleteEntityOnClickProps> = ({children, deleteLabel, data}: DeleteEntityOnClickProps) => {
    const handleClick = useCallback(() => {
        deleteLabel(data);
    }, [data]);

    return (
        <button type='button' className={`${classes.deleteLabelOnClick__button}`} onClick={handleClick}>
            {children}
        </button>
    );
};