import IdCard from "../components/idCardWeb/IdCard";

const mockTemplates = [
  {
    id: "EMP-001",
    name: "Nafisa Mila",
    designation: "Front End Developer",
    type: "Employee",
    department: "IT",
    bloodGroup: "B+",
    level: "4",
    semester: "1",
    logo: "/id-card/logo.png",
    photo: "/id-card/photo1.jpg",
    signature: "/id-card/sign.jpg",
    company: "Khulna Agricultural University",
    phone: "+08812345678",
    address: "Dhaka, Bangladesh",
    email: "nafisa@example.com",
    emergencyContact: "+08898765432",
    expiry: "Dec-2027",
    qrCode: "/id-card/qr.jpg"
  },
];

export default function Templates() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Templates
        </h2>

        <div className="">
          {mockTemplates.map((template, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col items-center"
            >
              {/* ID Card Preview */}
              <div className="w-full mb-4">
                <IdCard data={template} />
              </div>

              {/* Use Template Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold w-full">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
