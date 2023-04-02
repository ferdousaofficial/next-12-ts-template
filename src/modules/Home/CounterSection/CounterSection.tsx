import { counterItemsData } from "@config/constants";
import CounterItem from "@components/CounterItem/CounterItem";

export default function CounterSection() {
  return (
    <div className="pt-[30px] pb-[60px] ">
      <div className="contianer mx-auto !max-w-[85%] lg:py-[80px] md:py-[60px] py-[50px] border-t-2 border-b-2 border-dark">
        <div className="flex items-center justify-around flex-wrap lg:space-y-0 md:space-y-5 space-y-7">
          {counterItemsData.map((counter, id) => {
            return (
              <CounterItem
                key={id}
                counterText={counter.text}
                limit={counter.limit}
                subtext={counter.subText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
