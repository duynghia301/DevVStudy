import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';

const Home = () => (
  <div>
    <div className="header">
      <div>
        <h1>Chào mừng đến với VStudy</h1>
        <p>Cùng VStudy học với mọi người</p>
        <div className="btn-container">
          <Link href="/auth/login">
            <Button type="primary" className="btn">Đăng nhập</Button>
          </Link>
          <Link href="/auth/register">
            <Button type="default" className="btn">Đăng ký</Button>
          </Link>
        </div>
      </div>
    </div>

    <div className="content">
      <h2>Học tập dễ dàng mọi lúc mọi nơi!</h2>
      <p>
        Ứng dụng học tập trực tuyến, dễ dàng, tiện lợi
      </p>
    </div>
  </div>
);

export default Home;
