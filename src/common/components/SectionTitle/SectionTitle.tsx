import GroupText from "@components/GroupText/GroupText";

export default function SectionTitle({ header, paragraph, btn, btnText }: any) {
  return (
    <GroupText
      styles="text-center"
      header={header}
      paragraph={paragraph}
      paragraphStyles="mx-auto"
      btn={btn}
      btnText={btnText}
    />
  );
}
