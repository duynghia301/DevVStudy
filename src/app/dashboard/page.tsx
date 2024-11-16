'use client';

import React from 'react';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout,  theme } from 'antd';
import HeaderMain from '../components/layout/m.header';
import FooterMain from '../components/layout/m.footer';
import SiderMain from '../components/layout/m.sidebar';
import ContentMain from '../components/m.content';

const Dashboard = () => {
  
 

  return (
    <Layout>
      <SiderMain/>
      <Layout>
        <HeaderMain/>
        
        <FooterMain/>
      </Layout>
    </Layout>
  );
};

export default Dashboard;