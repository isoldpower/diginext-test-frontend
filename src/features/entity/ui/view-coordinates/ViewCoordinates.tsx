import {FC, FormEvent} from "react";
import '@/app/scss/main.scss';
import {EntityPayload} from "@/features/entity";

type ViewCoordinatesProps = {
    entity: EntityPayload;
}

export const ViewCoordinates: FC<ViewCoordinatesProps> = ({entity}: ViewCoordinatesProps) => {
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const xRaw = formData.get('x-value');
        const yRaw = formData.get('y-value');
        entity.updateCoordinates({
            x: xRaw == '' ? entity.currentData.coordinates.x : Number(xRaw),
            y: yRaw == '' ? entity.currentData.coordinates.y : Number(yRaw)
        })
    };

    return (
        <div className='app-flex app-gap-6'>
            <form className='app-grid app-gap-2' onSubmit={handleFormSubmit}>
                <div className='app-flex app-gap-4'>
                    <div>{entity.currentData.coordinates.x}</div>
                    <label>X</label>
                    <input placeholder='set x' name='x-value' title='x-value' type='number'/>
                </div>
                <div className='app-flex app-gap-4'>
                    <div>{entity.currentData.coordinates.y}</div>
                    <label>Y</label>
                    <input placeholder='set y' name='y-value' title='y-value' type='number'/>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};