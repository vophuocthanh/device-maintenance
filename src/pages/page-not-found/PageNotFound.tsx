import { page_not_found } from '@/assets/image';
import { useEffect } from 'react';
import { history } from '../../utils';
function Page404() {
  useEffect(() => {
    const timer = setTimeout(() => {
      history.back();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className='flex items-center justify-center w-full h-full overflow-hidden'>
      <img alt={'error'} src={page_not_found} width={'100%'} height={'auto'} />
    </div>
  );
}

export default Page404;
