import Navbar from "./components/Navbar";
import IDCard from "./components/IDCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <IDCard />
      </main>
    </div>
  );
}
