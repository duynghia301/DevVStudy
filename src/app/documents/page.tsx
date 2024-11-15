// src/app/documents/page.tsx
'use client';

import { Table, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';
import './page.css'; // Import CSS

const dataSource = [
  { key: '1', name: 'Lecture 1', uploadedBy: 'John Doe', date: '2024-11-10' },
  { key: '2', name: 'Lecture 2', uploadedBy: 'Jane Smith', date: '2024-11-12' },
];

const columns = [
  { title: 'Document Name', dataIndex: 'name', key: 'name' },
  { title: 'Uploaded By', dataIndex: 'uploadedBy', key: 'uploadedBy' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  {
    title: 'Action',
    key: 'action',
    render: () => <Button type="primary">View</Button>,
  },
];

const Documents = () => {
  const handleUpload = (file: any) => {
    message.success(`${file.name} file uploaded successfully.`);
    return false; // Prevent actual upload
  };

  return (
    <main className="container">
      <h1 className="header">Documents</h1>
      <Upload beforeUpload={handleUpload} maxCount={1}>
        <Button className="uploadButton" icon={<UploadOutlined />}>
          Upload Document
        </Button>
      </Upload>
      <div className="tableContainer">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </main>
  );
};

export default Documents;
