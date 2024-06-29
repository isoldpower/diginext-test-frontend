import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {EntityListFetching} from "@/features/entity/ui/entity-list-fx/EntityListFetching";
import {EntityListError} from "@/features/entity/ui/entity-list-fx/EntityListError";

type EntityListFxProps = {
    isLoading?: boolean;
    isError?: boolean;
    children: ReactNode;
}

export const EntityListFx: FC<EntityListFxProps> = ({isLoading, isError, children}: EntityListFxProps) => {
    if (isLoading) return <EntityListFetching />;
    else if (isError) return <EntityListError />;

    return children;
};