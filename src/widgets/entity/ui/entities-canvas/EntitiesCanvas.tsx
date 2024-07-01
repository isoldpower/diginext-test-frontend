import {FC, useEffect, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './EntitiesCanvas.module.scss';
import {EntityCanvas} from "@/features/entity";
import {selectEntities, useTypedSelector} from "@/app/redux";

type EntitiesCanvasProps = {
}

export const EntitiesCanvas: FC<EntitiesCanvasProps> = ({}: EntitiesCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>();
    const canvas = useRef<EntityCanvas>();
    const entities = useTypedSelector(selectEntities);
    useEffect(() => {
        if (!canvasRef.current) return;

        canvas.current = new EntityCanvas(canvasRef.current);
        for (const entity of entities) {
            canvas.current.drawEntity(entity);
        }
    }, [canvasRef.current, entities]);

    const refresh = () => {
        if (!canvas.current) return;

        canvas.current.clearCanvas();
        for (const entity of entities) {
            canvas.current.drawEntity(entity);
        }
    }

    return (
        <div className='app-mt-8'>
            <button onClick={refresh}>Refresh</button>
            <canvas className={`${classes.entitiesCanvas__wrapper} app-mt-2 app-bg-neutral-050`} ref={canvasRef} />
        </div>
    );
};