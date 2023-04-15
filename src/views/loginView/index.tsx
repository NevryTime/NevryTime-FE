/** 로그인 뷰 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/** styles */
import {
  LoginContainer,
  LoginLogoSection,
  LoginInputSection,
  LoginButtonSection,
  LoginOptionSection,
  LoginRegisterButtonSection,
} from './style';

/** component */
import { InputBox } from '../../components/InputBox';
import { Button } from '../../components/Button';

/** assets */
import NevryTimeLogo from '../../assets/icons/nevrytime-logo.png';

function loginView() {
  return (
    <LoginContainer>
      <LoginLogoSection>
        <Image src={NevryTimeLogo} alt="" width={360} height={70} />
      </LoginLogoSection>
      <LoginInputSection>
        <div>
          <InputBox width={360} height={40} placeholder={'아이디'} />
        </div>
        <div>
          <InputBox width={360} height={40} placeholder={'비밀번호'} />
        </div>
      </LoginInputSection>
      <LoginButtonSection>
        <Button width={360} height={40}>
          로그인
        </Button>
      </LoginButtonSection>
      <LoginOptionSection>
        <div>
          <input type="checkbox" checked={false} />
          로그인 유지
        </div>
        <Link href="/find-account">아이디/비밀번호 찾기</Link>
      </LoginOptionSection>
      <LoginRegisterButtonSection>
        <div>에브리타임에 처음이신가요?</div>
        <div>
          <Link href="/register">회원가입</Link>
        </div>
      </LoginRegisterButtonSection>
    </LoginContainer>
  );
}

export default loginView;
