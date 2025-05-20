import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignInForm } from "@/features/auth";

export function SignInPage(){
    return(
        <UiFormPageLayout
            title="Sign in"
            header = { <UiHeader/>}
            form = { <SignInForm/>}
        ></UiFormPageLayout>
    );
}