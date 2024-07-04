// src/pages/BookingPage.tsx

const bookings = [
  {
    id: "594017005302237590",
    name: "KHR Indoor Cricket",
    date: "29 / 11 / 2022",
    time: "11:30 a.m. - 1:30 p.m.",
    status: "ACTIVE",
    imageUrl: "../assets/indoor cricket2.png",
  },
  {
    id: "594017005302237590",
    name: "UNI Sports Center",
    date: "29 / 11 / 2022",
    time: "11:30 a.m. - 1:30 p.m.",
    status: "PAST",
    imageUrl: "path/to/image2.jpg",
  },
  {
    id: "594017005302237590",
    name: "CJD Sports",
    date: "29 / 11 / 2022",
    time: "11:30 a.m. - 1:30 p.m.",
    status: "Cancelled",
    imageUrl: "path/to/image3.jpg",
  },
];

const statusColors = {
  ACTIVE: "bg-green-500",
  PAST: "bg-yellow-500",
  Cancelled: "bg-red-500",
};

function Booking() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="filter"
        >
          Filter
        </label>
        <select
          id="filter"
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option>All</option>
        </select>
      </div>
      <div>
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="mb-4 flex items-center border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={booking.imageUrl}
              alt={booking.name}
              className="w-24 h-24 object-cover"
            />
            <div className="p-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{booking.name}</h3>
                <span
                  className={`ml-4 px-2 py-1 text-white text-sm rounded ${
                    statusColors[booking.status]
                  }`}
                >
                  {booking.status}
                </span>
              </div>
              <p className="text-gray-600">ID: {booking.id}</p>
              <p className="text-gray-600">{booking.date}</p>
              <p className="text-gray-600">{booking.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;
