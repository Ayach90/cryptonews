import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="CryptosNews Logo"
      src="/images/logo.png"
      width={60}
      height={60}
    />
  );
};

export default Logo;
