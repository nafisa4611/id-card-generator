import { useState } from "react";
import IdCard from "../components/idCardWeb/IdCard";
import * as XLSX from "xlsx";
import DownloadPDFButton from "../components/idCardWeb/DownloadPDFButton";

export default function IDCard() {
  const [dataList, setDataList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const downloadTemplate = () => {
    const templateData = [{
      id: "EMP-001", name: "Nafisa Mila", designation: "Front End Developer",
      type: "Employee", department: "IT", bloodGroup: "B+", level: "4",
      semester: "1", logo: "/id-card/logo.png", photo: "/id-card/photo1.jpg",
      signature: "/id-card/sign.jpg", company: "Khulna Agricultural University",
      phone: "+08812345678", address: "Dhaka, Bangladesh", email: "nafisa@example.com",
      emergencyContact: "+08898765432", expiry: "Dec-2027", qrCode: "/id-card/qr.jpg"
    }];
    const worksheet = XLSX.utils.json_to_sheet(templateData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");
    XLSX.writeFile(workbook, "ID_Card_Template.xlsx");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const bstr = event.target.result;
      const workbook = XLSX.read(bstr, { type: "binary" });
      const workSheet = workbook.Sheets[workbook.SheetNames[0]];
      const fileData = XLSX.utils.sheet_to_json(workSheet, { raw: false, defval: "" });
      setDataList(fileData);
      setCurrentIndex(0);
    };
    reader.readAsBinaryString(file);
  };

  const handleEdit = (index, field, value) => {
    const updatedList = [...dataList];
    updatedList[index][field] = value;
    setDataList(updatedList);
  };

  const clearData = () => {
    if(window.confirm("Are you sure you want to clear all data?")) {
      setDataList([]);
      setCurrentIndex(0);
    }
  };

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % dataList.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + dataList.length) % dataList.length);

  return (
    <div className="flex flex-col bg-bg font-sans">
      {/* HEADER */}
      <header className="h-16 border-gray-400 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
        <h1 className=""></h1>
        {dataList.length > 0 && (
          <button onClick={clearData} className="text-xs font-bold text-textColor hover:text-blue-500 flex items-center gap-1 cursor-pointer transition-colors">
            Reset Dashboard ↺
          </button>
        )}
      </header>

      <div className="flex flex-1 overflow-hidden">
        {dataList.length === 0 ? (
          /* UPLOAD BUTTON (Full Screen when no data) */
          <div className="flex-1 flex flex-col items-center justify-center p-10 bg-bg">
             <label className="w-full max-w-lg h-72 border-2 border-dashed border-purple-200 rounded-3xl flex flex-col items-center justify-center bg-bg hover:bg-purple-50 transition-all cursor-pointer group">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">↑</div>
                <span className="text-lg font-bold text-slate-700">Upload Excel Data</span>
                <span className="text-sm text-muted mt-1">Click to browse files</span>
                <input type="file" className="hidden" accept=".xlsx, .xls, .csv" onChange={handleFileUpload} />
             </label>
             <button onClick={downloadTemplate} className="mt-6 text-sm text-purple-600 font-semibold hover:underline">Download Excel Template</button>
          </div>
        ) : (
          <>
            {/* LEFT SIDE (65%) */}
            <div className="w-[65%] flex flex-col p-6 overflow-hidden">
              {/* TABLE CONTAINER */}
              <div className="bg-bg rounded-2xl shadow-sm border border-border overflow-hidden flex flex-col flex-1 mb-6">
                <div className="overflow-x-auto overflow-y-auto flex-1">
                  <table className="w-full text-left text-[11px]">
                    <thead className="bg-bg sticky top-0 z-10 border-b">
                      <tr>
                        <th className="p-3 min-w-[150px]">Name</th>
                        <th className="p-3 min-w-[100px]">ID</th>
                        <th className="p-3 min-w-[150px]">Designation</th>
                        <th className="p-3 min-w-[120px]">Dept.</th>
                        <th className="p-3 min-w-[60px]">Blood</th>
                        <th className="p-3 min-w-[120px]">Level</th>
                        <th className="p-3 min-w-[120px]">Semester</th>
                        <th className="p-3 min-w-[120px]">Logo</th>
                        <th className="p-3 min-w-[120px]">Photo</th>
                        <th className="p-3 min-w-[120px]">Signature</th>
                        <th className="p-3 min-w-[200px]">Company</th>
                        <th className="p-3 min-w-[120px]">Phone</th>
                        <th className="p-3 min-w-[180px]">Email</th>
                        <th className="p-3 min-w-[200px]">Address</th>
                        <th className="p-3 min-w-[200px]">Emergency Contact</th>
                        <th className="p-3 min-w-[200px]">Epiry</th>
                        <th className="p-3 text-center sticky right-0 bg-bg border-l shadow-[-4px_0_10px_rgba(0,0,0,0.02)]">Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataList.map((user, idx) => (
                        <tr key={idx} className={`border-b hover:bg-bg transition-colors ${currentIndex === idx ? 'bg-blue-50/50' : ''}`}>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2" value={user.name} onChange={(e) => handleEdit(idx, 'name', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2" value={user.id} onChange={(e) => handleEdit(idx, 'id', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2" value={user.designation} onChange={(e) => handleEdit(idx, 'designation', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2" value={user.department} onChange={(e) => handleEdit(idx, 'department', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2 text-center" value={user.bloodGroup} onChange={(e) => handleEdit(idx, 'bloodGroup', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2 text-center" value={user.level} onChange={(e) => handleEdit(idx, 'level', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2 text-center" value={user.semester} onChange={(e) => handleEdit(idx, 'semester', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2 text-center" value={user.logo} onChange={(e) => handleEdit(idx, 'logo', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2 text-center" value={user.photo} onChange={(e) => handleEdit(idx, 'photo', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2 text-center" value={user.signature} onChange={(e) => handleEdit(idx, 'signature', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2" value={user.company} onChange={(e) => handleEdit(idx, 'company', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2" value={user.phone} onChange={(e) => handleEdit(idx, 'phone', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2" value={user.email} onChange={(e) => handleEdit(idx, 'email', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2" value={user.address} onChange={(e) => handleEdit(idx, 'address', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2 text-center" value={user.emergencyContact} onChange={(e) => handleEdit(idx, 'emergencyContact', e.target.value)} /></td>
                          <td className="p-1"><input className="w-full bg-transparent border-none p-2 text-center" value={user.expiry} onChange={(e) => handleEdit(idx, 'expiry', e.target.value)} /></td>
                          <td className="p-1 sticky right-0 bg-bg border-l text-center shadow-[-4px_0_10px_rgba(0,0,0,0.02)]">
                            <button onClick={() => setCurrentIndex(idx)} className="text-primary font-bold hover:underline cursor-pointer">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* BOTTOM ACTIONS */}
              <div className="bg-bg p-4 rounded-2xl shadow-sm border border-border flex items-center justify-between">
                <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-200 cursor-pointer flex items-center gap-2">
                  Generate PDF
                </button>
                <div className="flex items-center gap-4">
                  <DownloadPDFButton users={dataList} />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (35%) */}
            <div className="w-[35%] bg-bg border border-border flex flex-col items-center pt-0 p-6 overflow-y-auto">
              <div className="w-full py-2 mb-4 text-center border-b border-border">
                <h2 className="text-xs font-bold text-muted uppercase tracking-widest">Live Preview</h2>
                <p className="text-textColor text-sm">Entry {currentIndex + 1} of {dataList.length}</p>
              </div>

              <div className="bg-bg p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 border border-border">
                <IdCard data={dataList[currentIndex]} />
              </div>

              <div className="mt-4 flex items-center gap-4">
                <button onClick={goToPrev} className="bg-bg w-10 h-10 rounded-full shadow hover:bg-bg flex items-center justify-center font-bold text-textColor cursor-pointer">←</button>
                <div className="bg-bg px-6 py-2 rounded-full shadow text-sm font-bold text-blue-600">
                  {currentIndex + 1} / {dataList.length}
                </div>
                <button onClick={goToNext} className="bg-bg w-10 h-10 rounded-full shadow hover:bg-bg flex items-center justify-center font-bold text-textColor cursor-pointer">→</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}