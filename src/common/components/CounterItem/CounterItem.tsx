import GroupText from "@components/GroupText/GroupText";
import { useEffect, useState } from "react";

export default function CounterItem({ counterText, subtext, limit }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => count < limit && setCount(count + 1),
      limit > 1000 ? 100 : 20 // limit is the actual number
    );

    return () => clearInterval(interval);
  }, [count]);

  return (
    <GroupText
      styles="text-center"
      header={` ${count} ${counterText || ""}`}
      paragraph={subtext || "give the counter subtext"}
      paragraphStyles="mx-auto"
    />
  );
}
