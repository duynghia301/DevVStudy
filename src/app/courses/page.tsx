// src/app/courses/page.tsx
'use client';

import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { useRouter } from 'next/navigation';
import './page.css'; // Import CSS

const Courses = () => {
  const router = useRouter();
  
  const handleJoinCourse = (id: string) => {
    router.push(`/courses/${id}`);
  };

  const courses = [
    { id: '1', title: 'Lập trình JavaScript' },
    { id: '2', title: 'Kỹ năng giao tiếp' },
    // Thêm khóa học ở đây
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Danh sách khóa học</h2>
      <Row gutter={[16, 16]}>
        {courses.map(course => (
          <Col span={8} key={course.id}>
            <Card title={course.title} bordered={false}>
              <Button onClick={() => handleJoinCourse(course.id)} type="primary">
                Tham gia
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
