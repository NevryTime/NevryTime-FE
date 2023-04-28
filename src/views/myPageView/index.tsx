/** 마이페이지 뷰 */
import React from 'react';
import { signOut } from 'next-auth/react';

import { MyPageContainer, MyInfoBox, MyAccountBox } from './style';

import { Button } from '@/src/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function myPageView() {
  return (
    <MyPageContainer>
      <MyInfoBox>
        <div>
          <div>내 정보</div>
          <Button
            width={64}
            height={30}
            borderRadius={15}
            onClick={() => signOut()}
          >
            로그아웃
          </Button>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            <div>아이디</div>
            <div>닉네임</div>
            <div>순천향대</div>
          </div>
        </div>
      </MyInfoBox>
      <MyAccountBox>
        <div>계정</div>
        <div>
          <Link href="/my-page/password">비밀번호 변경</Link>
        </div>
        <div>
          <Link href="/my-page/nick">닉네임 설정</Link>
        </div>
        <div>
          <Link href="/my-page/with-drawl">회원 탈퇴</Link>
        </div>
      </MyAccountBox>
    </MyPageContainer>
  );
}

export default myPageView;
