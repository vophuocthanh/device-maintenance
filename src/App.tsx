import { useAppDispatch } from '@/redux/hooks';
import { appAction } from '@/redux/store/app-slice';
import { ConfigProvider, Grid } from 'antd';
import { useLayoutEffect } from 'react';
import DomRouter from './route/DomRouter';
const { useBreakpoint } = Grid;
function App() {
  const screens = useBreakpoint();
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    const newArray = Object.entries(screens).filter((screen) => !!screen[1]);
    if (newArray.length !== 0) {
      dispatch(appAction.setAppWidth(newArray[newArray.length - 1][0]));
    }
  }, [screens, dispatch]);

  return (
    <div className='App'>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: '#B5DCFF',
            },
            List: {
              itemPadding: '0px',
              itemPaddingLG: '0px',
            },
          },
        }}
      >
        <DomRouter />
      </ConfigProvider>
    </div>
  );
}

export default App;
