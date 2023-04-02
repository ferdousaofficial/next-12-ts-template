import GroupText from "@components/GroupText/GroupText";

export default function SectionTitle({
  header,
  paragraph,
  btn,
  btnText,
  headerStyles,
  btnStyles
}: any) {
  return (
    <GroupText
      styles="text-center"
      header={header}
      headerStyles={`w-11/12 mx-auto ${headerStyles}`}
      paragraph={paragraph}
      paragraphStyles="mx-auto"
      btn={btn}
      btnText={btnText}
      btnStyles={btnStyles}
    />
  );
}
