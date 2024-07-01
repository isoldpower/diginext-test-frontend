import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {EntityDisplayFetching} from "./EntityDisplayFetching";
import {EntityDisplayError} from "./EntityDisplayError";

type EntityDisplayFxProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode
}

export const EntityDisplayFx: FC<EntityDisplayFxProps> = ({isLoading, isError, children}: EntityDisplayFxProps) => {
    if (isLoading) return <EntityDisplayFetching />
    else if (isError) return <EntityDisplayError />

    return children;
};