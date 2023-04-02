import GroupText from "@components/GroupText/GroupText";
import { useEffect, useState } from "react";

export default function CounterItem({ counterText, subtext, limit }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => count < limit && setCount(count + 1),
      limit < 1000 ? 40 : 1 // limit is the actual number
    );

    return () => clearInterval(interval);
  }, [count, limit]);

  return (
    <div className="lg:w-1/4 md:w-[45%] w-11/12">
      <GroupText
        styles="text-center"
        header={` ${count} ${counterText || ""}`}
        paragraph={subtext || "give the counter subtext"}
        paragraphStyles="mx-auto !w-full"
        headerStyles="!pb-0 !md:text-[48px] !font-bold !text-[38px]"
      />
    </div>
  );
}
