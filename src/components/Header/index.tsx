import React, { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

interface Assignment {
  title: string;
  completed: boolean;
}
interface HeaderProps {
  assignments: Assignment[];
  setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
}

export function Header({ assignments, setAssignments }: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  const handleCreateAssignment = () => {
    if (inputValue.trim() !== "") {
      const newAssignment = { title: inputValue, completed: false };
      setAssignments([...assignments, newAssignment]);
      alert ("From new Object1111: " + newAssignment.title);
      for (let i = 0; i < assignments.length; i++) {
        alert("From Array: " + assignments[i].title);
      }

      setInputValue(""); // Clear the input field after adding the assignment
    }
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleCreateAssignment} disabled={!inputValue.trim()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
