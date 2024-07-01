import {Outlet} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "@/app/redux";
import {FetchEntities} from "./providers/entities/FetchEntities";

export const App = () => {
    return (
        <Provider store={store}>
            <FetchEntities />
            <Outlet />
        </Provider>
    );
};