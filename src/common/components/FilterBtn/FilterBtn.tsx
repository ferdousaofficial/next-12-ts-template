interface filterBtnProps {
  text: String;
  active: boolean;
}

export default function FilterBtn({ text, active }: filterBtnProps) {
  return (
    <button
      className={`bg-transparent border border-lightgray px-[20px] py-[6px] rounded-lg ${
        active && "text-[#0073C7] bg-[#DDF2FF] border-[#DDF2FF]"
      }`}
    >
      {text}
    </button>
  );
}
