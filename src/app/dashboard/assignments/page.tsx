// src/app/assignments/page.tsx
'use client';

import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { useRouter } from 'next/navigation';

const Assignments = () => {
  const router = useRouter();

  const handleViewAssignment = (id: string) => {
    router.push(`/assignments/${id}`);
  };

  const assignments = [
    { id: '1', title: 'Lập trình JavaScript cơ bản', dueDate: '2024-12-01' },
    { id: '2', title: 'Kỹ năng giao tiếp trong công việc', dueDate: '2024-12-10' },
    // Thêm bài tập ở đây
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Danh sách bài tập</h2>
      <Row gutter={[16, 16]}>
        {assignments.map(assignment => (
          <Col span={8} key={assignment.id}>
            <Card title={assignment.title} bordered={false}>
              <p>Hạn nộp: {assignment.dueDate}</p>
              <Button onClick={() => handleViewAssignment(assignment.id)} type="primary">
                Xem bài tập
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Assignments;
