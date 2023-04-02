import Button from "@components/Button/Button";
import PriceItemServices from "./PriceItemServices";
import PriceItemHeader from "./PriceItemHeader";

export default function PriceItem({
  category,
  price,
  btnType,
  btnStyles,
  services,
  styles,
}: any) {
  return (
    <div
      className={` border border-dark rounded-lg px-7 py-10 lg:w-[400px] w-[320px] space-y-7 ${styles}`}
    >
      <PriceItemHeader price={price} category={category} />
      <div>
        <Button text="Start for free" secondary={btnType} styles={btnStyles} />
      </div>
      <PriceItemServices services={services} />
    </div>
  );
}
