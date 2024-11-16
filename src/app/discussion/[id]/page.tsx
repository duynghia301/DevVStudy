// src/app/discussion/[id]/page.tsx
'use client';

import React from 'react';
import { Button, Card, List, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import './page.css'; // Import CSS

const { Title, Paragraph } = Typography;

const DiscussionDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  
  const discussion = {
    title: 'Hướng dẫn lập trình JavaScript',
    messages: [
      { id: 1, content: 'Có ai đã thử code bài này chưa?' },
      { id: 2, content: 'Mình đã thử và gặp vấn đề với hàm map' },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card title={discussion.title} bordered={false}>
        <List
          dataSource={discussion.messages}
          renderItem={item => (
            <List.Item>
              <Paragraph>{item.content}</Paragraph>
            </List.Item>
          )}
        />
        <Button onClick={() => router.push('/discussion')} style={{ marginTop: '10px' }}>
          Quay lại
        </Button>
      </Card>
    </div>
  );
};

export default DiscussionDetails;
