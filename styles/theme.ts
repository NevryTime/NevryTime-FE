/** 공통적으로 사용하기 위한 스타일 지정하는 곳
 * styled.d.ts에서 정의한 타입에 맞춰서 theme을 정의해준다.
 */

import { DefaultTheme } from 'styled-components';

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

export const theme: DefaultTheme = {
  colors: {
    black: '#1e1f1d',
    white: '#ffffff',
    orange: '#eb7952',
  },
  // boxShadow: {
  //   normal: '0 3px 8px 0 rgb(0 0 0 / 10%)',
  //   purple: '0 3px 8px 0 #d6c9ff',
  //   blue: '0 3px 8px 0 #b3e2e6',
  // },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const MIXINS = {
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

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
