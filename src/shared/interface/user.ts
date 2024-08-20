export interface UserInfo {
  id?: string;
  user_id: string;
  username?: string;
  name?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  create_time?: number;
  role: { id: string; name: string };
  access_rights?: Array<AccessRight> | null;
}
export interface UploadRoles {
  user_id: string;
  Right: Array<{
    routing_id: string;
    roles: boolean;
  }>;
}
export interface AccessRight {
  id: string;
  name: string;
  methods: string;
  key: string;
  roles: boolean;
}
export interface FakeUser {
  firstname: string;
  lastname: string;
  image: string;
  job: string;
  address: string;
  isManager: boolean;
  email: string | undefined;
  phone: string | undefined;
}

export interface LoginResponse {
  access_token: string;
  refreshToken: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface Account {
  username: string;
  password: string;
}
export interface UserTableData {
  state: boolean;
  id: string;
  image: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  department: string;
  position: string;
}
export interface Employeer {
  id: string;
  activity_state: boolean;
  image_128: string;
  name: string;
  job_title: string;
  work_email: string;
  work_phone: string;
}
export interface EmployeeData extends Employeer {
  gender: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  birthday: any;
  department_id: Array<number | string>;
  first_contract_date: string;
  attendance_state: string;
  parent: Array<number | string>;
  coach_id: Array<number | string>;
  expense_manager: Array<number | string>;
  leave_manager: Array<number | string>;
  bank_account_id: Array<number | string>;
  identification_id: string;
  passport_id: string;
  place_of_birth: string;
  emergency_contact: string;
  emergency_phone: string;
  visa_no: string;
  permit_no: string;
  visa_expire: string;
  work_permit_expiration_date: string;
  certificate: string;
  study_field: string;
  study_school: string;
  pin: string;
  barcode: string;
  contract_id: Array<number | string>;
  address_home_id: Array<number | string>;
  company_id: Array<number | string>;
  job_id: Array<number | string>;
  company_country_id: Array<number | string>;
}
export interface DataElement {
  methods?: string;
  key?: string;
  name: string;
  fun?: string;
  child?: DataElement[];
}

export interface RootRoles {
  name: string;
  child: DataElement[];
}
