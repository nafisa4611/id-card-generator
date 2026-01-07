import IDCardFront from "./IDCardFront";
import IDCardBack from "./IDCardBack";

export default function IDCard({ data }) {
  return (
    <div className="flex gap-4">
      <IDCardFront data={data} />
      <IDCardBack data={data} />
    </div>
  );
}
