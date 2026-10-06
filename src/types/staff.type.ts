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
