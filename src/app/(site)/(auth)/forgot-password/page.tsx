import React from "react";
import ForgotPassword from "@/app/components/Auth/ForgotPassword";
import Breadcrumb from "@/app/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassword />
      <Breadcrumb pageName="Forget Password" />

    </>
  );
};

export default ForgotPasswordPage;
