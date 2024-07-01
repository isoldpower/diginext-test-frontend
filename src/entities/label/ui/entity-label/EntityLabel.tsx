import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './EntityLabel.module.scss';
import {EntityLabel as EntityLabelData} from "@/entities/entity";

type EntityLabelProps = {
    data?: EntityLabelData;
}

export const EntityLabel: FC<EntityLabelProps> = ({data}: EntityLabelProps) => {
    return data ? (
        <div className={`${classes.entityLabel__wrapper}`}>
            <div className={`${classes.entityLabel__content}`}>
                {data.title}
            </div>
        </div>
    ) : undefined;
};