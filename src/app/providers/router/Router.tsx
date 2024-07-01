import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";

import {App} from "@/app/App";
import {HomeLazy} from "@/pages/home-page";
import {EntityLazy} from "@/pages/entity-page";

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
            },
            {
                path: '/entity/:entity',
                element: (
                    <Suspense fallback={defaultFallback}>
                        <EntityLazy />
                    </Suspense>
                )
            }
        ]
    }
];

export const router = createBrowserRouter(routes);
export default routes;