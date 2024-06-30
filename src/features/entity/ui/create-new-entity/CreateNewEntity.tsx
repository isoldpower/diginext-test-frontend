import {FC, FormEvent, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './CreateNewEntity.module.scss';
import {createEntityAsync, useAppDispatch} from "@/app/redux";

type CreateNewEntityProps = {
    children: ReactNode;
}

export const CreateNewEntity: FC<CreateNewEntityProps> = ({children}: CreateNewEntityProps) => {
    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
        const coordinateX = Number((e.currentTarget.elements.namedItem('coordinate-x') as HTMLInputElement).value);
        const coordinateY = Number((e.currentTarget.elements.namedItem('coordinate-y') as HTMLInputElement).value);

        dispatch(createEntityAsync({
            name: name,
            x: coordinateX,
            y: coordinateY,
            labels: []
        }));
    };

    return (
        <form onSubmit={handleSubmit} className={`${classes.createNewEntity__form} app-grid app-gap-1`}>
            <input className='app-py-1 app-px-3' placeholder='name' title='name' name='name'/>
            <div className='app-flex app-gap-2'>
                <input className='app-px-3 app-py-1' type='number' placeholder='x' title='coordinate-x' name='coordinate-x' />
                <input className='app-px-3 app-py-1' type='number' placeholder='y' title='coordinate-y' name='coordinate-y' />
            </div>
            <button type='submit'>{children}</button>
        </form>
    );
};