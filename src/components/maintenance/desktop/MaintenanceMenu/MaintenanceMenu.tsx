import { getItem } from '@/utils/menuSetup';
import { Menu, MenuProps } from 'antd';
import { MdPunchClock, MdWarehouse } from 'react-icons/md';
type Props = {
  current: string;
  setCurrent: (text: string) => void;
};
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  getItem('Đang thực hiện', '1', <MdWarehouse />),
  getItem('Đã hoàn thành', '2', <MdPunchClock />),
];

const MaintenanceMenu = ({ current, setCurrent }: Props) => {
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className='h-full overflow-y-auto'>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={[current]}
        mode='inline'
        items={items}
      />
    </div>
  );
};

export default MaintenanceMenu;
