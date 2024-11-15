// src/app/discussion/page.tsx
'use client';

import React, { useState } from 'react';
import { Button, Input, List, Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Title, Paragraph } = Typography;

const Discussion = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, content: 'Chào các bạn, có ai đã làm xong bài tập chưa?' },
    { id: 2, content: 'Mình đã làm xong, có thể hỏi về phần này không?' },
    // Các tin nhắn trong thảo luận
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, content: message }]);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Thảo luận lớp học</Title>
      <List
        dataSource={messages}
        renderItem={item => (
          <List.Item>
            <Paragraph>{item.content}</Paragraph>
          </List.Item>
        )}
      />
      <Input.TextArea
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Nhập tin nhắn..."
        rows={4}
        style={{ marginBottom: '10px' }}
      />
      <Button onClick={handleSendMessage} type="primary">
        Gửi tin nhắn
      </Button>
    </div>
  );
};

export default Discussion;
