import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentPage from './components/StudentPage';
import { useStudents } from './useStudents';

function App() {
  const { students, handleAddStudent, handleCheckin, handleCheckout } = useStudents();

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={<StudentForm onAddStudent={handleAddStudent} />}
          />
          <Route
            path="/students"
            element={
              <StudentPage
                students={students}
                onCheckin={handleCheckin}
                onCheckout={handleCheckout}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
