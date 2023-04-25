/** 공통적으로 사용하기 위한 스타일 지정하는 곳
 * styled.ts에서 정의한 타입에 맞춰서 theme을 정의해준다.
 */

import { DefaultTheme, css } from 'styled-components';

/* 나중에 이런식으로 전역으로 사용하기 위한 설정
  const StyledSection = styled.section`
    width: 100%;
    ${({ theme }) => theme.MIXINS.flexBox('column')}
    @media ${({ theme }) => theme.media.pc} {
      margin-bottom: 80px;
    }
    @media ${({ theme }) => theme.media.mobile} {
      margin-bottom: 56px;
    }
  `
*/

const colors = {
  black1: '#444444',
  black2: '#292929',
  black3: '#737373',
  white: '#ffffff',
  red: '#c62a18',
  gray1: '#d6d6d6',
  gray2: '#e3e3e3',
  gray3: '#a6a6a6',
  gray4: '#ededed',
  gray5: '#666',
  light_gray1: '#f2f2f2',
  light_gray2: '#f9f9f9',
  light_gray3: '#f8f8f8',
};

const containers = {
  mainContainer: css`
    width: 100vw;
    height: 100vh;
  `,
};

const getFontWeight = (weight: string) => {
  switch (weight) {
    case 'EB':
      return 800;
    case 'B':
      return 700;
    case 'SB':
      return 600;
    case 'M':
      return 500;
    case 'R':
      return 400;
    case 'L':
      return 300;
    case 'EL':
      return 200;
    case 'T':
      return 100;
    default:
      return 300;
  }
};

const MIXINS = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export const theme: DefaultTheme = {
  colors,
  containers,
  getFontWeight,
  MIXINS,
  media,
};
