// src/app/grades/page.tsx
'use client';

import React from 'react';
import { Table } from 'antd';
import './page.css'; // Import CSS

const Grades = () => {
  const data = [
    {
      key: '1',
      subject: 'Lập trình JavaScript',
      score: 85,
      grade: 'A',
    },
    {
      key: '2',
      subject: 'Kỹ năng giao tiếp',
      score: 75,
      grade: 'B',
    },
    // Thêm điểm các môn học ở đây
  ];

  const columns = [
    {
      title: 'Môn học',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Điểm',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Xếp loại',
      dataIndex: 'grade',
      key: 'grade',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Điểm số của bạn</h2>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default Grades;
