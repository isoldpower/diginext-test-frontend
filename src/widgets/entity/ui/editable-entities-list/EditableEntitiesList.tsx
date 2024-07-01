import {cloneElement, FC, ReactElement} from "react";
import '@/app/scss/main.scss';
import classes from './EditableEntitiesList.module.scss';
import {CreateNewEntity} from "@/features/entity";
import {selectEntities, useTypedSelector} from "@/app/redux";
import {EntitiesList} from "@/entities/entity";

type EditableEntitiesListProps = {
    children: ReactElement;
}

export const EditableEntitiesList: FC<EditableEntitiesListProps> = ({children}: EditableEntitiesListProps) => {
    const entities = useTypedSelector(selectEntities);

    return (
        <div className={`${classes.editableEntitiesList__wrapper} app-grid app-gap-4`}>
            <div className={`${classes.editableEntitiesList__controlWrapper} app-flex app-gap-4`}>
                <CreateNewEntity>Create</CreateNewEntity>
            </div>
            <hr/>
            <EntitiesList>
                {entities.map(entity => cloneElement(children, {
                    ...children.props,
                    data: entity,
                    key: entity.id
                }))}
            </EntitiesList>
        </div>
    );
};