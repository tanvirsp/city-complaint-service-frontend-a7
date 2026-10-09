import apiClient from "@/lib/apiClient";
import { IApiResponseWithOutPagination } from "@/types";

import { ICategoryItem } from "@/types/category.type";

export function getAllCategory() {
  return apiClient<IApiResponseWithOutPagination<ICategoryItem[]>>("/category");
}

export function createNewCategory(payload: { name: string }) {
  return apiClient("/category", { method: "POST", body: payload });
}

export function updateCategory(payload: { id: string; name: string }) {
  return apiClient("/category", { method: "PATCH", body: payload });
}

export function deleteCategory(payload: { id: string }) {
  return apiClient("/category", { method: "DELETE", body: payload });
}

export function getCategoryById(id: string) {
  return apiClient<IApiResponseWithOutPagination<ICategoryItem>>(
    `/category/category-by-id/${id}`,
  );
}
