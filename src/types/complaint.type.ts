import { UserRole, UserStatus } from "./user.type";

export type ComplaintPriarity = "LOW" | "MEDIUM" | "HIGH";

export type ComplaintStatus =
  | "PENDING"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "RESOLVED"
  | "REJECTED";

export type CategoryType = "COMPLAINT" | "SERVICE";

export interface Complaint {
  id: string;
  title: string;
  categoryId: string;
  description: string;
  location: string;
  priority: ComplaintPriarity;
  status: ComplaintStatus;
  beforeImageUrl: null | string;
  beforeImagePublicId: null | string;
  afterImageUrl: null | string;
  afterImagePublicId: null | string;
  rejectReason: null | string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  staffId: null | string;
  staff?: IStaff;
  user: IUser;
  category: ICategory;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  googleId: null | string;
  authProvider: string;
  emailVerified: boolean;
  role: UserRole;
  status: UserStatus;
  imageUrl: null | string;
  imagePublicId: null | string;
  isDeleted: boolean;
  deletedAt: null | string;
  createdAt: string;
  updatedAt: string;
}

export interface IStaff {
  id: string;
  name: string;
  email: string;
  address: null | string;
  categoryId: string;
  experienceYears: number;
  bio: null | string;
  contactNumber: null | string;
  isDeleted: boolean;
  deletedAt: null | string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface ICategory {
  id: string;
  name: string;
  type: CategoryType;
  createdAt: string;
  updatedAt: string;
}

export interface IComplaintParams {
  status?: ComplaintStatus;
  page?: number;
  limit?: number;
}

export interface IAssignStaffToComplaint {
  complaintId: string;
  staffId: string;
}
