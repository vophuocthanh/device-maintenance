import { logo } from '@/assets/image';
import { authActions } from '@/redux/auth-slice';
import { useAppDispatch } from '@/redux/hooks';
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
import { history } from '../../../utils';
import { colorBgSiderStyle } from '../../../utils/style';

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
  getItem('Khu vực', '2', <GiFactory />),
  getItem('Thiết bị', '3', <ContainerOutlined />),
  getItem('Quy trình', '4', <MdOutlineHomeWork />),
  getItem('Cảnh báo', '5', <MdOutlineHomeWork />),
  getItem('Báo cáo', '6', <MdOutlineHomeWork />),
  getItem('Bảo trì', '7', <MdOutlineHomeWork />),
];

const LayoutDesktop = (props: Props) => {
  const dispatch = useAppDispatch();
  const { Content, Sider } = Layout;
  const { isSelect } = props;
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [showUserData, setShowUserData] = useState(false);
  const [isChangePasswordModal, setisChangePasswordModal] = useState(false);
  const [isHidePassword, setisHidePassword] = useState<boolean>(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string>(isSelect);

  useEffect(() => {
    const updateHeight = () => {
      setWidth(window.innerWidth * 0.7);
      setHeight(window.innerHeight * 0.8);
    };
    window.addEventListener('resize', updateHeight);
    updateHeight();
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case '/home':
        setSelectedKey('1');
        break;
      case '/area':
        setSelectedKey('2');
        break;
      case '/device':
        setSelectedKey('3');
        break;
      case '/procedure':
        setSelectedKey('4');
        break;
      case '/alert':
        setSelectedKey('5');
        break;
      case '/report':
        setSelectedKey('6');
        break;
      case '/maintenance':
        setSelectedKey('7');
        break;
      default:
        setSelectedKey('1');
        break;
    }
  }, []);

  const onClick: MenuProps['onClick'] = (e) => {
    setSelectedKey(e.key);
    switch (e.key) {
      case '1':
        history.push('/home');
        break;
      case '2':
        history.push('/area');
        break;
      case '3':
        history.push('/device');
        break;
      case '4':
        history.push('/procedure');
        break;
      case '5':
        history.push('/alert');
        break;
      case '6':
        history.push('/report');
        break;
      case '7':
        history.push('/maintenance');
        break;
      default:
        history.push('/home');
        break;
    }
  };

  return (
    <Layout className='flex min-h-screen'>
      <Sider
        width={'220px'}
        collapsedWidth={'54px'}
        collapsible
        style={{ background: colorBgSiderStyle }}
        className={`transition-all duration-300 ${
          collapsed ? 'w-[54px]' : 'w-[220px]'
        }`}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className='flex items-center justify-between p-4'>
          <img alt={'error'} src={logo} height={'auto'} width={'40px'} />
          {!collapsed && (
            <div className='text-sm font-bold text-white'>Demo Maintenance</div>
          )}
        </div>
        <div className='flex-1'>
          <Menu
            theme='dark'
            mode='inline'
            selectedKeys={[selectedKey]}
            items={items}
            onClick={onClick}
          />
          <div className='flex p-4 pt-2'></div>
        </div>
        <div className='absolute w-full p-4 border-t border-gray-700 bottom-14'>
          <Popover
            content={
              <div className='space-y-2'>
                <Button
                  className='flex items-center space-x-2'
                  onClick={() => {
                    setShowUserData(!showUserData);
                  }}
                >
                  <MdInfo size={16} />
                  <span>Thông tin người dùng</span>
                </Button>
                <Button
                  className='flex items-center space-x-2'
                  onClick={() => {
                    setisChangePasswordModal(!isChangePasswordModal);
                  }}
                >
                  <MdPassword size={16} />
                  <span>Đổi mật khẩu</span>
                </Button>
                <Popconfirm
                  title='Xác nhận đăng xuất ?'
                  description='Bạn có muốn đăng xuất khỏi ứng dụng'
                  onConfirm={() => {
                    dispatch(authActions.logout());
                  }}
                  icon={
                    <QuestionCircleOutlined
                      style={{
                        color: 'red',
                      }}
                    />
                  }
                >
                  <Button className='flex items-center space-x-2'>
                    <MdLogout size={16} />
                    <span>Đăng xuất</span>
                  </Button>
                </Popconfirm>
              </div>
            }
          >
            <FaRegUserCircle className='text-white' size={18} />
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
        <Layout className='p-2.5'>
          <Content className='p-4 bg-white rounded-md shadow-md'>
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
            <Input.Password
              visibilityToggle={{ visible: isHidePassword }}
            ></Input.Password>
          </Form.Item>
          <Form.Item label='Mật khẩu mới' labelCol={{ span: 8 }}>
            <Input.Password
              visibilityToggle={{ visible: isHidePassword }}
            ></Input.Password>
          </Form.Item>
          <Form.Item label='Xác nhận mật khẩu mới' labelCol={{ span: 8 }}>
            <Input.Password
              visibilityToggle={{ visible: isHidePassword }}
            ></Input.Password>
          </Form.Item>
          <a
            className='text-blue-500 cursor-pointer'
            onClick={() => setisHidePassword(!isHidePassword)}
          >
            {!isHidePassword ? 'Hiển thị mật khẩu' : 'Ẩn mật khẩu'}
          </a>
        </Form>
      </Modal>
      <Modal
        width={`${width}px`}
        style={{ height: height }}
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

export default LayoutDesktop;
