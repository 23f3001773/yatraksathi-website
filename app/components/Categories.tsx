export default function Categories() {
  const items = ["Flights", "Hotels", "Holidays", "Bus", "Trains", "Cabs"];

  return (
    <div className="bg-white border-b">
      <div className="container flex gap-3 overflow-x-auto py-3">
        {items.map((i) => (
          <button
            key={i}
            className="px-5 py-2 rounded-full border text-gray-600 whitespace-nowrap hover:bg-red-50 hover:border-yatraRed transition"
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
}
