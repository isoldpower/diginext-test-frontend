import {FC, FormEvent} from "react";
import '@/app/scss/main.scss';
import {EntityPayload} from "@/features/entity";

type RenameEntityProps = {
    entity: EntityPayload;
}

export const RenameEntity: FC<RenameEntityProps> = ({entity}: RenameEntityProps) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const nameRaw = formData.get('name');
        const name = nameRaw == ''
            ? entity.currentData.name
            : nameRaw.toString();
        entity.updateName(name);
    }

    return (
        <form onSubmit={handleSubmit} className='app-flex app-gap-2'>
            <div className='app-flex app-gap-4'>
                <label>Edit</label>
                <input placeholder='new name' name='name' title='name'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};