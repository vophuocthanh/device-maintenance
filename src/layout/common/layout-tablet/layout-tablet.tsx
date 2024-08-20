import { authActions } from '@/redux/auth-slice';
import { useAppDispatch } from '@/redux/hooks';
import { history } from '@/utils';
import { colorBgSiderStyle } from '@/utils/style';
import { ContainerOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Layout,
  Menu,
  MenuProps,
  Modal,
  Popconfirm,
  Popover,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { FaHome, FaRegUserCircle } from 'react-icons/fa';
import { GiFactory } from 'react-icons/gi';
import {
  MdAccountCircle,
  MdInfo,
  MdLogout,
  MdOutlineHomeWork,
  MdPassword,
} from 'react-icons/md';
import { Outlet } from 'react-router-dom';

type Props = {
  isSelect: string;
};

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Trang chủ', '1', <FaHome />),
  getItem('Sản xuất', '2', <GiFactory />),
  getItem('Bảo trì', '3', <ContainerOutlined />),
  getItem('Kho', '4', <MdOutlineHomeWork />),
];

const LayoutTablets = (props: Props) => {
  const dispatch = useAppDispatch();
  const { Content, Sider } = Layout;
  const { isSelect } = props;
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [showUserData, setShowUserData] = useState(false);
  const [isChangePasswordModal, setisChangePasswordModal] = useState(false);
  const [isHidePassword, setisHidePassword] = useState<boolean>(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setWidth(window.innerWidth * 0.7);
      setHeight(window.innerHeight * 0.8);
    };
    window.addEventListener('resize', updateHeight);
    updateHeight();
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const onClick: MenuProps['onClick'] = (e) => {
    switch (e.key) {
      case '1':
        history.push('/home');
        break;
      case '2':
        history.push('/manufacture');
        break;
      case '3':
        history.push('/maintenance');
        break;
      default:
        history.push('/storage');
        break;
    }
  };

  return (
    <Layout className='flex'>
      <Sider
        width={220}
        collapsedWidth={54}
        collapsible
        style={{ background: colorBgSiderStyle }}
        className='bg-gray-800'
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='flex items-center justify-between p-4'>
          <img
            alt='error'
            src='https://images.unsplash.com/photo-1534238151781-c62af32c97a0?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='w-10 h-auto'
          />
          {!collapsed && (
            <div className='font-semibold text-white'>Demo Maintenance</div>
          )}
        </div>
        <div className='mt-4'>
          <Menu
            theme='dark'
            mode='inline'
            selectedKeys={[isSelect]}
            items={items}
            onClick={onClick}
          />
          <div className='p-4 pt-2'></div>
        </div>
        <div className='absolute bottom-0 w-full p-4'>
          <Popover
            content={
              <div className='flex flex-col'>
                <Button
                  className='flex items-center p-2 space-x-2'
                  onClick={() => setShowUserData(!showUserData)}
                >
                  <MdInfo size={16} />
                  <span>Thông tin người dùng</span>
                </Button>
                <Button
                  className='flex items-center p-2 space-x-2'
                  onClick={() =>
                    setisChangePasswordModal(!isChangePasswordModal)
                  }
                >
                  <MdPassword size={16} />
                  <span>Đổi mật khẩu</span>
                </Button>
                <Popconfirm
                  title='Xác nhận đăng xuất ?'
                  description='Bạn có muốn đăng xuất khỏi ứng dụng'
                  onConfirm={() => dispatch(authActions.logout())}
                  icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                >
                  <Button className='flex items-center p-2 space-x-2'>
                    <MdLogout size={16} />
                    <span>Đăng xuất</span>
                  </Button>
                </Popconfirm>
              </div>
            }
          >
            <FaRegUserCircle color='#fff' size={18} />
          </Popover>
        </div>
      </Sider>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemColor: '#434343',
              itemMarginBlock: 0,
              itemBorderRadius: 0,
              borderRadius: 0,
              subMenuItemBorderRadius: 0,
              subMenuItemBg: '#E9F4FF',
              fontWeightStrong: 600,
              itemSelectedBg: '#1890FF',
              itemSelectedColor: '#fff',
              groupTitleColor: 'red',
            },
          },
        }}
      >
        <Layout className='flex-1 p-2'>
          <Content className='p-4'>
            <Outlet />
          </Content>
        </Layout>
      </ConfigProvider>
      <Modal
        title={
          <div className='flex items-center space-x-2'>
            <MdPassword size={16} />
            <span>Đổi mật khẩu</span>
          </div>
        }
        open={isChangePasswordModal}
        onCancel={() => setisChangePasswordModal(!isChangePasswordModal)}
      >
        <Form labelAlign='left'>
          <Form.Item label='Mật khẩu cũ' labelCol={{ span: 8 }}>
            <Input.Password visibilityToggle={{ visible: isHidePassword }} />
          </Form.Item>
          <Form.Item label='Mật khẩu mới' labelCol={{ span: 8 }}>
            <Input.Password visibilityToggle={{ visible: isHidePassword }} />
          </Form.Item>
          <Form.Item label='Xác nhận mật khẩu mới' labelCol={{ span: 8 }}>
            <Input.Password visibilityToggle={{ visible: isHidePassword }} />
          </Form.Item>
          <a onClick={() => setisHidePassword(!isHidePassword)}>
            {!isHidePassword ? 'Hiển thị mật khẩu' : 'Ẩn mật khẩu'}
          </a>
        </Form>
      </Modal>
      <Modal
        width={width}
        style={{ height }}
        title={
          <div className='flex items-center space-x-2'>
            <MdAccountCircle size={16} />
            <span>Thông tin người dùng:</span>
          </div>
        }
        open={showUserData}
        onCancel={() => setShowUserData(!showUserData)}
      >
        {/* <BasicInfo /> */}
      </Modal>
    </Layout>
  );
};

export default LayoutTablets;
