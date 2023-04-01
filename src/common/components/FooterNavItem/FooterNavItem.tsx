import Link from "next/link";

export default function FooterNavItem({ title, itemData }: any) {
  return (
    <div>
      <h3 className="text-[22px] pb-2 font-bold">{title}</h3>
      <ul className="space-y-2">
        {itemData.map((item, id) => {
          return (
            <li key={id}>
              <Link href={item.url}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
