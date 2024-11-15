import React from "react";
import { Layout, Menu } from "antd";
import { AppstoreOutlined, FileTextOutlined, CalendarOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Sider } = Layout;

const AppSidebar: React.FC = () => {
  const router = useRouter();

  const handleMenuClick = (e: any) => {
    if (e.key === "courses") {
      router.push("/courses");
    } else if (e.key === "assignments") {
      router.push("/assignments");
    } else if (e.key === "attendance") {
      router.push("/attendance");
    }
  };

  return (
    <Sider width={250} className="site-layout-background" theme="dark">
      <Menu
        mode="inline"
        defaultSelectedKeys={["courses"]}
        onClick={handleMenuClick}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="courses" icon={<AppstoreOutlined />}>
          Courses
        </Menu.Item>
        <Menu.Item key="assignments" icon={<FileTextOutlined />}>
          Assignments
        </Menu.Item>
        <Menu.Item key="attendance" icon={<CalendarOutlined />}>
          Attendance
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSidebar;
