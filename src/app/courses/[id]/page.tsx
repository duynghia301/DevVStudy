// src/app/courses/[id]/page.tsx
'use client';

import React from 'react';
import { Button, Card, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import './page.css'; // Import CSS

const { Title, Paragraph } = Typography;

const CourseDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  
  const handleJoinClass = () => {
    router.push(`/courses/${params.id}/join`);
  };

  const courseDetails = {
    title: 'Lập trình JavaScript',
    description: 'Khóa học sẽ giúp bạn hiểu rõ về JavaScript từ cơ bản đến nâng cao.',
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card title={courseDetails.title} bordered={false}>
        <Title level={4}>Mô tả:</Title>
        <Paragraph>{courseDetails.description}</Paragraph>
        <Button onClick={handleJoinClass} type="primary">
          Tham gia lớp học
        </Button>
      </Card>
    </div>
  );
};

export default CourseDetails;
