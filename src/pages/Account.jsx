import React, { useEffect, useState } from "react";

const Account = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
   
    const dummyData = [
      {
        id: 1,
        tableNo: 5,
        guests: 3,
        date: "2025-10-20",
        time: "7:30 PM",
        status: "Confirmed",
      },
      {
        id: 2,
        tableNo: 2,
        guests: 2,
        date: "2025-10-25",
        time: "8:00 PM",
        status: "Pending",
      },
    ];
    setBookings(dummyData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-red-700 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        {/* User Info */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold mb-2">My Account</h1>
          <p className="text-gray-200 text-sm">
            Welcome back! Here's your booking information
          </p>
        </div>

        {/* Booking List */}
        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base text-center border-collapse">
              <thead>
                <tr className="bg-yellow-400 text-red-900 font-bold">
                  <th className="py-3 px-2">#</th>
                  <th className="py-3 px-2">Table No</th>
                  <th className="py-3 px-2">Guests</th>
                  <th className="py-3 px-2">Date</th>
                  <th className="py-3 px-2">Time</th>
                  <th className="py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="odd:bg-white/10 even:bg-white/5 hover:bg-white/20 transition"
                  >
                    <td className="py-3 px-2">{booking.id}</td>
                    <td className="py-3 px-2">{booking.tableNo}</td>
                    <td className="py-3 px-2">{booking.guests}</td>
                    <td className="py-3 px-2">{booking.date}</td>
                    <td className="py-3 px-2">{booking.time}</td>
                    <td
                      className={`py-3 px-2 font-semibold ${
                        booking.status === "Confirmed"
                          ? "text-green-400"
                          : "text-yellow-300"
                      }`}
                    >
                      {booking.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-300 mt-6">
            You haven’t booked any table yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Account;
