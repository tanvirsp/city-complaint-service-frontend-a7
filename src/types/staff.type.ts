import { ICategory, IUser } from "./complaint.type";

export interface IStaffData {
  id: string;
  name: string;
  email: string;
  address: string;
  categoryId: string;
  experienceYears: number;
  bio: null | string;
  contactNumber: null | string;
  isDeleted: boolean;
  deletedAt: null | string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  category: ICategory;
  user: IUser;
}

export interface IStaffServiceRequestItem {
  id: string;
  title: string;
  description: null | string;
  address: string;
  contactNumber: string;
  status: string;
  paymentStatus: string;
  userId: string;
  serviceId: string;
  staffId: string;
  serviceFee: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

interface User {
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

export interface IStaffComplaintItem {
  id: string;
  title: string;
  categoryId: string;
  description: string;
  location: string;
  priority: string;
  status: string;
  beforeImageUrl: string;
  beforeImagePublicId: string;
  afterImageUrl: string;
  afterImagePublicId: string;
  rejectReason: null | string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  staffId: string;
  user: User;
  category: Category;
}

interface Category {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export type Priority = "LOW" | "MEDIUM" | "HIGH";

export interface StaffParamsWithStatus {
  page?: number;
  limit?: number;
  searchTerm?: string;
  priority?: Priority;
}
