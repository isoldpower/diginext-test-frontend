import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './EntityListFx.module.scss';

export const EntityListFetching: FC = () => {
    return (
        <div className={`${classes.entityListFx__loading}`}>
            Loading...
        </div>
    );
};