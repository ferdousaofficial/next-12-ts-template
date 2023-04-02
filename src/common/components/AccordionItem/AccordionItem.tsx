import { useState } from "react";
import AccordionItemHeader from "./AccordionItemHeader";
import AccordionItemBody from "./AccordionItemBody";

export default function AccordionItem({ title, text }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[700px]">
      <AccordionItemHeader
        isOpen={isOpen}
        title={title}
        setIsOpen={setIsOpen}
      />
      <AccordionItemBody isOpen={isOpen} text={text} />
    </div>
  );
}
