import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './HomePage.module.scss';
import {EditableEntitiesList, EntitiesCanvas} from "@/widgets/entity";

const HomePage: FC = () => {
    return (
        <div className={`${classes.homePage__wrapper} app-px-5`}>
            <section className={`${classes.homePage__entitiesView} app-pt-10`}>
                <h1 className='app-fs-400 app-pb-8'>List of all entities</h1>
                <EditableEntitiesList />
                <EntitiesCanvas />
            </section>
        </div>
    );
};

export default HomePage;