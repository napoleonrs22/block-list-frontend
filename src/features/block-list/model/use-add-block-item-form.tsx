import { useAddBlockItemMutation } from "@/entities/block-list/queries";
import { AddBlockItemDtoType } from "@/shared/api/generated";

import { useForm } from "react-hook-form";

export function useAddBlockItemForm(){
  
    const  {handleSubmit,register,watch, reset} = useForm<{
        type: AddBlockItemDtoType;
        data: string;
    }>({
        defaultValues:{
            type: AddBlockItemDtoType.Website,
        },
    });

    const addBlockItemMutaion =  useAddBlockItemMutation()

    const type = watch("type");

    return {
        handleSubmit: handleSubmit((data) =>{
             addBlockItemMutaion.mutate(data,{
                onSuccess(){
                    reset();
                }
             })
            
        }),
        isLoading : addBlockItemMutaion.isPending,
        register,
        type
    };
}