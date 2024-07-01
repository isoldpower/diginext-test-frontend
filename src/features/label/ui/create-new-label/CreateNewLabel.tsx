import {FC, FormEvent, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './CreateNewLabel.module.scss';
import {EntityLabel} from "@/entities/entity";

type CreateNewLabelProps = {
    addLabel: (label: EntityLabel) => void;
}

export const CreateNewLabel: FC<CreateNewLabelProps> = ({addLabel}: CreateNewLabelProps) => {
    const inputRef = useRef<HTMLInputElement>();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const nameRaw = formData.get('name');
        addLabel({title: nameRaw.toString(), id: undefined});
    }

    return (
        <form className={`${classes.createNewLabel__wrapper} app-flex`} onSubmit={handleSubmit}>
            <input placeholder='label name' maxLength={10} ref={inputRef} name='name' title='name' />
            <button type='submit'>+</button>
        </form>
    );
};