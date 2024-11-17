import Signin from "@/app/components/Auth/SignIn";
import Breadcrumb from "@/app/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign In",
};

const SigninPage = () => {
  return (
    <>

      <Signin />
      <Breadcrumb pageName="Sign In" />

    </>
  );
};

export default SigninPage;
