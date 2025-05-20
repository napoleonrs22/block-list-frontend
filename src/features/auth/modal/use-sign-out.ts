import { useResetSession } from "@/entities/session/queries";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOut() {
  const resetSession = useResetSession();
  const router = useRouter();
  const queryClient = useQueryClient()

  const singOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(ROUTES.signIN);
      queryClient.removeQueries({ queryKey: ['session'] })

      resetSession();
    },
  });

  return {
    isLoading: singOutMutation.isPending,
    singOut: singOutMutation.mutate,
  };
}