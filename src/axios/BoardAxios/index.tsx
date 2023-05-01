import { customAxios } from '@/src/axios/customAxios';

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
