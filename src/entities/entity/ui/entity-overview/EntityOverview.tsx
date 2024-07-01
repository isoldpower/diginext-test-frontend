import {FC} from "react";
import '@/app/scss/main.scss';
import classes from "./EntityOverview.module.scss";
import {CreateNewLabel, DeleteLabelOnClick, useEntity} from "@/features/entity";
import {EntityResponse} from "@/entities/entity";
import {ViewCoordinates} from "@/features/entity/ui/view-coordinates/ViewCoordinates";
import {RenameEntity} from "@/features/entity/ui/rename-entity/RenameEntity";

type EntityOverviewProps = {
    data: EntityResponse;
}

export const EntityOverview: FC<EntityOverviewProps> = ({data}: EntityOverviewProps) => {
    const entity = useEntity(data);

    return data ? (
        <div className={`${classes.entityPage__wrapper} app-grid app-gap-4 app-p-10`}>
            <h1 className='app-fs-500'>
                Entity named {entity.currentData.name}
            </h1>
            <RenameEntity entity={entity} />
            <div className={`${classes.entityPage__border} app-grid app-gap-2 app-p-4`}>
                <div className={`${classes.entityPage__labelsHeading} app-gap-2`}>Labels</div>
                <div className={`${classes.entityPage__labels}`}>
                    {entity.currentData.labels.map(item => (
                        <div
                            className={`${classes.entityPage__label} app-px-2 app-flex app-gap-2 app-justify-content-center app-align-items-center`}>
                            <div className={`${classes.entityPage__labelTitle} app-p-2`}>{item.title}</div>
                            <DeleteLabelOnClick data={item} deleteLabel={entity.removeLabel}>
                                <div className={`${classes.entityPage__delete}`}>-</div>
                            </DeleteLabelOnClick>
                        </div>
                    ))}
                    <CreateNewLabel entity={entity} />
                </div>
            </div>
            <div>
                <h4 className='app-pb-4'>Coordinates</h4>
                <ViewCoordinates entity={entity} />
            </div>
        </div>
    ) : undefined;
};