import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/** styles */
import { HeaderContainer, LogoBox } from './style';

/** assets */
import NevryTimeLogo2 from '../../assets/icons/nevrytime-logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const HeaderNavMenu = [
  {
    id: 1,
    name: '게시판',
    url: '',
  },
  {
    id: 2,
    name: '시간표',
    url: '',
  },
  {
    id: 3,
    name: '강의실',
    url: '',
  },
  {
    id: 4,
    name: '학점계산기',
    url: '',
  },
  {
    id: 5,
    name: '친구',
    url: '',
  },
  {
    id: 6,
    name: '책방',
    url: '',
  },
  {
    id: 7,
    name: '캠퍼스픽',
    url: '',
  },
];

function Header() {
  // 현재 위치한 탭
  const [currentTap, setCurrentTap] = useState('게시판');
  const changeTap = (e: React.MouseEvent, tapName: string) => {
    setCurrentTap(tapName);
  };

  return (
    <HeaderContainer>
      <LogoBox>
        <Link href="/">
          <Image src={NevryTimeLogo2} alt="" width={60} height={60} />
        </Link>

        <div>
          <div>에브리타임</div>
          <div>순천향대</div>
        </div>
      </LogoBox>
      <ul>
        {HeaderNavMenu.map((menu) => (
          <li
            key={menu.id}
            className={menu.name === currentTap ? 'active' : ''}
            onClick={(e) => changeTap(e, menu.name)}
          >
            {menu.name}
          </li>
        ))}
      </ul>
      <div>
        <Link href="/message">
          <FontAwesomeIcon icon={faMessage} />
        </Link>
        <Link href="/my-page">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </HeaderContainer>
  );
}

export default Header;
