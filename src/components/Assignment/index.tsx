
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
interface Assignment {
  title: string;
  completed: boolean;
}

interface AssignmentProps {
  assignment: Assignment;
  setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
}

export function Assignment({ assignment,setAssignments }: AssignmentProps) {

  const [isCompleted, setIsCompleted] = useState(assignment.completed);
  const handleDeleteAssignment = () => {
    setAssignments((prevAssignments) =>
      prevAssignments.filter((a) => a !== assignment)
    );
  };


  const handleToggle = () => {
    //setIsCompleted((prevCompleted) => !prevCompleted);
    setAssignments((prevAssignments) =>
      prevAssignments.map((a) =>
        a === assignment ? { ...a, completed: !a.completed } : a
      )
    );
    setIsCompleted(!isCompleted);
  };

  return (
    <div className={styles.assignment}>
      {/*the icone link:   https://react-icons.github.io/react-icons/icons/bs/ */}
      <button className={styles.checkContainer} onClick={handleToggle}>
        {isCompleted ? <BsCheckCircleFill /> : <div />}
      </button>

      <p>{assignment.title}</p>

      <button className={styles.deleteButton}  onClick={handleDeleteAssignment} >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
