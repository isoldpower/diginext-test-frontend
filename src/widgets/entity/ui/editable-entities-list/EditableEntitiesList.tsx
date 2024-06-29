import {FC, useState} from "react";
import '@/app/scss/main.scss';
import classes from './EditableEntitiesList.module.scss';
import {Button} from "@/shared/ui-toolkit";
import dataMock from './DATA_MOCK.json';
import {EntityData} from "@/entities/entity";
import {EditableEntity} from "@/widgets/entity";
import {CreateNewEntity} from "@/features/entity";

export const EditableEntitiesList: FC = () => {
    const [entities, setEntities] = useState<EntityData[]>(dataMock.entities);

    return (
        <div className={`${classes.editableEntitiesList__wrapper} app-grid app-gap-4`}>
            <div className={`${classes.editableEntitiesList__controlWrapper} app-flex app-gap-4`}>
                <CreateNewEntity>Create</CreateNewEntity>
            </div>
            <hr/>
            <div className={`${classes.editableEntitiesList__entitiesList} app-grid`}>
                <div className={`${classes.editableEntitiesList__heading} app-grid`}>
                    <div>Name</div>
                    <div>Coordinates</div>
                    <div>Labels</div>
                </div>
                <div className={`${classes.editableEntitiesList__entitiesList} app-grid`}>
                    {entities.map(entity => (
                        <EditableEntity data={entity} key={entity.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};