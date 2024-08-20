import axiosClient from '@/apis/axios-client';
import {
  Account,
  DataElement,
  LoginResponse,
  UserInfo,
} from '@/shared/interface/user';
import { ListResponse } from './../models/common';

export const authApi = {
  login(params: Account): Promise<LoginResponse> {
    const url = '/api/auth/login';
    return axiosClient.post(url, params);
  },
  getUserInfo(): Promise<UserInfo> {
    const url = '/api/auth/current_user';
    return axiosClient.get(url);
  },
  getUserRoles(): Promise<ListResponse<DataElement>> {
    const url = `/api/auth/view`;
    return axiosClient.get(url);
  },
};
