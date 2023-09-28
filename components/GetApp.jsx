import Image from "next/image";
import Android from "../public/icons/android.png";

const GetApp = ({ setShowMobNav }) => {
  return (
    <button
      onClick={() => setShowMobNav(false)}
      className=" bg-primary py-3 px-2 flex items-center justify-center
            gap-2">
      <Image src={Android} alt="android icon" />
      <span>Get the mobile app</span>
    </button>
  );
};

export default GetApp;
