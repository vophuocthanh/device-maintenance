import { LoginResponse } from '@/shared/interface/user';

export const getLocalRefreshToken = () => {
  const token = window.localStorage.getItem('refresh_token');
  return token;
};
export const updateLocalAccessToken = (res: LoginResponse) => {
  localStorage.setItem('access_token', res.access_token);
  localStorage.setItem('refresh_token', res.refresh_token);
};
