import { customAxios } from '@/src/axios/customAxios';

/** types */
// 회원가입 데이터 타입
export type signUpDataType = {
  name: string;
  password: string;
};
// 로그인 데이터 타입
export type loginDataType = {
  name: string;
  password: string;
};
// 토큰 재발급 데이터 타입
export type refreshDataType = {
  accessToken: string;
  refreshToken: string;
};

/** 회원가입 요청 */
export const signUpRequest = async (signUpData: signUpDataType) => {
  return await customAxios.post(`/auth/signup/`, signUpData);
};

/** 로그인 요청 */
export const loginRequest = async (loginData: loginDataType) => {
  return await customAxios.post(`/auth/login/`, loginData);
};

/** 토큰 재발급 요청 */
export const refreshRequest = async (refreshData: refreshDataType) => {
  return await customAxios.post(`/auth/refresh/`, refreshData);
};
