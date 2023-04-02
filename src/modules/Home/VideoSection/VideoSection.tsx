import SectionTitle from "@components/SectionTitle/SectionTitle";
import Video from "./Video";

export default function VideoSection() {
  return (
    <div className="md:pt-[60px] pt-[30px]">
      <div className="container ">
        <SectionTitle
          header="One Editor to rule them all"
          headerStyles=" pb-[30px]"
          btn={true}
          btnText="Try now!"
          btnStyles="!px-[80px]"
        />
      </div>
      <Video />
    </div>
  );
}
