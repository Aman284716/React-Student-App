// import React from "react";
// import StudentItem from "./StudentItem";

// function StudentList({ students, onCheckin, onCheckout }) {
//   const presentStudents = students.filter(
//     (student) => student.checkoutTime === undefined
//   );

//   return (
//     <div className="mt-8">
//       <h2 className="text-lg font-bold mb-4">Students Present in School</h2>
//       <p className="mb-4">Total students: {students.length}</p>
//       <ul>
//         {presentStudents.map((student) => (
//           <StudentItem
//             key={student.rollNumber}
//             student={student}
//             onCheckin={onCheckin}
//             onCheckout={onCheckout}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StudentList;
