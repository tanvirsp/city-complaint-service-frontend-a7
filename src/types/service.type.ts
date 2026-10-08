export interface ServiceItem {
  id: string;
  name: string;
  des: null | string;
  serviceFee: number;
  createdAt: string;
  updatedAt: string;
}

export interface IUpdateService {
  serviceId: string;
  name: string;
  serviceFee: number;
}
