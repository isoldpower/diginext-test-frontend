import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './EntityListFx.module.scss';

export const EntityListError: FC = () => {
    return (
        <div className={`${classes.entityListFx__loading}`}>
            Error!!!
        </div>
    );
};