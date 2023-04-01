import Button from "@components/Button/Button";

export default function GroupText(props: any) {
  const {
    header,
    paragraph,
    styles,
    headerStyles,
    paragraphStyles,
    btnText,
    btn,
  } = props;

  return (
    <div className={` ${styles}`}>
      <h2
        className={`font-medium md:text-[39px] text-[29px] pb-[10px] ${headerStyles}`}
      >
        {header}
      </h2>
      <p className={`xl:w-[28%] md:w-1/2 w-[310px] capitalize ${paragraphStyles}`}>
        {paragraph}
      </p>
      {btn && <Button text={btnText} />}
    </div>
  );
}
