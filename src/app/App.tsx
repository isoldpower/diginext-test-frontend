import {Outlet} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "@/app/redux";

export const App = () => {
    return (
        <Provider store={store}>
            <Outlet />
        </Provider>
    );
};