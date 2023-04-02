import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";

export default function AccordionItemHeader({ title, isOpen, setIsOpen }: any) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`cursor-pointer border  border-dark px-6 py-5 rounded-2xl ${
        isOpen ? "rounded-b-none   smooth" : "rounded-2xl smooth"
      }`}
      onClick={handleClick}
    >
      <h3 className="flex items-center justify-between font-bold">
        <span>{title}</span>
        {isOpen ? (
          <BsDash className="cursor-pointer text-2xl" />
        ) : (
          <AiOutlinePlus className="cursor-pointer text-2xl" />
        )}
      </h3>
    </div>
  );
}
