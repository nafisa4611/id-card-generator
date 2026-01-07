export default function IDCardFront({ data }) {
  return (
    <div
      className="border rounded-lg shadow-lg flex overflow-hidden bg-white"
      style={{ width: 360, height: 220 }}
    >
      {/* LEFT PANEL: PROFILE PHOTO */}
      <div
        className="flex items-center justify-center bg-gray-100 p-2"
        style={{ width: 120, height: "100%" }}
      >
        {data.photo && (
          <img
            src={data.photo}
            alt={data.name}
            className="object-cover rounded shadow-md"
            style={{ width: 100, height: 180 }}
          />
        )}
      </div>

      {/* RIGHT PANEL */}
      <div className="flex flex-col justify-between flex-1 p-3 relative">
        {/* LOGO – Top Right */}
        {data.logo && (
          <img
            src={data.logo}
            alt="Logo"
            className="absolute top-2 right-2 w-12 h-12 object-contain"
          />
        )}

        {/* USER DETAILS */}
        <div className="flex flex-col justify-center h-full ml-2 space-y-0.5 pr-14">
          <p className="text-lg font-bold text-gray-900 truncate">{data.name}</p>
          <p className="text-sm font-semibold text-gray-700 truncate">
            ID: {data.id}
          </p>

          {data.designation && (
            <p className="text-sm text-gray-700 truncate">
              {data.designation}
            </p>
          )}

          {data.department && (
            <p className="text-sm text-gray-700 truncate">
              {data.department}
            </p>
          )}

          {data.level && data.semester && (
            <p className="text-sm text-gray-700 truncate">
              Level: {data.level} | Semester: {data.semester}
            </p>
          )}

          {data.bloodGroup && (
            <p className="text-sm text-gray-700 truncate">
              Blood Group: {data.bloodGroup}
            </p>
          )}

          {data.type && (
            <p className="text-xs font-medium text-gray-600 truncate">
              {data.type}
            </p>
          )}
        </div>

        {/* QR CODE – Bottom Right */}
        {data.qrCode && (
          <div className="absolute bottom-8 right-3">
            <img
              src={data.qrCode}
              alt="QR Code"
              className="object-contain"
              style={{ width: 42, height: 42 }}
            />
          </div>
        )}

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mt-1"></div>

        {/* FOOTER */}
        {data.company && (
          <p className="text-xs text-gray-500 text-center mt-1 px-1 break-words">
            {data.company}
          </p>
        )}
      </div>
    </div>
  );
}
