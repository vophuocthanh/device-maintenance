import LayoutDesktop from '@/layout/common/layout-desktop/layout-desktop';
import LayoutMobile from '@/layout/common/layout-mobile/layout-mobile';
import LayoutTablets from '@/layout/common/layout-tablet/layout-tablet';
import { authActions } from '@/redux/auth-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAppWidth } from '@/redux/store/app-slice';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function LayoutPublic() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const [isSelect, setIsSelect] = useState<string>('');
  const appWidth = useAppSelector(selectAppWidth);
  useEffect(() => {
    switch (pathname) {
      case '/home':
        setIsSelect('1');
        break;
      case '/manufacture':
        setIsSelect('2');
        break;
      case '/seek_an_origin':
        setIsSelect('3');
        break;
      case '/check_product_quality':
        setIsSelect('4');
        break;
      case '/maintenance':
        setIsSelect('5');
        break;
      case '/storage':
        setIsSelect('6');
        break;
      default:
        setIsSelect('7');
        break;
    }
  }, [pathname]);
  useEffect(() => {
    dispatch(authActions.fetchUserInfo());
  }, [dispatch]);

  return (
    <>
      {appWidth === 'xs' ? (
        <LayoutMobile />
      ) : appWidth === 'xl' || appWidth === 'xxl' ? (
        <LayoutDesktop isSelect={isSelect} />
      ) : (
        <LayoutTablets isSelect={isSelect} />
      )}
    </>
  );
}
