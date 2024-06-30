import {FC, useEffect} from "react";
import '@/app/scss/main.scss';
import classes from './EditableEntitiesList.module.scss';
import {EditableEntity} from "@/widgets/entity";
import {CreateNewEntity} from "@/features/entity";
import {fetchEntities, selectEntities, useAppDispatch, useTypedSelector} from "@/app/redux";

export const EditableEntitiesList: FC = () => {
    const dispatch = useAppDispatch();
    const entities = useTypedSelector(selectEntities);
    useEffect(() => {
        dispatch(fetchEntities());
    }, []);

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