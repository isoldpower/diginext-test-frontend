import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './EntitiesCanvas.module.scss';

type EntitiesCanvasProps = {
}

export const EntitiesCanvas: FC<EntitiesCanvasProps> = ({}: EntitiesCanvasProps) => {
    return (
        <canvas className={`${classes.entitiesCanvas__wrapper} app-mt-8 app-bg-neutral-100`}>
            not implemented
        </canvas>
    );
};