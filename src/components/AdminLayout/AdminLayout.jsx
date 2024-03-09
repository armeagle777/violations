import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { ToastContainer } from 'react-toastify';
import { Button, Layout, theme } from 'antd';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;

import { SideMenu } from '@/components';

import './AdminLayout.scss';
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = ({ handleThemeChange, isDarkMode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <SideMenu isDarkMode={isDarkMode} collapsed={collapsed} />
      <Layout style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '8px',
              width: 64,
              height: 64,
              outline: 'none',
              border: 'none',
            }}
          />
          {/* <Menu
            theme={isDarkMode ? 'dark' : 'light'}
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          /> */}
          <Button
            ghost
            type="primary"
            style={{ outline: 'none', border: 'none' }}
            icon={isDarkMode ? <BsSunFill /> : <BsMoonFill />}
            onClick={handleThemeChange}
          />
          <ToastContainer
            draggable
            newestOnTop
            pauseOnHover
            closeOnClick
            rtl={false}
            autoClose={1000}
            position="top-right"
            hideProgressBar={false}
            pauseOnFocusLoss={false}
            theme={isDarkMode ? 'dark' : 'light'}
          />
        </Header>
        <Content
          style={{
            margin: '8px',
            padding: isMobile ? '36px 0' : '36px 24px',
            minHeight: 280,
            background: colorBgContainer,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
