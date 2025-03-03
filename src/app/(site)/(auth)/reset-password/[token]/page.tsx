import React from "react";
import ResetPassword from "@/app/components/Auth/ResetPassword";
import Breadcrumb from "@/app/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const ResetPasswordPage = ({ params }: { params: { token: string } }) => {
  return (
    <>
      <ResetPassword token={params.token} />
      <Breadcrumb pageName="Reset Password" />

    </>
  );
};

export default ResetPasswordPage;
