import Image from 'next/image';

import FirstViewBanner from '../../../public/assets/Images/FirstViewBanner.jpg';

function FirstView() {
  return (
    <div>
      <Image src={FirstViewBanner} alt="" />
    </div>
  );
}

export default FirstView;
