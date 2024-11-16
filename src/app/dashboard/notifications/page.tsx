// src/app/notifications/page.tsx
'use client';

import React from 'react';
import { List, Typography } from 'antd';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Bạn có một bài tập mới cần nộp' },
    { id: 2, message: 'Lớp học sẽ bắt đầu trong 10 phút' },
    // Thêm thông báo ở đây
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Thông báo</h2>
      <List
        bordered
        dataSource={notifications}
        renderItem={item => (
          <List.Item>
            <Typography.Text>{item.message}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Notifications;
