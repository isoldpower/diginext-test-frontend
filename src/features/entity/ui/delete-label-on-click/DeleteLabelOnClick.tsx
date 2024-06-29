import {FC, ReactElement, useCallback} from "react";
import '@/app/scss/main.scss';
import classes from './DeleteEntityOnClick.module.scss';
import {EntityLabelData} from "@/entities/entity";

type DeleteEntityOnClickProps = {
    children: ReactElement;
    deleteLabel: (label: EntityLabelData) => void;
    data?: EntityLabelData;
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