import {FC, FormEvent, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './CreateNewLabel.module.scss';
import {EntityPayload} from "@/features/entity";

type CreateNewLabelProps = {
    entity: EntityPayload;
}

export const CreateNewLabel: FC<CreateNewLabelProps> = ({entity}: CreateNewLabelProps) => {
    const inputRef = useRef<HTMLInputElement>();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const nameRaw = formData.get('name');
        entity.addLabel({
            title: nameRaw.toString(),
            id: undefined
        });
    }

    return (
        <form className={`${classes.createNewLabel__wrapper} app-flex`} onSubmit={handleSubmit}>
            <input placeholder='label name' maxLength={10} ref={inputRef} name='name' title='name' />
            <button type='submit'>+</button>
        </form>
    );
};