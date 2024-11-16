// src/app/assignments/[id]/page.tsx
'use client';

import React, { useState } from 'react';
import { Button, Card, Input, message } from 'antd';
import { useRouter } from 'next/navigation';

const AssignmentDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitAssignment = () => {
    message.success('Bài tập đã được nộp');
    setSubmitted(true);
  };

  const assignment = {
    title: 'Lập trình JavaScript cơ bản',
    description: 'Bài tập này yêu cầu bạn viết mã JavaScript đơn giản.',
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card title={assignment.title} bordered={false}>
        <h3>Mô tả bài tập:</h3>
        <p>{assignment.description}</p>
        <Input.TextArea placeholder="Gửi bài tập của bạn ở đây" rows={4} />
        <Button
          onClick={handleSubmitAssignment}
          type="primary"
          disabled={submitted}
          style={{ marginTop: '10px' }}
        >
          {submitted ? 'Đã nộp' : 'Nộp bài'}
        </Button>
      </Card>
    </div>
  );
};

export default AssignmentDetails;
