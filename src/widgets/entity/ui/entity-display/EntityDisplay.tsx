import {FC} from "react";
import '@/app/scss/main.scss';
import {EntityDisplayFx} from "@/features/entity";
import {EntityOverview} from "@/entities/entity";
import {useParams} from "react-router-dom";
import {useFetchEntityQuery} from "@/app/redux";

export const EntityDisplay: FC = () => {
    const params = useParams();
    const {...query} = useFetchEntityQuery(parseInt(params.entity));

    return (
        <EntityDisplayFx {...query}>
            <EntityOverview data={query.currentData} />
        </EntityDisplayFx>
    );
};