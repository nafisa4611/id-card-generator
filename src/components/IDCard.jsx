import IDCardFront from "./IDCardFront";
import IDCardBack from "./IDCardBack";

export default function IDCard({ data }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <IDCardFront data={data} />
      <IDCardBack data={data} />
    </div>
  );
}
