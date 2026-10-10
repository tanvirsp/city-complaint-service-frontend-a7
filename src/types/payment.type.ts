import { ComplaintStatus } from "./complaint.type";

export type PaymentStatus =
  | "UNPAID"
  | "PAID"
  | "FAILED"
  | "CANCELLED"
  | "REFUNDED";

export interface IPaymentDetails {
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
  serviceRequest: ServiceRequest;
}

export interface ServiceRequest {
  id: string;
  title: string;
  description: null | string;
  address: string;
  contactNumber: string;
  status: ComplaintStatus;
  paymentStatus: string;
  userId: string;
  serviceId: string;
  staffId: null | string;
  serviceFee: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPaymentParams {
  status?: PaymentStatus;
  page?: number;
  limit?: number;
}
