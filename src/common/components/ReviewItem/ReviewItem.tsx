export default function ReviewItem({ review, writer, writerPosition }: any) {
  return (
    <div className="p-8 rounded-3xl border border-dark md:w-[486px] w-[350px] space-y-5 mx-auto">
      <p>{review}</p>
      <div>
        <h4 className="font-bold">{writer}</h4>
        <span className="text-[14px]">{writerPosition}</span>
      </div>
    </div>
  );
}
