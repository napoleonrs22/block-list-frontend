import { useSessionQuery } from "@/entities/session/queries";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props:P) => ReactElement){

    return function protectedPage(props: PropsWithChildren<P>){


        const  router = useRouter()
        const {isLoading,isError} = useSessionQuery();
        if(isLoading){
            return<UiPageSpinner></UiPageSpinner>
        }

        if(isError){
            router.replace(ROUTES.signIN);
        }
        return <Component {...props}/>
    }

}