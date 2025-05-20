import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UILink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
// import { useSignInForm } from "../modal/use-sign-up-form";
import { useSignInForm } from "../modal/use-sign-in-form";

export function SignInForm() {
  const {handleSubmit,isLoading,errorMessage, register} = useSignInForm()

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <UiTextField
        label="Email"
        inputProps={{
          ...register("email", { required: true }),
          type: "email",
          placeholder: "you@example.com",
        }}
      />

      <UiTextField
        label="Password"
        inputProps={{
          ...register("password", { required: true }),
          type: "password",
          placeholder: "Enter your password",
        }}
      />

      <UiButton disabled={isLoading} variant="primary" type="submit" className="mt-2">
        Sign Up
      </UiButton>

      <UILink className="text-center" href={ROUTES.signIN}>Sign In</UILink>
      {errorMessage  && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
}
