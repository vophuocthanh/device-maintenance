import Page404 from '@/pages/page-not-found/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import AlertPage from '../pages/alert/AlertPage';
import AreaPage from '../pages/area/AreaPage';
import DevicePage from '../pages/device/DevicePage';
import Home from '../pages/home/Home';
import LoginPages from '../pages/login/LoginPage';
import Maintenance from '../pages/maintenance/Maintenance';
import ProcedurePage from '../pages/procedure/ProcedurePage';
import ReportPage from '../pages/report/ReportPage';
import PrivateRouter from './private-router/private-router';

export default function DomRouter() {
  return (
    <Routes>
      <Route path='/' element={<LoginPages />} />
      <Route element={<PrivateRouter />}>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/area' element={<AreaPage />}></Route>
        <Route path='/device' element={<DevicePage />}></Route>
        <Route path='/maintenance' element={<Maintenance />}></Route>
        <Route path='/procedure' element={<ProcedurePage />}></Route>
        <Route path='/alert' element={<AlertPage />}></Route>
        <Route path='/report' element={<ReportPage />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Route>
    </Routes>
  );
}
