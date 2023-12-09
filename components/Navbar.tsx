import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';  // Cambiado a CustomButton

const Navbar = () => {
  return (
    <header className='w-full absolute z-10 navbar'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image
            src="/logo.png"
            alt="Car Hub Logo"
            width={50}
            height={18}
            className='object-contain'
          />
        </Link>
        <CustomButton
          title="Sign In"  // Cambiado de text a title
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}

export default Navbar;
