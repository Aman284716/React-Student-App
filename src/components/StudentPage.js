import React from 'react';
import StudentTable from './StudentTable';

function StudentPage({ students, onCheckin, onCheckout }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <StudentTable
        students={students}
        onCheckin={onCheckin}
        onCheckout={onCheckout}
      />
    </div>
  );
}

export default StudentPage;
