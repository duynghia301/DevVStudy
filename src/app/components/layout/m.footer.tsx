'use client'
import { Layout } from 'antd';

const FooterMain = () =>{
    const {  Footer } = Layout;

    return (
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by NISO GROUP 12 
        </Footer>
    )
} 
export default FooterMain;