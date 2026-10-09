import { ComplaintPriarity, ComplaintStatus } from "./complaint.type";

export interface IMyComplaintItem {
  id: string;
  title: string;
  categoryId: string;
  description: string;
  location: string;
  priority: ComplaintPriarity;
  status: ComplaintStatus;
  beforeImageUrl?: string;
  beforeImagePublicId?: string;
  afterImageUrl?: string;
  afterImagePublicId?: string;
  rejectReason: null | string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  staffId: null | string;
  staff: Staff | null;
}

export interface Staff {
  id?: string;
  name?: string;
  email?: string;
  address?: string;
  categoryId?: string;
  experienceYears?: number;
  contactNumber?: string;
}

export interface MyComplaintParams {
  page?: number;
  limit?: number;
  searchTerm?: string;
  status?: ComplaintStatus;
}
