export default function PriceItemHeader({ price, category }: any) {
  return (
    <div className="text-center">
      <h2 className="font-bold text-[39px] pb-2">{category}</h2>
      <span className="text-[22px]">{price}</span>
    </div>
  );
}
