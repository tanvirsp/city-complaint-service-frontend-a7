import { UserRole, UserStatus } from "./user.type";

export type ComplaintPriarity = "LOW" | "MEDIUM" | "HIGH";

export type ComplaintStatus =
  | "PENDING"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "RESOLVED"
  | "REJECTED";

export type Priority = "LOW" | "MEDIUM" | "HIGH";
export type CategoryType = "COMPLAINT" | "SERVICE";

export interface Complaint {
  id: string;
  title: string;
  categoryId: string;
  description: string;
  location: string;
  priority: Priority;
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
  staff?: Staff;
  user: User;
  category: Category;
}

export interface User {
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

export interface Staff {
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

export interface Category {
  id: string;
  name: string;
  type: CategoryType;
  createdAt: string;
  updatedAt: string;
}
