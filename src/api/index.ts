import http from "../utils/http";
import { RrrorMessageEnum } from "/@/enums/httpEnum";

enum Api {
  Login = "/auth/local",
  GetUserInfo = "/users/me",
  TableList = "/table/list",
  TableTreeList = "/table/treelist",
  Orders = "/orders",
  Categories = '/categories',
  Foods = '/foods',
  Tables = '/tables',
}

/**
 * @description: user login api
 */
export function loginApi(params: any) {
  // 返回token
  return http.post<any>(Api.Login, params);
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return http.get<any>(Api.GetUserInfo);
}

export function getTableList(params?: any) {
  return http.get<any>(Api.TableList, params);
}

export function getTableTreeList(params?: any) {
  return http.get<any>(Api.TableTreeList, params);
}

export function getOrders(params?: any) {
  return http.get<any>(Api.Orders, params);
}

export function updateOrder(id: any, params?: any) {
  return http.put<any>(Api.Orders + `/${id}`, params);
}

export function addOrder(params?: any) {
  return http.post<any>(Api.Orders, params);
}

export function delOrder(id?: any) {
  return http.delete<any>(Api.Orders + `/${id}`);
}

export function getCategories(params?: any) {
  return http.get<any>(Api.Categories, params);
}

export function updateCategory(id: any, params?: any) {
  return http.put<any>(Api.Categories + `/${id}`, params);
}

export function addCategory(params?: any) {
  return http.post<any>(Api.Categories, params);
}

export function delCategory(id?: any) {
  return http.delete<any>(Api.Categories + `/${id}`);
}

export function getFoods(params: any) {
  return http.get<any>(Api.Foods, params);
}

export function updateFoods(id: any, params?: any) {
  return http.put<any>(Api.Foods + `/${id}`, params);
}

export function addFoods(params?: any) {
  return http.post<any>(Api.Foods, params);
}

export function delFoods(id?: any) {
  return http.delete<any>(Api.Foods + `/${id}`);
}

export function updateTables(id: any, params?: any) {
  return http.put<any>(Api.Tables + `/${id}`, params);
}