'use client';

/** 로그인 뷰 */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
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
  // useRouter
  const router = useRouter();

  // 사용자가 입력한 아이디와 비밀번호
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // 사용자의 아이디를 입력 받는 함수
  const onChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // 사용자의 비밀번호를 입력 받는 함수
  const onChangeUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLoginRequest = async () => {
    await signIn('credentials', {
      name: name,
      password: password,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <LoginContainer>
      <LoginLogoSection>
        <Image src={NevryTimeLogo} alt="" width={360} height={70} />
      </LoginLogoSection>
      <LoginInputSection>
        <div>
          <InputBox
            width={360}
            height={40}
            placeholder={'아이디'}
            onChange={onChangeUserId}
          />
        </div>
        <div>
          <InputBox
            width={360}
            height={40}
            type={'password'}
            placeholder={'비밀번호'}
            onChange={onChangeUserPassword}
          />
        </div>
      </LoginInputSection>
      <LoginButtonSection>
        <Button
          width={360}
          height={40}
          onClick={() => {
            onClickLoginRequest();
          }}
        >
          로그인
        </Button>
      </LoginButtonSection>
      <LoginOptionSection>
        <div>
          <input type="checkbox" checked={false} />
          아이디 저장
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
