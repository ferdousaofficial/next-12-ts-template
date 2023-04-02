import React from "react";

export default function AccordionItemBody({ isOpen, text }: any) {
  return (
    <div
      className={`px-6 py-5 rounded-b-2xl border-t-0 border border-dark  ${
        !isOpen ? " hidden" : " smooth block"
      }`}
    >
      <p>{text}</p>
    </div>
  );
}
