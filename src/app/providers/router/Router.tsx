import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";

import {App} from "@/app/App";
import {HomeLazy} from "@/pages/home-page";

const defaultFallback = <div>Loading...</div>

const routes = [
    {
        path: '/',
        element:
            <Suspense fallback={defaultFallback}>
                <App/>
            </Suspense>,
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={defaultFallback}>
                        <HomeLazy />
                    </Suspense>
                )
            }
        ]
    }
];

export const router = createBrowserRouter(routes);
export default routes;