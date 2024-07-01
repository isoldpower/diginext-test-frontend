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

        const formData = new FormData(e.currentTarget);
        dispatch(createEntityAsync({
            name: formData.get('name').toString(),
            x: Number(formData.get('coordinate-x')),
            y: Number(formData.get('coordinate-y')),
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