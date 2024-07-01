import {FC} from "react";
import classes from './EditableEntity.module.scss';

import {EntityData, EntityView} from "@/entities/entity";
import {DeleteEntity, ViewEntity, useEntity} from "@/features/entity";
import {EntityLabelsList} from "@/widgets/label";

type EditableEntityProps = {
    data: EntityData;
}

export const EditableEntity: FC<EditableEntityProps> = ({data}) => {
    const entity = useEntity({...data, x: data.coordinates.x, y: data.coordinates.y});

    return (
        <EntityView data={entity.currentData}>
            <EntityLabelsList labels={entity.currentData?.labels} {...entity} />
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
