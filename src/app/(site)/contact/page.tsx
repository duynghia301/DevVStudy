import Breadcrumb from "@/app/components/Common/Breadcrumb";
import Contact from "@/app/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <>
     

      <Contact />
      <Breadcrumb pageName="Contact Page" />
    </>
  );
};

export default ContactPage;
