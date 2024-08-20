export interface ListResponse<T> {
  data: T[];
  total_elements: number;
  totalPages: number;
  hasNext: boolean;
}

export interface User {
  id: string;
  name?: string;
  login?: string;
  lang?: string;
  loginDate?: boolean;
  state?: string;
  companyID: string[];
}
export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: 'asc' | 'desc';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface typeItemSidebar {
  parent: string | null;
  child: string | null;
}

export interface basicInfo {
  address?: string;
  descriptions?: string;
  phone?: string;
  image?: string;
}

export interface ResponseData {
  ts: number;
  value: string | number | boolean;
}

export interface ObjectResponse {
  [key: string]: ResponseData[];
}

export interface entityType {
  key: string;
  value: string;
}
export interface storageRoleSetting {
  roleId: string;
  roleTitle: string;
  description: string;
  roleState: boolean;
  children: ListResponse<storageRoleSetting>[];
}
