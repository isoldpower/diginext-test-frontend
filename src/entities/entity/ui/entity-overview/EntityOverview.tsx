import {FC} from "react";
import '@/app/scss/main.scss';
import classes from "./EntityOverview.module.scss";
import {useEntity, ViewCoordinates, RenameEntity} from "@/features/entity";
import {EntityResponse} from "@/entities/entity";
import {EntityLabelsList} from "@/widgets/label";

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
                <EntityLabelsList labels={entity.currentData?.labels} {...entity} />
            </div>
            <div>
                <h4 className='app-pb-4'>Coordinates</h4>
                <ViewCoordinates entity={entity} />
            </div>
        </div>
    ) : undefined;
};