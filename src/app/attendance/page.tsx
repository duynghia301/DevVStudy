// /app/attendance/page.tsx
import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { useAttendance } from '@/hooks/useAttendance'; // Giả sử bạn có một hook để lấy thông tin điểm danh

const AttendancePage = () => {
  const { attendanceData, loading, error } = useAttendance(); // Hook lấy thông tin điểm danh
  const [data, setData] = useState([]);

  useEffect(() => {
    if (attendanceData) {
      setData(attendanceData);
    }
  }, [attendanceData]);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Present' ? 'green' : 'red'}>{status}</Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: any) => (
        <Space size="middle">
          <Button type="link">View Details</Button>
        </Space>
      ),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading attendance data</div>;
  }

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: 'auto' }}>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        bordered
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default AttendancePage;
