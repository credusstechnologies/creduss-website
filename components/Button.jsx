import Image from "next/image";
import Android from "../public/icons/android.png";
import Link from "next/link";

const Button = ({
  onClick,
  href = "/get-the-app",
  showIcon = true,
  children,
  className,
}) => {
  return (
    <Link href={href}>
      <button
        onClick={() => onClick}
        className={`${className} flex items-center justify-center
            gap-2 rounded-[8px] bg-primary text-[16px] font-semibold`}>
        {showIcon && <Image src={Android} alt="android icon" />}
        <span>{children}</span>
      </button>
    </Link>
  );
};

export default Button;
