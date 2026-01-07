export default function IDCardBack({ data }) {
  return (
    <div className="w-80 h-48 bg-gray-100 rounded-xl shadow-lg p-4 border">
      <p className="text-xs mb-3">
        Address: {data.address}
      </p>

      <p className="text-xs">
        If found, please return to the office.
      </p>

      <div className="mt-6 text-right">
        <img
          src={data.signature}
          alt="signature"
          className="w-24 ml-auto"
        />
        <p className="text-xs border-t pt-1 inline-block">
          Authorized Signature
        </p>
      </div>
    </div>
  );
}
