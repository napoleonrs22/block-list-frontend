
import { Geist, Geist_Mono } from "next/font/google";

import { authControllerGetSessionInfo} from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UILink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth/ui/sign-out-button";
import { useSessionQuery } from "@/entities/session/queries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export  function HomePage() {

  const {data} = useSessionQuery()
  // const {data} = useQuery({
  //   queryKey:['session'],
  //   queryFn: ()=> authControllerGetSessionInfo()
  // });
  // useEffect(()=>{
  //   authControllerSignIn({ email: 'test@gmail.com', password: '123456' }).then(
  //     console.log,
  //   );
  // },[])
  return (
    <main
      className={'min-h-screen'}
    >
      <UiHeader right={<div> {data?.email}<SignOutButton/></div>}></UiHeader>
      <UiButton variant="primary">Hey</UiButton>
      <UiButton variant="secondary">Hey</UiButton>
      <UiButton variant ="outlined">Sign Out</UiButton>
      <UiButton variant ="primary">Sign Out</UiButton>
      
      <UiTextField label="Text field" inputProps={{placeholder:"Enter exail..."}}></UiTextField>
      
      
      
      <UiTextField error="Text field" inputProps={{placeholder:"Enter exail..."}}></UiTextField>
      <UiTextField inputProps={{placeholder:"Enter exail..."}}></UiTextField>
      <UiSelectField
        placeholder="Enter exail..."
        options={[
          { value: "1", label: "options" },
        ]}
      />
      <UILink href={"/"}>кпвпк</UILink>
      {/* <UiSpinner className="text text-teal-600 m-2 h-20"></UiSpinner> */}
      
    </main>
  );
}
