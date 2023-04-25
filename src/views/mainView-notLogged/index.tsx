/** 네브리타임 접속시 보이는 첫 화면 뷰(로그인 안 한 경우) */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

/** styles */
import {
  MainContainer,
  MainLogoSection,
  MainButtonSection,
  MainOptionSection,
} from './style';

/** component */
import { Button } from '../../components/Button';

/** assets */
import NevryTimeLogo2 from '../../assets/icons/nevrytime-logo2.png';

function mainView() {
  const router = useRouter();

  return (
    <MainContainer>
      <MainLogoSection>
        <Image src={NevryTimeLogo2} alt="" width={70} height={70} />
      </MainLogoSection>
      <MainButtonSection>
        <div>
          <Button
            width={360}
            height={40}
            bgColor={'#ffffff'}
            color={'#737373'}
            onClick={() => router.push('/login')}
          >
            로그인
          </Button>
        </div>
        <div>
          <Button
            width={360}
            height={40}
            onClick={() => router.push('/register')}
          >
            네브리타임 회원가입
          </Button>
        </div>
      </MainButtonSection>
      <MainOptionSection>
        <Link href="/find-account">아이디/비밀번호 찾기</Link>
      </MainOptionSection>
    </MainContainer>
  );
}

export default mainView;
