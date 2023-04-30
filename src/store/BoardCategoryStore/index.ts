import { atom } from 'recoil';

/** 게시판 종류 목록 전역 상태 */
export const boardCategoryListAtom = atom({
  key: 'boardCategoryListAtom',
  default: [],
});
