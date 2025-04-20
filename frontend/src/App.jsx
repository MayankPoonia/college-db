import React from "react";
import StudentManager from "./components/StudentManager";

const App = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">College Management System</h1>
      <StudentManager />
    </div>
  );
};

export default App;
