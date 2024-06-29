import {FC, FormEvent, useRef} from "react";
import '@/app/scss/main.scss';
import classes from './CreateNewLabel.module.scss';
import {EntityPayload} from "@/entities/entity";

type CreateNewLabelProps = {
    entity: EntityPayload;
}

export const CreateNewLabel: FC<CreateNewLabelProps> = ({entity}: CreateNewLabelProps) => {
    const inputRef = useRef<HTMLInputElement>();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const title = inputRef.current?.value;
        entity.addLabel(title);
        inputRef.current.value = '';
    }

    return (
        <form className={`${classes.createNewLabel__wrapper} app-flex`} onSubmit={handleSubmit}>
            <input placeholder='label name' maxLength={10} ref={inputRef}/>
            <button type='submit'>+</button>
        </form>
    );
};