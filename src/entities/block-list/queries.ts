import { blockListControllerAddBlockItem, blockListControllerGetList, blockListControllerRemoveBlockItem } from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const blocklistkey = ['block-list']  as unknown[];
export function useBlockListQuery({q}: {q?:string}){

    return useQuery({
        queryKey: blocklistkey.concat({q}),
        queryFn: () => blockListControllerGetList({q}),
    })
}


export function useAddBlockItemMutation(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: blockListControllerAddBlockItem,
        async onSettled(){
            await queryClient.invalidateQueries({ queryKey: blocklistkey })

        }
    })
} 

export function useRemoveBlockItemMutation(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: blockListControllerRemoveBlockItem,
        async onSettled(){
            await queryClient.invalidateQueries({ queryKey: blocklistkey })
        }
    })
}