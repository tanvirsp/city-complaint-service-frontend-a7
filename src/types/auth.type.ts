export interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface IVerifyAccountPayload {
  email: string;
  otp: string;
}
