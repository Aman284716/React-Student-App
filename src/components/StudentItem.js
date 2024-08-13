import React from "react";

function StudentItem({ student, onCheckin, onCheckout }) {
  return (
    <li key={student.rollNumber} className="flex items-center mb-2">
      <div className="flex-grow">
        {student.name} (
        {student.checkinTime ? (
          <>
            Checked In: {student.checkinTime}{" "}
            {student.checkoutTime && <span>- </span>}
          </>
        ) : null}{" "}
        {student.checkoutTime && <>Checked Out: {student.checkoutTime}</>}
        {!student.checkinTime && !student.checkoutTime && (
          <>Not checked in yet)</>
        )}
      </div>
      <div className="flex">
        <button
          className="mt-4 ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          onClick={() => onCheckin(student.rollNumber)}
          disabled={!!student.checkinTime}
        >
          Check In
        </button>
        {student.checkinTime && !student.checkoutTime && (
          <button
            className="mt-4 ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => onCheckout(student.rollNumber)}
            disabled={!!student.checkoutTime}
          >
            Check Out
          </button>
        )}
      </div>
    </li>
  );
}

export default StudentItem;
