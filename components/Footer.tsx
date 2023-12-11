import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.png" alt="logo" width={118} height={18} className="object-contain" />
          <p className="text-base text-gray-700">
            CarHub 2023 <br />
            All rights reserved &copy;
            policy and terms

          </p>
        </div>
        <div className="footer__links">
          <h1>ABOUT</h1>
          <p>How it works</p>
        </div>
        <div className="footer__links">
          <h1>SOCIALS</h1>
          <p>Twitter</p>
          <p>instagram</p>
          <p>Facebook</p>
        </div>
        <div className="footer__links">
          <h1>COMPANY</h1>
          <p>blog</p>
          <p>events</p>
          <p>podcast</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
