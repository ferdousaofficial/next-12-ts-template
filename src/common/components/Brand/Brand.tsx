import Image from "next/image";
import { logo } from "@config/constants";
import Link from "next/link";

const Brand = ({ type }: any) => {
  return (
    <div className="max-w-[140px]">
      <Link href={"/"}>
        <Image
          src={type === "light" ? logo[0] : logo[1]}
          alt="logo"
          width={230}
          height={250}
          className="cursor-pointer "
        />
      </Link>
    </div>
  );
};

export default Brand;
