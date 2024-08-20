import { Navigate } from 'react-router-dom';
import LayoutPublic from '../../layout/common/layout-public/layout-public';

const PrivateRouter = () => {
  const isLog = Boolean(localStorage.getItem('access_token'));
  return !isLog ? <Navigate to='/' /> : <LayoutPublic />;
};

export default PrivateRouter;
