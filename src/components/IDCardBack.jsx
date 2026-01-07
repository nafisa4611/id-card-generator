export default function IDCardBack({ data }) {
  return (
    <div
      className="border rounded-lg shadow-md bg-white flex flex-col p-3"
      style={{ width: 360, height: 220 }}
    >
      {/* Header */}
      <div className="text-center mb-1 flex-shrink-0 h-6 border-b border-gray-200">
        <p className="text-xs font-semibold text-gray-600 uppercase">
          ID Card Details
        </p>
      </div>

      {/* Middle Section */}
      <div
        className="flex flex-col flex-grow space-y-0.5 overflow-hidden px-1"
        style={{ maxHeight: 100 }}
      >
        {data.address && (
          <p className="text-xs text-gray-700 truncate">
            Address: {data.address}
          </p>
        )}
        {data.phone && (
          <p className="text-xs text-gray-700 truncate">Phone: {data.phone}</p>
        )}
        {data.email && (
          <p className="text-xs text-gray-700 truncate">Email: {data.email}</p>
        )}
        {data.emergencyContact && (
          <p className="text-xs text-gray-700 truncate">
            Emergency Contact: {data.emergencyContact}
          </p>
        )}
        {data.expiry && (
          <p className="text-xs text-gray-700 truncate">Valid Until: {data.expiry}</p>
        )}
      </div>

      {/* Bottom Section: Signature */}
      <div className="flex flex-col flex-shrink-0 mt-1">
        {/* Signature */}
        <div className="flex justify-end items-center">
          <div className="flex flex-col items-center">
            {data.signature && (
              <img
                src={data.signature}
                alt="Authorized Signature"
                className="object-contain"
                style={{ width: 70, height: 35 }}
              />
            )}
            <p className="text-xs text-gray-600 mt-1 text-center">
              Authorized Signatory
            </p>
          </div>
        </div>

        {/* Divider below signature */}
        <div className="border-t border-gray-200 mt-1"></div>

        {/* Footer: Company Name */}
        {data.company && (
          <div className="text-center mt-1 h-4">
            <p className="text-xs text-gray-500 truncate">{data.company}</p>
          </div>
        )}
      </div>
    </div>
  );
}
