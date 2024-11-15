// src/app/auth/login/page.tsx
'use client';

import React, { useState } from 'react';
import { Button, Input, Form, message } from 'antd';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      message.success('Đăng nhập thành công');
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Đăng Nhập</h2>
      <Form name="login" layout="vertical" onFinish={handleLogin}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Đăng Nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
