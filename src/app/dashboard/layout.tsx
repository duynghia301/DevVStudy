import { Layout } from "antd";
import SiderMain from "../components/layout/m.sidebar";
import HeaderMain from "../components/layout/m.header";
import FooterMain from "../components/layout/m.footer";
import ContentMain from "../components/m.content";

const LayoutMain =({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) =>{
    return(
      <Layout>
      <SiderMain/>
      <Layout>
        <HeaderMain/>
         <ContentMain>
           {children}
         </ContentMain>
        <FooterMain/>
      </Layout>
    </Layout>

    )
}

export default LayoutMain;