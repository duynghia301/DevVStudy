import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, HomeOutlined, LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Header } = Layout;

const AppHeader: React.FC = () => {
  const router = useRouter();

  const handleMenuClick = (e: any) => {
    if (e.key === "home") {
      router.push("/courses");
    } else if (e.key === "profile") {
      router.push("/profile");
    } else if (e.key === "logout") {
      // Đăng xuất, có thể redirect về trang login
      router.push("/auth/login");
    }
  };

  return (
    <Header style={{ background: "#001529", padding: "0 20px" }}>
      <div style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}>
        VStudy
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        onClick={handleMenuClick}
        style={{ float: "right" }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
