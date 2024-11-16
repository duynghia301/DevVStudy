// /app/profile/page.tsx
import React, { useEffect, useState } from 'react';
import { Card, Button, Descriptions } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '@/hooks/useAuth'; // Giả sử bạn có một hook dùng để lấy thông tin người dùng

const ProfilePage = () => {
  const { user, loading, error } = useAuth(); // Hook lấy thông tin người dùng
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading profile</div>;
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: 'auto' }}>
      <Card
        style={{ width: '100%' }}
        cover={<img alt="profile" src={userData?.avatar || '/default-avatar.png'} />}
        actions={[<Button type="primary">Edit Profile</Button>]}
      >
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Username">{userData?.username}</Descriptions.Item>
          <Descriptions.Item label="Email">{userData?.email}</Descriptions.Item>
          <Descriptions.Item label="Role">{userData?.role}</Descriptions.Item>
          {/* Thêm các trường thông tin khác nếu cần */}
        </Descriptions>
      </Card>
    </div>
  );
};

export default ProfilePage;
