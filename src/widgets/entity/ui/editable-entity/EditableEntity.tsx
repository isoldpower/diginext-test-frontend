import {DeleteLabelOnClick, ViewEntity} from "@/features/entity";
import {EntityLabel} from "@/entities/entity/ui/entity-label/EntityLabel";
import {EntityData, EntityView} from "@/entities/entity";
import {FC} from "react";
import {CreateNewLabel} from "@/features/entity/ui/create-new-label/CreateNewLabel";
import {DeleteEntity} from "@/features/entity/ui/delete-entity/DeleteEntity";

import classes from './EditableEntity.module.scss';
import {useEntity} from "@/features/entity";

type EditableEntityProps = {
    data: EntityData;
}

export const EditableEntity: FC<EditableEntityProps> = ({data}) => {
    const entity = useEntity({...data, x: data.coordinates.x, y: data.coordinates.y});

    return (
        <EntityView data={entity.currentData}>
            <div className='app-grid app-gap-2'>
                <div className={classes.entityView__labels}>
                    {entity.currentData?.labels?.map((label, index) => (
                        <DeleteLabelOnClick data={label} key={index} deleteLabel={entity.removeLabel}>
                            <EntityLabel data={label}/>
                        </DeleteLabelOnClick>
                    ))}
                </div>
                <CreateNewLabel entity={entity}/>
            </div>
            <div className={`${classes.editableEntity__controls}`}>
                <DeleteEntity entity={entity}>-</DeleteEntity>
                <ViewEntity entity={entity.currentData}>
                    <div className={`${classes.editableEntity__view} app-fs-100`}>
                        {'>'}
                    </div>
                </ViewEntity>
            </div>
        </EntityView>
    )
}
