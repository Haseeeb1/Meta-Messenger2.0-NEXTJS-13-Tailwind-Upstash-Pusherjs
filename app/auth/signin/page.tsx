import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div>
        <Image
          className="rounded-full mx-2 object-cover"
          src="https://download.logo.wine/logo/Facebook_Messenger/Facebook_Messenger-Logo.wine.png"
          alt="logo"
          height={500}
          width={500}
        />
      </div>
      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;
