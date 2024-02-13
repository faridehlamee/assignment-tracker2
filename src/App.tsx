import React, { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

interface Assignment {
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  return (
    <>
      <Header assignments={assignments} setAssignments={setAssignments} />
      <Assignments assignments={assignments} setAssignments={setAssignments} />
    </>
  );
}

export default App;
