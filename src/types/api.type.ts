export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    data: T;
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}
