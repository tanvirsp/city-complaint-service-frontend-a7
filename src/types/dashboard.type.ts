export interface IAdminData {
  totalUser: number;
  totalStaff: number;
  totalServices: number;
  totalComplaint: number;
  totalServiceRequest: number;
  totalPendingComplaintRequest: number;
  totalPendingServiceRequest: number;
}

export interface IStaffDashboardData {
  totalAssignComplaint: number;
  totalAssignService: number;
  totalCompleteAssignComplaint: number;
  totalCompleteAssignService: number;
}

export interface ICitizenDashboardData {
  totalComplaint: number;
  totalServiceRequest: number;
}
