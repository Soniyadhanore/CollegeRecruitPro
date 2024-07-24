import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LaptopOutlined,
  QuestionCircleOutlined,
  ContainerOutlined,
  TransactionOutlined,
  UserSwitchOutlined,
  UsergroupAddOutlined,
  CalendarOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
import ChangePassword from "../../Modal/ChangePassword";
import ConfirmationModal from "../../Modal/ConfirmationModal";
const { Sider } = Layout;
const LeftSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const showChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  };
  const handleChangePasswordOk = () => {
    setIsChangePasswordModalOpen(false);
  };
  const handleChangePasswordCancel = () => {
    setIsChangePasswordModalOpen(false);
  };
  const showLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };
  const handleLogoutOk = () => {
    setIsLogoutModalOpen(false);
  };
  const handleLogoutCancel = () => {
    setIsLogoutModalOpen(false);
  };
  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div
          className={`logo flex justify-center h-[56px] my-4 transition-opacity duration-500 `}
        >
          {collapsed ? (
            // <img src="/logo-single.svg" alt="logo" className="" />
            <span
              style={{ color: "#fff", fontSize: "30px", fontWeight: "bold" }}
            >
              C
            </span>
          ) : (
            <img src="/lightLogo.png" alt="logo" className="" />
          )}
        </div>
        <Menu theme="dark" defaultSelectedKeys={"auto"} mode="inline">
          <Menu.Item key="1" icon={<TransactionOutlined />}>
            <Link to="/dashboard">Dashboard </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />}>
            <Link to="/manage-category">Manage Category</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<QuestionCircleOutlined />}>
            <Link to="/manage-media-blog">Manage Media/Blog</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            <Link to="/manage-athlete">Manage Athlete</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UserSwitchOutlined />}>
            <Link to="/manage-college">Manage Colleges</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UserSwitchOutlined />}>
            <Link to="/manage-coach">Manage Coach</Link>
          </Menu.Item>
          <SubMenu key="7" icon={<UsergroupAddOutlined />} title="CMS">
            <Menu.Item key="11">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="8" icon={<CalendarOutlined />}>
            <Link to="/manage-subscription-plan">Manage Subscription Plan</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<WechatOutlined />}>
            <Link to="/view-report-details">View Report Details</Link>
          </Menu.Item>
          <SubMenu
            key="10"
            icon={<UsergroupAddOutlined />}
            title="Account settings"
          >
            <Menu.Item key="21">
              <Link to="/manage-profile">Manage Profile</Link>
            </Menu.Item>
            <Menu.Item key="22">
              <Link onClick={showChangePasswordModal}>Change Password</Link>
            </Menu.Item>
            <Menu.Item key="23">
              <Link onClick={showLogoutModal}>Logout</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <div className="absolute top-[14px] right-[-42px] text-black text-xl">
          {collapsed ? (
            <MenuUnfoldOutlined
              className="toggle-icon"
              onClick={toggleCollapsed}
            />
          ) : (
            <MenuFoldOutlined
              className="toggle-icon"
              onClick={toggleCollapsed}
            />
          )}
        </div>
      </Sider>
      <ChangePassword
        isOpen={isChangePasswordModalOpen}
        onOk={handleChangePasswordOk}
        onCancel={handleChangePasswordCancel}
      />
      <ConfirmationModal
        ConfirmationHeading="Logout"
        ConfirmationParagraph="Are you sure you want to logout?"
        isOpen={isLogoutModalOpen}
        onOk={handleLogoutOk}
        onCancel={handleLogoutCancel}
      />
    </>
  );
};
export default LeftSidebar;