import { useRef } from "react";
import IDCard from "./components/IDCard";
import DownloadPDFButton from "./components/DownloadPDFButton";
import users from "./data/idData.json";

export default function App() {
  const pdfRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-6">ID Card Generator</h1>

      <div
        ref={pdfRef}
        className="grid grid-cols-2 gap-4 bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >
        {users.map((user) => (
          <IDCard key={user.id} data={user} />
        ))}
      </div>

      <div className="text-center mt-6">
        <DownloadPDFButton targetRef={pdfRef} fileName="id-cards.pdf" />
      </div>
    </div>
  );
}
