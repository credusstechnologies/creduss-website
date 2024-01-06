import Image from "next/image";
import Android from "../public/icons/android.png";
import Link from "next/link";

import PropTypes from "prop-types";

const Button = ({
  onClick,
  isLink = true,
  href = "/get-the-app",
  showIcon = true,
  label = "Get the android app",
  twStyles,
}) => {
  if (isLink) {
    return (
      <Link href={href}>
        <button
          onClick={() => onClick}
          className={`flex items-center justify-center
            gap-2 rounded-[8px] bg-primary text-base font-semibold leading-normal ${twStyles}`}>
          {showIcon && <Image src={Android} alt="android icon" />}
          <span>{label}</span>
        </button>
      </Link>
    );
  }

  return (
    <button
      onClick={() => onClick}
      className={`flex items-center justify-center
            gap-2 rounded-[8px] bg-primary text-base font-semibold leading-normal ${twStyles}`}>
      {showIcon && <Image src={Android} alt="android icon" />}
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  isLink: PropTypes.bool,
  showIcon: PropTypes.bool,
  twStyles: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
