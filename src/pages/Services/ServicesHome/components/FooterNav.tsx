import React from 'react';
import footer from '@/assets/images/footer.png';

const FooterNav: React.FC = () => {
  return (
    <img
      src={footer}
      alt="Footer"
      className="w-full h-auto"
    />
  );
};

export default FooterNav;