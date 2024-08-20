import IconList from '@/components/common/icon-list';
import { Table } from 'antd';
import { useEffect } from 'react';

const DashboardStorage = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {};

  return (
    <div className='w-full h-full p-3 gap-3 flex flex-col items-start bg-[#F5F6FA]'>
      <div className='min-h-[40px] max-h-[72px] my-1.5 flex justify-between items-center w-full'>
        <div className='text-2xl font-bold text-center text-black'>
          TỔNG QUAN
        </div>
      </div>
      <div className='flex flex-col flex-1 gap-3'>
        <div className='flex flex-col gap-3 overflow-scroll bg-white rounded-lg shadow-lg scrollbar-none'>
          <div className='flex items-center gap-1'>
            <IconList.TableIcon color='#096DD9' size={24} />
            <div className='text-[#096DD9] text-base font-normal'>
              Yêu cầu mua hàng
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3 overflow-scroll bg-white rounded-lg shadow-lg scrollbar-none'>
          <div className='flex items-center gap-1'>
            <IconList.TableIcon color='#096DD9' size={24} />
            <div className='text-[#096DD9] text-base font-normal'>
              Xác nhận nhập xuất kho
            </div>
          </div>
          <div className='flex-1'>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStorage;
