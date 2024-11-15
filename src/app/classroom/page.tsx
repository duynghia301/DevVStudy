// src/app/classroom/page.tsx
'use client';

import React from 'react';
import { Button, Space } from 'antd';
import { VideoCameraOutlined, ShareAltOutlined, MessageOutlined } from '@ant-design/icons';

const VirtualClassroom = () => {
  const startVideoCall = () => {
    // Phần logic bắt đầu gọi video
  };

  const shareScreen = () => {
    // Phần logic chia sẻ màn hình
  };

  const sendMessage = () => {
    // Phần logic gửi tin nhắn
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Phòng học ảo</h2>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button icon={<VideoCameraOutlined />} onClick={startVideoCall} block>
          Bắt đầu cuộc gọi video
        </Button>
        <Button icon={<ShareAltOutlined />} onClick={shareScreen} block>
          Chia sẻ màn hình
        </Button>
        <Button icon={<MessageOutlined />} onClick={sendMessage} block>
          Gửi tin nhắn
        </Button>
      </Space>
    </div>
  );
};

export default VirtualClassroom;
