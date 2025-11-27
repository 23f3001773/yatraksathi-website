export default function OffersGrid() {
  const data = [
    { title: "Varanasi Ganga Darshan", days: "2 Days", price: "₹2,500" },
    { title: "Ayodhya Ram Mandir Tour", days: "1 Day", price: "₹3,000" },
    { title: "Kashi Temple Tour", days: "3 Days", price: "₹6,500" },
  ];

  return (
    <section className="container mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Popular Tour Packages</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((p, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-5">
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.days}</p>
            <p className="text-yatraRed font-semibold mt-3">{p.price} <span className="text-gray-500 text-sm">| per person</span></p>
            <button className="mt-4 bg-yatraRed text-white px-4 py-2 rounded">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}
