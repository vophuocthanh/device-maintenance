// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group'
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Tổng quan', '1', <RiDashboardLine />),
//   getItem('Hoạt động', 'sub1', <GrTransaction />, [
//     getItem('Nhận hàng', '2', <TbTransferIn />),
//     getItem('Điều chuyển', '3', <TbTransfer />),
//     getItem('Giao hàng', '4', <TbTransferOut />),
//     getItem('Đóng gói', '5', <FiPackage />),
//     getItem('Bổ sung', '8', <GrTableAdd />),
//     getItem('Kiểm kê kho', '9', <TbBuildingWarehouse />),
//     getItem('Phế liệu', '10', <HiArchiveBoxXMark />),
//   ]),

//   getItem('Sản phẩm', 'sub2', <RiProductHuntLine />, [
//     getItem('Sản phẩm', '11', <RiProductHuntLine />),
//     getItem('Biến thể Sản phẩm', '12', <FaRegClone />),
//     getItem('Số lô/ sê ri', '13', <FaBarcode />),
//     getItem('Gói hàng', '14', <VscPackage />),
//   ]),
//   getItem('Báo cáo', 'sub3', <HiOutlineDocumentReport />, [
//     getItem('Tồn kho', '15', <MdOutlineInventory2 />),
//     getItem('Truy vết', '16', <TbListSearch />),
//   ]),
//   getItem('Cấu hình', 'sub4', <GrConfigure />, [
//     getItem('Quản lý kho', 'sub5', <MdOutlineHomeWork />, [
//       getItem('Kho hàng', '17', <MdOutlineHomeWork />),
//       getItem('Địa điểm', '18', <SlLocationPin />),
//     ]),
//     // getItem('Sản phẩm', 'sub6', <RiProductHuntLine />, [
//     //   getItem('Nhóm sản phẩm', '19', <SiPiaggiogroup />),
//     //   getItem('Thuộc tính', '20', <LuTableProperties />),
//     //   getItem('Đóng gói sản phẩm', '21', <LuPackageOpen />),
//     //   getItem('Quy tắc cái cung ứng', '22', <MdRule />),
//     // ]),
//     // getItem('Đơn vị tính', 'sub7', <FaUnity />, [
//     //   getItem('Nhóm đơn vị', '23', <FaLayerGroup />)]),
//     getItem('Giao hàng', 'sub8', <TbTruckDelivery />, [
//       getItem('Loại kiện hàng', '24', <TbPackageExport />),
//     ]),
//   ]),
//   getItem('Sơ đồ bố trí', '25', <FaMapMarkedAlt />),
// ];

const StorageMenu = () => {
  // const currentKeys = useAppSelector(selectStoragePages);
  // const onClick: MenuProps['onClick'] = (e) => {
  //   dispatch(storageActions.setStoragePages(e.key));
  // };

  return (
    <div className='h-full overflow-y-auto'>
      {/* <Menu onClick={onClick} defaultSelectedKeys={[currentKeys]} mode="inline" items={items} /> */}
    </div>
  );
};

export default StorageMenu;
