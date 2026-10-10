import { ComplaintPriarity, ComplaintStatus } from "./complaint.type";

export type PaymentStatus =
  | "UNPAID"
  | "PAID"
  | "FAILED"
  | "CANCELLED"
  | "REFUNDED";

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

export interface IMyRequestServiceItem {
  id: string;
  title: string;
  description: null | string;
  address: string;
  contactNumber: string;
  status: ComplaintStatus;
  paymentStatus: PaymentStatus;
  userId: string;
  serviceId: string;
  staffId: null | string;
  serviceFee: string;
  createdAt: string;
  updatedAt: string;
  staff: null | Staff;
}

export interface IRequestServiceDetails {
  id: string;
  title: string;
  description: null | string;
  address: string;
  contactNumber: string;
  status: ComplaintStatus;
  paymentStatus: PaymentStatus;
  userId: string;
  serviceId: string;
  staffId: null | string;
  serviceFee: string;
  createdAt: string;
  updatedAt: string;
  staff: null | Staff;
  service: IService;
  payment: IPayment;
}

export interface IService {
  id: string;
  name: string;
  description?: string;
  serviceFee: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPayment {
  id: string;
  serviceRequestId: string;
  userId: string;
  amount: string;
  currency: string;
  provider: string;
  paymentMethod: string;
  transactionId: string;
  valId: string;
  status: PaymentStatus;
  gatewayResponse: null | JSON;
  paidAt: string;
  refundTrxId: null | string;
  refundAmount: null | string;
  refundReason: null | string;
  refundedAt: null | string;
  createdAt: string;
  updatedAt: string;
}

export interface IServiceRequestPayload {
  serviceId: string;
  title: string;
  address: string;
  contactNumber: string;
  description: string;
}
