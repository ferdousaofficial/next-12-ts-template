import GroupText from "@components/GroupText/GroupText";
import Image from "next/image";

export default function FeatureItem({ header, paragraph, img, bgColor }: any) {
  return (
    <div
      className={`flex flex-wrap lg:flex-row flex-col-reverse items-center justify-between ${bgColor}`}
    >
      <div className="px-10 lg:w-[650px] md:w-[560px] w-11/12 p-[30px] ">
        <GroupText
          header={header}
          paragraph={paragraph}
          btn={true}
          btnText="Try now!"
          headerStyles="font-bold pb-[20px]"
          paragraphStyles="pb-[20px] !w-full !text-[16px] leading-8"
        />
      </div>
      <div className="bg-dark lg:w-[630px] md:w-[560px] w-11/12 md:h-[720px] h-[500px] grid place-content-center">
        <Image
          src={img}
          alt="feature-img"
          width={400}
          height={567.44}
          className=" lg:!px-0 !px-10 "
        />
      </div>
    </div>
  );
}
