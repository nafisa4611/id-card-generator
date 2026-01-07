export default function IDCardFront({ data }) {
  return (
    <div className="w-80 h-48 bg-white rounded-xl shadow-lg p-4 border">
      <div className="flex gap-3">
        <img
          src={data.photo}
          alt="profile"
          className="w-20 h-20 rounded object-cover border"
        />

        <div className="text-sm">
          <h2 className="font-bold text-lg">{data.name}</h2>
          <p>ID: {data.id}</p>
          <p>{data.designation}</p>
          <p>{data.department}</p>
          <p>Blood: {data.bloodGroup}</p>
        </div>
      </div>

      <p className="text-center text-xs mt-3 font-semibold">
        {data.company}
      </p>
    </div>
  );
}
