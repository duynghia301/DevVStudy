import SignUp from "@/app/components/Auth/SignUp";
import Breadcrumb from "@/app/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign Up | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SignupPage = () => {
  return (
    <>

      <SignUp />
      <Breadcrumb pageName="Sign Up" />

    </>
  );
};

export default SignupPage;
