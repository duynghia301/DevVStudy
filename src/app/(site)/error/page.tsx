import Breadcrumb from "@/app/components/Common/Breadcrumb";
import NotFound from "@/app/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
