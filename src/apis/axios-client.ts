import HttpStatusCode from '@/constants/http';
import { getLocalRefreshToken, updateLocalAccessToken } from '@/lib/storage';
import { LoginResponse } from '@/shared/interface/user';
import { history } from '@/utils';
import axios, { AxiosResponse } from 'axios';
const baseURL = import.meta.env.VITE_API_APP;

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (config: any) {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  async function (error) {
    const originalConfig = error.config;
    if (error.response.status === HttpStatusCode.Unauthorized) {
      try {
        const url = `${originalConfig.baseURL}/api/auth/token`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result: any = await getLocalRefreshToken();
        const rs: LoginResponse = await axios.post(url, {
          refresh_token: result,
        });
        updateLocalAccessToken(rs.data);
        return axiosClient(originalConfig);
      } catch (_error) {
        localStorage.clear();
        history.push('/');
        return Promise.reject(_error);
      }
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
