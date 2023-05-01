import { customAxios } from '@/src/axios/customAxios';

/** 게시판 목록 요청(자유, 비밀, 취업...) */
export const boardListRequest = async () => {
  return await customAxios.get(`/api/board/`);
};

/** 게시판 내 게시글 리스트 요청 */
export const boardRequest = async (
  boardId: number,
  page: number,
  length: number,
) => {
  return await customAxios.get(
    `/api/content/${boardId}/p/${page}?length=${length}`,
  );
};

/** 게시글 내용 요청 */
export const contentRequest = async (contentId: number) => {
  return await customAxios.get(`/api/content/${contentId}`);
};
