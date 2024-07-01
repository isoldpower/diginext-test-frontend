import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './EntitiesList.module.scss';

type EntitiesListProps = {
    children: ReactNode;
};

export const EntitiesList: FC<EntitiesListProps> = ({children}: EntitiesListProps) => {
    return (
        <div className={`${classes.editableEntitiesList__entitiesList} app-grid`}>
            <div className={`${classes.editableEntitiesList__heading} app-grid`}>
                <div>Name</div>
                <div>Coordinates</div>
                <div>Labels</div>
            </div>
            <div className={`${classes.editableEntitiesList__entitiesList} app-grid`}>
                {children}
            </div>
        </div>
    );
};