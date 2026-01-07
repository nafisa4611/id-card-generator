import IDCardFront from "./components/IDCardFront";
import IDCardBack from "./components/IDCardBack";
import data from "./data/idData.json";

export default function App() {
  return (
    <div className="min-h-screen flex gap-10 justify-center items-center bg-gray-200 p-10">
      <IDCardFront data={data} />
      <IDCardBack data={data} />
    </div>
  );
}
