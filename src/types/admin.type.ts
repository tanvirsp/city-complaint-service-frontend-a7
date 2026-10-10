import { IStaff } from "./complaint.type";

export interface IServiceRequestItem {
  id: string;
  title: string;
  description: null | string;
  address: string;
  contactNumber: string;
  status: string;
  paymentStatus: string;
  userId: string;
  serviceId: string;
  staffId: null | string;
  serviceFee: string;
  createdAt: string;
  updatedAt: string;
  staff: null | IStaff;
  user: User;
}

export interface User {
  id: string;
  name: string;
  email: string;
  googleId: null | string;
  authProvider: string;
  emailVerified: boolean;
  role: string;
  status: string;
  imageUrl: string;
  imagePublicId: string;
  isDeleted: boolean;
  deletedAt: null | string;
  createdAt: string;
  updatedAt: string;
}

export interface IStaffPayload {
  name: string;
  email: string;
  address?: string;
  categoryId: string;
  experienceYears: number;
  bio?: string;
  contactNumber: string;
}
