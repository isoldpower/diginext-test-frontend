import {FC, useEffect} from "react";
import '@/app/scss/main.scss';
import {fetchEntities, useAppDispatch} from "@/app/redux";
import {useLocation} from "react-router-dom";

type FetchEntitiesProps = {
}

export const FetchEntities: FC<FetchEntitiesProps> = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(fetchEntities());
    }, [location]);

    return undefined;
};