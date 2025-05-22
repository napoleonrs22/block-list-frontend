import { useSessionQuery } from "@/entities/session/queries";
import { ROUTES } from "@/shared/constants/routes";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isLoading, isError } = useSessionQuery();

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.signIN);
      return null;
    }

    return <Component {...props} />;
  };
  return ProtectedPage;
}