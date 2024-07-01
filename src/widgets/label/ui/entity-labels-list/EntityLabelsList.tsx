import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './EntityLabelsList.module.scss';
import {EntityLabel} from "@/entities/label";
import {CreateNewLabel, DeleteLabelOnClick} from "@/features/label";
import {EntityLabel as EntityLabelData} from "@/entities/entity";


type EntityLabelsListProps = {
    labels: EntityLabelData[];
    removeLabel: (label: EntityLabelData) => void;
    addLabel: (label: EntityLabelData) => void;
}

export const EntityLabelsList: FC<EntityLabelsListProps> = ({labels, removeLabel, addLabel}: EntityLabelsListProps) => {
    return (
        <div className='app-grid app-gap-2'>
            <div className={classes.entityView__labels}>
                {labels?.map((label, index) => (
                    <DeleteLabelOnClick data={label} key={index} deleteLabel={removeLabel}>
                        <EntityLabel data={label} />
                    </DeleteLabelOnClick>
                ))}
            </div>
            <CreateNewLabel addLabel={addLabel} />
        </div>
    );
};