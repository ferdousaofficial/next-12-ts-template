import FeatureItem from "@components/FeatureItem/FeatureItem";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import { featureItemsData } from "@config/constants";

export default function FeatureSection() {
  return (
    <div className="py-[60px]">
      <div className="container">
        <SectionTitle header="What InstantImageFix have to Offer"/>
        <div className="pt-[60px]">
          {featureItemsData.map((items, id) => {
            const { header, paragraph, img, bgColor } = items;

            return (
              <FeatureItem
                key={id}
                header={header}
                paragraph={paragraph}
                img={img}
                bgColor={bgColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
