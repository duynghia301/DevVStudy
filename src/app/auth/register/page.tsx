// src/app/auth/register/page.tsx
'use client';

import React, { useState } from 'react';
import { Button, Input, Form, message } from 'antd';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values: { email: string; password: string }) => {
    setLoading(true);
    // Simulate register
    setTimeout(() => {
      setLoading(false);
      message.success('Đăng ký thành công');
      router.push('/auth/login');
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Đăng Ký</h2>
      <Form name="register" layout="vertical" onFinish={handleRegister}>
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
        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }]}
        >
          <Input.Password placeholder="Xác nhận mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
