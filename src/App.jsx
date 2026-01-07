import { useRef } from "react";
import IDCard from "./components/IDCard";
import DownloadPDFButton from "./components/DownloadPDFButton";
import users from "./data/idData.json";

const A4_WIDTH_PX = 794;
const A4_HEIGHT_PX = 1123;

export default function App() {
  const pageRefs = useRef([]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        ID Card Generator
      </h1>

      {users.map((user, index) => (
        <div
          key={user.id}
          ref={(el) => {
            pageRefs.current[index] = el;
          }}
          className="mx-auto mb-8 bg-white flex items-center justify-center pdf-page"
          style={{
            width: A4_WIDTH_PX,
            height: A4_HEIGHT_PX,
          }}
        >
          <IDCard data={user} />
        </div>
      ))}

      <div className="text-center">
        <DownloadPDFButton pageRefs={pageRefs} />
      </div>
    </div>
  );
}
