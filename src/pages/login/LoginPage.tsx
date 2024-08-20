import { bg_login } from '@/assets/image';
import {
  authActions,
  selectError,
  selectLoginLoading,
} from '@/redux/auth-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Form, Input, Spin } from 'antd';
import { Link } from 'react-router-dom';
const LoginPages = () => {
  const loginState = useAppSelector(selectError);
  const [form] = Form.useForm();
  const spinning = useAppSelector(selectLoginLoading);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loginUser = (values: any): void => {
    dispatch(authActions.login(values));
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBgContainer: 'transparent',
            colorText: '#fff',
            colorIcon: '#fff',
            colorTextBase: '#fff',
            colorBgBase: 'rgba(255, 255, 255, 0.03);',
            colorTextPlaceholder: '#979797',
          },
          Button: {
            lineHeight: 2.2,
          },
        },
      }}
    >
      <div
        className='relative flex flex-row items-center justify-start w-auto h-screen gap-6 px-6 bg-center bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${bg_login})` }}
      >
        <Spin
          spinning={spinning}
          fullscreen
          indicator={
            <LoadingOutlined color='#ffffff' className='text-5xl' spin />
          }
        />
        <div className='flex flex-col items-start w-1/3 gap-12 p-6 bg-black rounded-lg bg-opacity-30 backdrop-blur-sm'>
          <h1 className='text-4xl font-bold text-white'>Demo Maintenance</h1>
          <Form
            form={form}
            name='normal_login'
            className='w-full'
            style={{ height: 'calc(100% - 125px)' }}
            initialValues={{
              remember: true,
              username: 'mes_dev@iotmind.vn',
              password: '123456',
            }}
            onFinish={(values) => loginUser(values)}
            layout='vertical'
          >
            <Form.Item
              name='username'
              rules={[
                { required: true, message: 'Please input your username' },
              ]}
              className='py-3'
            >
              <Input size='large' placeholder='Username' />
            </Form.Item>
            <Form.Item
              name='password'
              className='py-3'
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input.Password
                type='password'
                size='large'
                placeholder='Password'
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    form.submit();
                  }
                }}
              />
            </Form.Item>
          </Form>
          <Button
            className='flex items-center justify-center w-full font-semibold text-white bg-blue-500 border-0 hover:bg-blue-700'
            onClick={() => form.submit()}
            type='primary'
            size={'large'}
          >
            ĐĂNG NHẬP
          </Button>
          <a className='text-red-500'>{loginState ?? loginState}</a>
          <div className='flex items-center justify-center w-full h-12 text-white'>
            Don't have account?&ensp;
            <Link className='text-blue-500 no-underline' to=''>
              <span>Register here!</span>
            </Link>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default LoginPages;
