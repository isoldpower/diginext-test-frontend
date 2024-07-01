import {FC} from "react";
import '@/app/scss/main.scss';
import {EntityDisplay} from "@/widgets/entity";
import {Link} from "react-router-dom";
import classes from './EntityPage.module.scss';

const EntityPage: FC = () => {
    return (
        <section>
            <Link to={'/'}>
                <div className={`${classes.entityPage__nav} app-p-3`}>Home</div>
            </Link>
            <EntityDisplay />
        </section>
    );
};

export default EntityPage;