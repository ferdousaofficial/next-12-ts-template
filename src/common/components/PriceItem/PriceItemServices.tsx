import { BsCheck2 } from "react-icons/bs";

export default function PriceItemServices({ services }: any) {
  return (
    <>
      {services && Array.isArray(services) && (
        <div className="space-y-3">
          <span>What’s included:</span>
          <ul className="space-y-2 flex flex-col ">
            {services.map((service: string, id: number) => (
              <li className=" flex items-center space-x-2 " key={id}>
                <BsCheck2 className="w-[5%]" />{" "}
                <span className="w-[95%]">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
