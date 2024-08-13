import React from 'react';

function StudentTable({ students, onCheckin, onCheckout }) {
  if (!students) return <p>No students available</p>;

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Roll Number</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Phone</th>
          <th className="py-2 px-4 border-b">Check-in Time</th>
          <th className="py-2 px-4 border-b">Check-out Time</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.rollNumber}>
            <td className="py-2 px-4 border-b">{student.rollNumber}</td>
            <td className="py-2 px-4 border-b">{student.name}</td>
            <td className="py-2 px-4 border-b">{student.email}</td>
            <td className="py-2 px-4 border-b">{student.phone}</td>
            <td className="py-2 px-4 border-b">{student.checkinTime || 'N/A'}</td>
            <td className="py-2 px-4 border-b">{student.checkoutTime || 'N/A'}</td>
            <td className="py-2 px-4 border-b">
              {!student.checkinTime && (
                <button
                  onClick={() => onCheckin(student.rollNumber)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                >
                  Check In
                </button>
              )}
              {student.checkinTime && !student.checkoutTime && (
                <button
                  onClick={() => onCheckout(student.rollNumber)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Check Out
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
