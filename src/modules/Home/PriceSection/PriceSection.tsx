import DiscountBatch from "@components/PriceItem/DiscountBatch";
import PriceItem from "@components/PriceItem/PriceItem";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import { priceItem } from "@config/constants";

export default function PriceSection() {
  return (
    <div className="relative md:py-[60px] py-[30px] ">
      <div className="container">
        <SectionTitle
          header="Pro Plan"
          paragraph="Choose on that best suits you"
        />
        <div className="flex flex-wrap items-center justify-center md:pt-20 pt-10 lg:space-x-[80px] md:space-x-[50px] md:space-y-0 space-x-0 space-y-10 ">
          {priceItem.map((item, id) => {
            return (
              <PriceItem
                key={id}
                category={item.category}
                price={item.price}
                btnType={item.btnType}
                btnStyles={item.btnStyles}
                services={item.services}
                styles={item.styles}
              />
            );
          })}
        </div>
        {/* batch */}
        {/* <DiscountBatch /> */}
      </div>
    </div>
  );
}
